import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Popper as WrapperPopper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
const searchResultSource = [
    // {
    //     userName: 'ssspinnerwolf',
    //     name: 'sssspinnerwolf',
    //     check: true,
    // },
    // {
    //     userName: 'sandy.ss',
    //     name: 'sandy',
    //     check: false,
    // },
    // {
    //     userName: 'TranNguyen',
    //     name: 'Ha',
    //     check: false,
    // },
];
function Header() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults(searchResultSource);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    appendTo="parent"
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <div className={cx('search-account')}>
                                    <span className={cx('search-title')}>Tài khoản</span>
                                    <div className={cx('search-account-list')}>
                                        {searchResults.map((searchResult, index) => (
                                            <AccountItem searchResult={searchResult} key={index} />
                                        ))}
                                    </div>
                                </div>
                                <div className={cx('see-more-account')}>Xem tất cả kết quả dành cho "sss"</div>
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <div className={cx('input-button')}>
                            <button className={cx('clear-button', 'd-none')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </div>
                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>Action</div>
            </div>
        </header>
    );
}

export default Header;
