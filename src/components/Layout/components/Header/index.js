/* eslint-disable no-unused-vars */

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdd,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faLanguage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import { Effects, Inbox, Messages } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@ndqhuy2105',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: './settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: './logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('upload-btn')} text leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                                Upload
                            </Button>
                            <div className={cx('icon-user-login')}>
                                <Tippy delay={[0, 100]} content="Create effects" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <Effects />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <Messages />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <Inbox />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
                                fallback="https://vivureviews.com/wp-content/uploads/2022/02/among-us-profile-picture.jpg"
                            />
                        ) : (
                            <div className={cx('more-more')}>
                                <Tippy delay={[0, 100]} content="Create effects" placement="bottom">
                                    <button className={cx('btn-eff')}>
                                        <Effects />
                                    </button>
                                </Tippy>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
