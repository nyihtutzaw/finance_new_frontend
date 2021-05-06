import { Card } from 'antd';
import styles from './NewsContainer.module.css';


const news=[
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
]

const NewsContainer=()=>{
    return (
        <Card className={styles.card} bodyStyle={{padding:"0"}}>
            <h3>News</h3>
            {
                news.map((element)=>{
                    return (
                        <div className={styles.newItem}>
                        <img src={element.image} />
                        <div className={styles.caption}>
                            <p>{element.body}</p>
                            <span>{element.website}</span>
                        </div>
                    </div>
                    )
                })
            }
           
        </Card>
    )
}
export default NewsContainer;