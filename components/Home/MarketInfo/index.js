import CardContainer from './CardContainer';
import styles from './MarketInfo.module.css';
const headers=["Symbol","Last Price","Change","%Change"];
const MarketInfo=({marketLists,watchLists})=>{
    return (
        <div className={styles.marketInfoContainer}>
            <CardContainer title="My Watchlist" data={watchLists}  headers={headers} isPlus={true} />
            <CardContainer title="Market" data={marketLists}  headers={headers} isPlus={false} />
        </div>
    )
};
export default MarketInfo;