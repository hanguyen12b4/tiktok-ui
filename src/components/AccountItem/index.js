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
                alt=""
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e1b840ab597a1367e638b381e6e05ad7~c5_100x100.jpeg?x-expires=1666317600&x-signature=G1y824CyiZtwzJjJSldGwhMee0E%3D"
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
