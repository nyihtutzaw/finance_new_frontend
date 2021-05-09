import Header from './header.js';
import Company from './company.js';
import LineChart from './lineChart';
const MarketDetail=({market})=>{
    return (
        <>
        
        <Header market={market} />
        <LineChart />
        { market.profile && market.stock_info && <Company market={market} /> }
        </>
    )
}

export default MarketDetail;