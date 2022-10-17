import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    leftIcon,
    rightIcon,
    common,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    classNames,
    onClick,
    ...passProps
}) {
    let props = {
        onClick,
        ...passProps,
    };
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disabled) {
        Object.key(props).forEach((key) => {
            if (key.startswith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [classNames]: classNames,
        common,
        primary,
        outline,
        rounded,
        small,
        large,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            <span>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </span>
        </Comp>
    );
}

export default Button;
