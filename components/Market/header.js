import { Card,Button } from 'antd';
import style from './MarketDetail.module.css';
const Header=({market})=>{
    return (
        <Card className={style.card} bodyStyle={{'padding':0}}>
            <div className={style.titleBar}>
                <div>
                    <h1>{market.symbol}</h1>
                </div>
                <div className={style.descriptionContainer}>
                    <p>NYSE</p>
                    <p>{market.longSymbol}</p>
                </div>
                <div className={style.buttonContainer}>
                    <Button>Follow</Button>
                </div>
            </div>
            <div className={style.subTitleBar}>
                <h1>{market.lastPrice}</h1>
                <p className={style.change}>{market.change } ({market.changePercentage})</p>
                <p className={style.lowHeight}>High : <span>{market.low}</span></p>
                <p className={style.lowHeight}>Low  : <span>{market.high}</span></p>
            </div>
        </Card>
    )
}
export default Header;