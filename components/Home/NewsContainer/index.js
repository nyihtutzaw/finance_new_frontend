import { Card } from 'antd';
import NewsList from './NewsList.js';
import styles from './NewsContainer.module.css';
const NewsContainer=({blogLists})=>{
    return (
        <Card className={styles.card} bodyStyle={{padding:"0"}}>
            <h3>News</h3>
            <NewsList blogLists={blogLists} />
        </Card>
    )
}
export default NewsContainer;