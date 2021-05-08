import { Card } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import FeedInfo from './feedInfo';
import ImageDisplay from './ImageDisplay.js';
import ActionContainer from './ActionContainer';
import CommentBox from './CommentBox';
import styles from './Feed.module.css';

const Feeds = ({ feedLists }) => {
    return (
        <div className={styles.feedContainer}>
            {
                feedLists.map((element, index) => {
                    return (
                        <Card className={styles.card} bodyStyle={{ padding: "0", }} title={<FeedInfo data={element} />} extra={<MoreOutlined rotate="90" className={styles.moreIcon} />} key={index}>
                            <p className={styles.postText}>{element.caption}</p>
                            { element.image  && <ImageDisplay data={element} />}
                            <ActionContainer data={element} />
                            <CommentBox data={element} />
                        </Card>
                    )
                })
            }


        </div>
    )
}
export default Feeds;