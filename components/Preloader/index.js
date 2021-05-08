import styles from './Preloader.module.css';
const Preloader=()=>{
    return (
        <div className={styles.loader}>
            <img src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif" />
        </div>
    )
}
export default Preloader;