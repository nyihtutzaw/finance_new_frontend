import { API_ENDPOINT } from './../../../constants';
import styles from './Feed.module.css';
const ImageDisplay = ({data}) => {
    return (
        <div>
            <img className={styles.postImage} src={`${API_ENDPOINT}${data.image.url}`} />
            <div className={styles.postImageLabel}>
                <h3>{data.imageCaption}</h3>
                <p>{data.imageDescription}</p>
            </div>
        </div>
    )
}
export default ImageDisplay;