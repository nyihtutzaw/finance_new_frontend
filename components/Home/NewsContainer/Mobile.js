import { Card } from 'antd';
import NewsList from './NewsList.js';
import styles from './NewsContainer.module.css';
const MobileNewsContainer=()=>{
    return (
        <Card className={styles.mobileNewsListCard} bodyStyle={{padding:"0"}}>
        <h3>News</h3>
        <div className={styles.newsListMobile}>
            <NewsList />
        </div>
    </Card>
    )
}

export default MobileNewsContainer;