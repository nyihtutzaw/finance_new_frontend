import styles from './NewsContainer.module.css';

const news=[
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    {body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",image:"https://blog.playstation.com/tachyon/2019/10/unnamed-file-45.jpg?resize=1088,500&crop_strategy=smart",website:"Trading.com"},
    
]
const NewsList=()=>{
    return (
       <>
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
        </>
    )
}

export default NewsList;