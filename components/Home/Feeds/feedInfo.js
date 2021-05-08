import moment from 'moment';
import { API_ENDPOINT } from './../../../constants';
import styles from './Feed.module.css';
const FeedInfo = ({ data }) => {
    
    const getDateDisplay = () => {
        let updateMoment = moment(data.updated_at);
        let date = updateMoment.format("YYYY/MM/DD");
        let sameDay = updateMoment.isSame(moment(), 'day')
        let sameHour = updateMoment.hour() == moment().hour();
        let minDiff = moment().minute() - updateMoment.minute();
        let hourDiff = moment().hour() - moment(data.updated_at).hour();
        let minText = minDiff > 1 ? "minutes" : "minute";
        let hourText = hourDiff > 1 ? "hours" : "hour";
        if (sameDay) {
            if (minDiff==0) date=" Just Now";
            else if (sameHour) date = `${minDiff} ${minText} ago`;
            else date = `${hourDiff} ${hourText} ago`;
        }
        return <p>Updated at {date}</p>
    }

    return (
        <div className={styles.infoContainer}>
            <div >
                <img className={styles.profile} src={`${API_ENDPOINT}${data.author.profile.url}`} />
            </div>
            <div className={styles.infoTitleContainer}>
                <h3>{data.author.name}</h3>
                {getDateDisplay()}
            </div>
        </div>
    )
}
export default FeedInfo;