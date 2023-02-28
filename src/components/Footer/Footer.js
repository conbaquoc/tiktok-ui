import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('line-one')}>
                <a href="/" className={cx('item')}>
                    About
                </a>
                <a href="/" className={cx('item')}>
                    Newsroom
                </a>
                <a href="/" className={cx('item')}>
                    Contact
                </a>
                <a href="/" className={cx('item')}>
                    Carrers
                </a>
                <a href="/" className={cx('item')}>
                    ByteDance
                </a>
            </div>
            <div className={cx('line-two')}>
                <a href="/" className={cx('item')}>
                    TikTok for Good
                </a>
                <a href="/" className={cx('item')}>
                    Advertise
                </a>
                <a href="/" className={cx('item')}>
                    Developers
                </a>
                <a href="/" className={cx('item')}>
                    Transparency
                </a>
                <a href="/" className={cx('item')}>
                    TikTok Rewards
                </a>
                <a href="/" className={cx('item')}>
                    TikTok Browse
                </a>
                <a href="/" className={cx('item')}>
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('line-three')}>
                <a href="/" className={cx('item')}>
                    Help
                </a>
                <a href="/" className={cx('item')}>
                    Safety
                </a>
                <a href="/" className={cx('item')}>
                    Terms
                </a>
                <a href="/" className={cx('item')}>
                    Privacy
                </a>
                <a href="/" className={cx('item')}>
                    Creator
                </a>
                <a href="/" className={cx('item')}>
                    Portal
                </a>
                <a href="/" className={cx('item')}>
                    Community Guildlines
                </a>
            </div>
            <div className={cx('copyright')}>© 2023 TikTok</div>
        </div>
    );
}

export default Footer;
