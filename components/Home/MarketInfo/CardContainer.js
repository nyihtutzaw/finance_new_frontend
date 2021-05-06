import { Card } from 'antd';
import CardTitle from './CardTitle.js';
import styles from './MarketInfo.module.css'
const CardContainer = ({ title, data,headers,isPlus }) => {
    return (
        <Card className={styles.card} title={<CardTitle title={title} isPlus={isPlus} />} >
            <div className={styles.tableHeader}>
                {
                    headers.map((element,index)=>{
                        return (
                            <div><p className={index==0?styles.tableTitle + ' ' + styles.tableTitleFirst:styles.tableTitle}>{element}</p></div>
                        )
                    })
                }
            </div>
            {
                data.map((element) => {
                    return (
                        <div className={styles.tableRowContainer}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableData + ' ' + styles.tableDataFirst}><p>{element.symbol}</p></div>
                                <div className={styles.tableData}><p className={styles.normalText}>{element.lastPrice}</p></div>
                                <div className={styles.tableData}><p className={element.change<0?styles.dangerText:styles.successText}>{element.change}</p></div>
                                <div className={styles.tableData}>
                                    <p className={element.changePercentage<0?styles.dangerText:styles.successText}>
                                    {element.changePercentage>0 &&  <span>+</span> }
                                    {element.changePercentage}%</p>
                                </div>
                            </div>
                            <p className={styles.longSymbol}>{element.longSymbol}</p>
                        </div>
                    )
                })
            }
        </Card>
    )
}
export default CardContainer;