import { Row, Col } from 'antd';
import ForwardIcon from './../../../images/forward.svg';
import BackwardIcon from './../../../images/backward.svg';
import styles from './Header.module.css';
const Header = () => {

    const headerItems = [
        { shortTitle: "AAPL", title: "Apple Inc.", number1: 222.76, number2: -5.97, number3: -2.64 },
        { shortTitle: "MGM", title: "MGM Resorts International", number1: 345345.76, number2: 5.97, number3: 2.64 },
        { shortTitle: "DOS.SI", title: "DBS Group Holdings Ltd", number1: 345345.76, number2: 5.97, number3: -2.64 },
        { shortTitle: "N225", title: "Nikkei 225", number1: 565656.76, number2: 5.97, number3: 2.64 },
        { shortTitle: "HSI", title: "Hang Seng Index", number1: 2345.76, number2: -5.97, number3: -2.64 },
    ]


    return (
        <Row className={styles.container}>
            <Col offset={2}></Col>
            {
                headerItems.map((element,index) => {
                    return (
                        <Col span={3} key={index}>
                            <div className={styles.itemContainer}>
                                <div>
                                    <p className={styles.shortTitle}>{element.shortTitle}</p>
                                    <p className={styles.title}>{element.title}</p>
                                </div>
                                <div>
                                    <p className={styles.number}>{element.number1}</p>
                                    <p className={element.number2<0?styles.numberDanger:styles.numberSuccess}>{element.number2}</p>
                                    <p className={element.number3<0?styles.numberDanger:styles.numberSuccess}>({element.number3}%)</p>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
            <Col span={4} className={styles.buttonContainer}>
                <BackwardIcon />
                <div className={styles.controlSizedBox}></div>
                <ForwardIcon />
            </Col>
        </Row>
    )
}

export default Header;