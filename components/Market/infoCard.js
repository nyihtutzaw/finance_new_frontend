import style from './MarketDetail.module.css';
const InfoCard = ({ title, infos }) => {
    return (
        <div className={style.infoBox}>
            <h3>{title}</h3>
            {
                infos.map((element, index) => {
                    return (
                        <div className={style.infoList} key={index}>
                            <p className={style.header}>{element.title}</p>
                            <p> : </p>
                            <p>{element.value}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default InfoCard;