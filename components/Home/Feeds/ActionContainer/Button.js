import styles from './ActionContainer.module.css';
const Button=(props)=>{
    return (
        <div className={styles.actionButton}>
                {props.icon}
                <p>{props.value}</p>
            </div>
    )
}
export default Button;