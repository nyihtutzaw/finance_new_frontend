import styles from './Feed.module.css';
const ImageDisplay = ({data}) => {
    return (
        <div>
            <img className={styles.postImage} src={data.image} />
            <div className={styles.postImageLabel}>
                <h3>{data.imageCaption}</h3>
                <p>{data.imageDescription}</p>
            </div>
        </div>
    )
}
export default ImageDisplay;