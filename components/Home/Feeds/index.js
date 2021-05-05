import { Card } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import FeedInfo from './feedInfo';
import ImageDisplay from './ImageDisplay.js';
import ActionContainer from './ActionContainer';
import CommentBox from './CommentBox';
import styles from './Feed.module.css';

const Feeds = () => {

    const feeds = [
        {
            author: {
                profile: "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
                name: "Mg Mg",
            },
            time: "Yesterday",
            caption: "Friday trade ended with all major U.S. indices posting losses for the day. The Dow fell 1.69%, the S&P 500 slipped 1.51% and the Nasdaq Composite dropped 1.53%.",
            image: "https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",
            imageCaption: "INVESTING.COM",
            imageDescription: "Stocks - Dow Ends Wild Week in Red on Fears Deeper Enonomic Rout Still Ahead",
            like: "22",
            up: "100",
            down: "200",
            comments: "20",
            shares: "20",
        },
        {
            author: {
                profile: "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
                name: "Kelvin Htoo",
            },
            time: "4:30",
            caption: "Is $MGM rally? I am refer to this news, Friday trade ended with all major U.S. indices posting losses for the day. The Dow fell 1.69%, the S&P 500 slipped 1.51% and the Nasdaq Composite dropped 1.53%.",
            image: "",
            imageCaption: "",
            imageDescription: "",
            like: "22",
            up: "100",
            down: "200",
            comments: "20",
            shares: "20",
        }
    ]

    return (
        <div className={styles.feedContainer}>
            {
                feeds.map((element) => {
                    return (
                        <Card className={styles.card} bodyStyle={{ padding: "0", }} title={<FeedInfo data={element} />} extra={<MoreOutlined rotate="90" className={styles.moreIcon} />} >
                            <p className={styles.postText}>{element.caption}</p>
                            { element.image.length>0 && <ImageDisplay data={element} /> }
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