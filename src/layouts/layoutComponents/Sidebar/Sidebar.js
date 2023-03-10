/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Navigation from './Navigation';
import SuggestedAccount, { FollowingAccount } from './SuggestedAccount';

import { Scrollbars as CustomScrollbar } from 'react-custom-scrollbars';
import LoginNotify from './LoginNotify';
import Discover from './Discover';
import BorderTopContainer from '~/components/BorderTopContainer';

const cx = classNames.bind(styles);

function Sidebar({ suggestedAcc = true, followingAcc = true }) {
    const [hideScrollbar, setHideScrollbar] = useState(true);

    const customScrollbar = (className) => {
        return (props) => <div className={cx(className)} {...props}></div>;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <CustomScrollbar
                    hideTracksWhenNotNeeded
                    autoHide={hideScrollbar}
                    autoHideTimeout={0}
                    renderView={customScrollbar('scrollbar-view')}
                    renderTrackVertical={customScrollbar('scrollbar-track')}
                    renderThumbVertical={customScrollbar('scrollbar-thumb')}
                    onMouseEnter={() => setHideScrollbar(false)}
                    onMouseLeave={() => setHideScrollbar(true)}
                >
                    <div className={cx('content')}>
                        <Navigation />
                        {/* Login Notify */}
                        <LoginNotify />

                        {/* Sugges Account */}
                        {suggestedAcc && <SuggestedAccount />}

                        {/* Followed */}
                        {followingAcc && <FollowingAccount />}

                        {/* Discover */}
                        <Discover />

                        {/* Footer */}
                        <BorderTopContainer className={cx('footer-container')}>
                            <p className={cx('link-list')}>
                                <a className={cx('link-item')} href="#">
                                    Gi???i thi???u
                                </a>
                                <a className={cx('link-item')} href="#">
                                    TikTok Browse
                                </a>
                                <a className={cx('link-item')} href="#">
                                    B???ng tin
                                </a>
                                <a className={cx('link-item')} href="#">
                                    Li??n H???
                                </a>
                                <a className={cx('link-item')} href="#">
                                    S??? nghi???p
                                </a>
                                <a className={cx('link-item')} href="#">
                                    ByteDance
                                </a>
                            </p>
                            <p className={cx('link-list')}>
                                <a className={cx('link-item')} href="#">
                                    TikTok for Good
                                </a>
                                <a className={cx('link-item')} href="#">
                                    Qu???ng c??o
                                </a>
                                <a className={cx('link-item')} href="#">
                                    Developers
                                </a>
                                <a className={cx('link-item')} href="#">
                                    Transparency
                                </a>
                                <a className={cx('link-item')} href="#">
                                    TikTok Rewards
                                </a>
                            </p>
                            <p className={cx('link-list')}>
                                <a className={cx('link-item')} href="#">
                                    Tr??? gi??p
                                </a>
                                <a className={cx('link-item')} href="#">
                                    An to??n
                                </a>
                                <a className={cx('link-item')} href="#">
                                    ??i???u kho???n
                                </a>
                                <a className={cx('link-item')} href="#">
                                    Quy???n ri??ng t??
                                </a>
                                <a className={cx('link-item')} href="#">
                                    Creator Portal
                                </a>
                                <a className={cx('link-item')} href="#">
                                    H?????ng d???n c???ng ?????ng
                                </a>
                            </p>
                            <p className={cx('link-list')}>
                                <span className={cx('more')}>Th??m</span>
                            </p>

                            <span className={cx('more')}>?? 2022 TikTok - Clone by anghiadx</span>
                        </BorderTopContainer>
                    </div>
                </CustomScrollbar>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    suggestedAcc: PropTypes.bool,
    followingAcc: PropTypes.bool,
};

export default memo(Sidebar);
