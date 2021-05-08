import LikeIcon from './../../../../images/like.svg';
import UpIcon from './../../../../images/up.svg';
import DownIcon from './../../../../images/down.svg';
import Comment from './../../../../images/comment.svg';
import Share from './../../../../images/share.svg';
import Button from './Button.js';
import styles from './ActionContainer.module.css';
const ActionContainer = ({data}) => {
    return (
        <>
        <div className={styles.actionContainer}>
            <div className={styles.actionButtons}>
                <Button icon={<LikeIcon />} value={data.likes} />
                <Button icon={<UpIcon />} value={data.up} />
                <Button icon={<DownIcon />} value={data.down} />
            </div>
            <div className={styles.activityContainer}>
                <p>{data.comments} comments</p>
                <p>{data.shares} Shares</p>
            </div>
        </div>
        <div className={styles.actionContainer}>
            <Button icon={<LikeIcon />} value="Like" />
            <Button icon={<UpIcon />} value="Up" />
            <Button icon={<DownIcon />} value="Down" />
            <Button icon={<Comment />} value="Comment" />
            <Button icon={<Share />} value="Share" />
        </div>
        </>
    )
}
export default ActionContainer;