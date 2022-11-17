import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as request from '~/utils/request';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Popper as WrapperPopper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search({ data }) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }
        setLoading(true);
        request
            .get('users/search', {
                params: {
                    q: debounced,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResults(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            appendTo="parent"
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        <div className={cx('search-account')}>
                            <span className={cx('search-title')}>Tài khoản</span>
                            <div className={cx('search-account-list')}>
                                {searchResults.map((result) => (
                                    <AccountItem result={result} key={result.id} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('see-more-account')}>Xem tất cả kết quả dành cho "{debounced}"</div>
                    </WrapperPopper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                <div className={cx('input-button')}>
                    {!!searchValue && !loading && (
                        <button className={cx('clear-button')}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                onClick={() => {
                                    setSearchValue('');
                                    setSearchResults([]);
                                    inputRef.current.focus();
                                }}
                            />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                </div>
                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
