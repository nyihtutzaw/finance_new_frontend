import { Row, Col, Button } from 'antd';
import Logo from './../../../images/logo.svg';
import SearchBox from './searchBox.js';
import MenuBar from './menuBar.js';
import styles from './Nav.module.css';
const Nav = () => {
    return (
        <div className={styles.navbarContainer}>
            <Row>
                <Col span={4} offset={2}>
                    <div className={styles.logoContainer}>
                        <Logo />
                        <h1 className={styles.title}>NexStash</h1>
                    </div>
                </Col>
                <Col span={8} >
                    <SearchBox />
                </Col>
                <Col offset={2} span={3}>
                    <h2 className={styles.subTitle}>Join for Free</h2>
                </Col>
                <Col>
                    <Button className={styles.loginButton}>Login</Button>
                </Col>
            </Row>
            <MenuBar />

        </div>
    )
}
export default Nav