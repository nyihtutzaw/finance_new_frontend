import { Card } from 'antd';
import CardTitle from './CardTitle.js';
import styles from './MarketInfo.module.css'
const CardContainer = ({ title, data, headers, isPlus }) => {
    return (
        <Card className={styles.card} title={<CardTitle title={title} isPlus={isPlus} />} >
            <div className={styles.tableHeader}>
                {
                    headers.map((element, index) => {
                        return (
                            <div><p className={index == 0 ? styles.tableTitle + ' ' + styles.tableTitleFirst : styles.tableTitle}>{element}</p></div>
                        )
                    })
                }
            </div>
            {
                data.map((element) => {

                    const data = {
                        symbol: isPlus ? element.market.symbol : element.symbol,
                        lastPrice: isPlus ? element.market.lastPrice : element.lastPrice,
                        change: isPlus ? element.market.change : element.change,
                        changePercentage: isPlus ? element.market.changePercentage : element.changePercentage,
                        longSymbol: isPlus ? element.market.longSymbol : element.longSymbol
                    }

                    return (
                        <div className={styles.tableRowContainer}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableData + ' ' + styles.tableDataFirst}><p>{data.symbol}</p></div>
                                <div className={styles.tableData}><p className={styles.normalText}>{data.lastPrice}</p></div>
                                <div className={styles.tableData}><p className={data.change < 0 ? styles.dangerText : styles.successText}>{data.change}</p></div>
                                <div className={styles.tableData}>
                                    <p className={data.changePercentage < 0 ? styles.dangerText : styles.successText}>
                                        {data.changePercentage > 0 && <span>+</span>}
                                        {data.changePercentage}
                                        {data.changePercentage && <span>%</span>}
                                    </p>
                                </div>
                            </div>
                            <p className={styles.longSymbol}>{data.longSymbol}</p>
                        </div>
                    )
                })
            }
        </Card>
    )
}
export default CardContainer;