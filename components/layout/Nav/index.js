import { Row, Col, Button } from 'antd';
import Logo from './../../../images/logo.svg';
import SearchBox from './searchBox.js';
import MenuBar from './menuBar.js';
import MobileNav from './mobileNav.js';
import styles from './Nav.module.css';
const Nav = () => {
    return (
        <>
        <div className={styles.navbarContainer}>
            <Row>
                <Col lg={{span:4,offset:2}} md={{span:4,offset:1}} sm={{span:6,offset:1}}>
                    <div className={styles.logoContainer}>
                        <Logo />
                        <h1 className={styles.title}>NexStash</h1>
                    </div>
                </Col>
                <Col lg={{span:8}} md={{span:10,offset:1}} sm={{span:8,offset:1}} >
                    <SearchBox />
                </Col>
                <Col lg={{span:3,offset:2}} md={{span:3,offset:1}} sm={{span:3,offset:1}} >
                    <h2 className={styles.subTitle}>Join for Free</h2>
                </Col>
                <Col>
                    <Button className={styles.loginButton}>Login</Button>
                </Col>
            </Row>
            <MenuBar />

        </div>
        <MobileNav />
        </>
    )
}
export default Nav

