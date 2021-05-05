import styles from './Feed.module.css';
const FeedInfo = ({data}) => {
    return (
        <div className={styles.infoContainer}>
            <div >
                <img className={styles.profile} src={data.author.profile} />
            </div>
            <div className={styles.infoTitleContainer}>
                <h3>{data.author.name}</h3>
                <p>Updated {data.time}</p>
            </div>
        </div>
    )
}
export default FeedInfo;