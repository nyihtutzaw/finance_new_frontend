import { Card } from 'antd';
import CardTitle from './CardTitle.js';
import styles from './MarketInfo.module.css'
const CardContainer = () => {
    return (
        <Card className={styles.card} bodyStyle={{ padding: "0", }} title={<CardTitle />} >
            <div className={styles.tableHeader}>
                <div><p className={styles.tableTitleFirst}>Symbol</p></div>
                <div><p className={styles.tableTitle}>Last Price</p></div>
                <div><p className={styles.tableTitle}>Change</p></div>
                <div><p className={styles.tableTitle}>%Change</p></div>
            </div>
            <div className={styles.tableRow}>
                <div><p className={styles.tableTitle}>WIX</p></div>
                <div><p className={styles.tableTitle}>94.45</p></div>
                <div><p className={styles.tableTitle}>37.92</p></div>
                <div><p className={styles.tableTitle}>0.2444</p></div>
            </div>
        </Card>
    )
}
export default CardContainer;