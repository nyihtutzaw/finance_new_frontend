import { Row,Col } from 'antd';
import Header from './../components/Home/Header'
import Feeds from './../components/Home/Feeds';
import MarketInfo from './../components/Home/MarketInfo';
import styles from './../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <Header />
      <Row className={styles.container}>
        <Col span={10}>
          <Feeds />
        </Col>
        <Col span={8}>
          <MarketInfo />
        </Col>
        <Col span={6}>
          <h1>Three</h1>
        </Col>
      </Row>
    </>
  )
}
