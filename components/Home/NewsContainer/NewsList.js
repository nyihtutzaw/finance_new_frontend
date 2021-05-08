import { API_ENDPOINT } from './../../../constants.js';
import styles from './NewsContainer.module.css';
const NewsList = ({ blogLists }) => {
    return (
        <>
            {
               blogLists.map((element, index) => {
                    return (
                        <div className={styles.newItem} key={index}>
                            <img src={`${API_ENDPOINT}${element.image.url}`} />
                            <div className={styles.caption}>
                                <p>{element.blog.substr(0,120)}</p>
                                <span>{element.website}</span>
                            </div>
                        </div>
                    )
                })
            } *
        </>
    )
}
export default NewsList;