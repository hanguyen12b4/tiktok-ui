import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ result }) {
    return (
        <Link to={`/@${result.nickname}`} className={cx('search-account-item')}>
            <Image className={cx('account-image')} alt={result.full_name} src={result.avatar} />
            <div className={cx('account-info')}>
                <div className={cx('username-wrap')}>
                    <h3 className={cx('account-username')}>{result.nickname}</h3>
                    {result.check ? <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} /> : ''}
                </div>
                <p className={cx('account-name')}>{result.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
