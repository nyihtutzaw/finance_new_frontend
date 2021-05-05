import { PlusOutlined } from '@ant-design/icons';
import styles from './MarketInfo.module.css'
const CardTitle=()=>{
    return (
        <div className={styles.cardTitle}>
            <h2>Hi <span>&#62;</span></h2>
            <PlusOutlined className={styles.plusIcon} />
        </div>
    )
}
export default CardTitle;