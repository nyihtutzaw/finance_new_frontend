import { Row, Col } from 'antd';
import ForwardIcon from './../../../images/forward.svg';
import BackwardIcon from './../../../images/backward.svg';
import styles from './Header.module.css';
const Header = ({ marketLists }) => {
    return (
        <Row className={styles.container}>
            <Col lg={{ offset: 2 }}></Col>
            {
                marketLists.map((element, index) => {
                    if (index<=5)
                    return (
                        <Col lg={{ span: 3 }} sm={{ span: 4 }} key={index}>
                            <div className={styles.itemContainer}>
                                <div>
                                    <p className={styles.shortTitle}>{element.symbol}</p>
                                    <p className={styles.title}>{element.longSymbol}</p>
                                </div>
                                <div>
                                    <p className={styles.number}>{element.lastPrice}</p>
                                    <p className={element.change < 0 ? styles.numberDanger : styles.numberSuccess}>{element.change}</p>

                                    <p className={element.changePercentage < 0 ? styles.numberDanger : styles.numberSuccess}>
                                        {element.changePercentage > 0 && <span>+</span>}
                                        {element.changePercentage}
                                        {element.changePercentage && <span>%</span>}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
            <Col lg={{ span: 4 }} sm={{ span: 4 }} className={styles.buttonContainer}>
                <BackwardIcon />
                <div className={styles.controlSizedBox}></div>
                <ForwardIcon />
            </Col>
        </Row>
    )
}
export default Header;