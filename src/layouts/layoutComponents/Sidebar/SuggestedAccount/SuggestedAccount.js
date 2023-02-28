import { useState, useEffect, memo } from 'react';
import ShowAccount from '~/components/ShowAccount';
import config from '~/config';
import { accountService } from '~/services';

function SuggestedAccount() {
    const [accounts, setAccounts] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    // Get config
    const { totalLoadSuggested: total, defaultShowSuggested: show } = config.accounts;

    const currentItems = seeAll ? accounts : accounts.slice(0, show);
    const btnTitle = seeAll ? 'Ẩn bớt' : 'Xem tất cả';

    const options = {
        btnTitle,
        hoverActivate: true,
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await accountService.getSuggestedAccount(total);

            setAccounts(result);
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleSeeAll = () => {
        setSeeAll(!seeAll);
    };

    return (
        <ShowAccount
            title="Tài khoản được đề xuất"
            accountItems={currentItems}
            onClick={handleToggleSeeAll}
            {...options}
        />
    );
}

export default memo(SuggestedAccount);
