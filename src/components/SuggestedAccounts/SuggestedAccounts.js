import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import SuggAccountItem from './SuggAccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onViewChange, isSeeAll = false }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <SuggAccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')} onClick={() => onViewChange(!isSeeAll)}>
                {isSeeAll ? 'See less' : 'See all'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
