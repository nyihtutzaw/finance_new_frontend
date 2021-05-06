import CardContainer from './CardContainer';
import styles from './MarketInfo.module.css';

const watchLists=[
    {
        symbol:"WIX",
        lastPrice:94.45,
        change:0.45,
        changePercentage:0.47,
        longSymbol:"Wix.com Ltd"
    },
    {
        symbol:"LVS",
        lastPrice:37.93,
        change:-2.35,
        changePercentage:-1.06,
        longSymbol:"Las Vegas Sands Corp"
    },
    {
        symbol:"8232.HK",
        lastPrice:94.45,
        change:null,
        changePercentage:null,
        longSymbol:"Classified Group (Holdings) Limited"
    }
]


const marketLists=[
    {
        symbol:"WIX",
        lastPrice:94.45,
        change:0.45,
        changePercentage:0.47,
        longSymbol:"Wix.com Ltd"
    },
    {
        symbol:"Google",
        lastPrice:94.45,
        change:0.45,
        changePercentage:0.47,
        longSymbol:"Google.com"
    },
    {
        symbol:"Apple",
        lastPrice:94.45,
        change:0.45,
        changePercentage:0.47,
        longSymbol:"Apple.com"
    },
    {
        symbol:"MGM",
        lastPrice:94.45,
        change:0.45,
        changePercentage:0.47,
        longSymbol:"Mgm.com.Ltd"
    },
    {
        symbol:"STI Index",
        lastPrice:94.45,
        change:0.45,
        changePercentage:0.47,
        longSymbol:"Singapore Index"
    },
]


const headers=["Symbol","Last Price","Change","%Change"];

const MarketInfo=()=>{
    return (
        <div className={styles.marketInfoContainer}>
            <CardContainer title="My Watchlist" data={watchLists}  headers={headers} isPlus={true} />
            <CardContainer title="Market" data={marketLists}  headers={headers} isPlus={false} />
        </div>
    )
};
export default MarketInfo;