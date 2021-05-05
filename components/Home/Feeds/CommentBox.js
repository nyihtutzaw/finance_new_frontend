import { Input } from 'antd';
import styles from './Feed.module.css';
const CommentBox=()=>{
    return (
        <div className={styles.commentContainer}>
            <img className={styles.commentProfile} src="https://i.pinimg.com/originals/78/ac/aa/78acaad3c2890c0d47f94ec7b3cce9fb.jpg" />
            <Input placeholder="Write Comment..."  className={styles.commentTextBox}/>
        </div>
    )
}
export default CommentBox;