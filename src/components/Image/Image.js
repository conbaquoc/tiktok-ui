import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import assetImages from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(function ({ className, src, alt = '', fallback = assetImages.noImage, ...props }, REF) {
    const [error, setError] = useState(false);

    const handleImageError = () => {
        setError(fallback);
    };
    return (
        <img
            className={cx('img', { [className]: className })}
            ref={REF}
            src={error || src}
            alt={alt}
            {...props}
            onError={handleImageError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
