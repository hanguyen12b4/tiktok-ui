import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ searchResult }) {
    return (
        <div className={cx('search-account-item')}>
            <img
                className={cx('account-image')}
                alt="account-img"
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6282287a97d2f3c55744e0c68a7f36c9~c5_300x300.webp?x-expires=1665014400&x-signature=VtTXoC26xq8g4ibEl72U6T7A2hU%3D"
            />
            <div className={cx('account-info')}>
                <div className={cx('username-wrap')}>
                    <h3 className={cx('account-username')}>{searchResult.userName}</h3>
                    {searchResult.check ? <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} /> : ''}
                </div>
                <p className={cx('account-name')}>{searchResult.name}</p>
            </div>
        </div>
    );
}

export default AccountItem;
