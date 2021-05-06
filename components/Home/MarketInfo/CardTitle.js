import { PlusOutlined } from '@ant-design/icons';
import styles from './MarketInfo.module.css'
const CardTitle=({title,isPlus})=>{
    return (
        <div className={styles.cardTitle}>
            <h2>{title} <span>&#62;</span></h2>
            { isPlus && <PlusOutlined className={styles.plusIcon} /> }
        </div>
    )
}
export default CardTitle;