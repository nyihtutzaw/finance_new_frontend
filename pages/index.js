import { Row,Col } from 'antd';
import Header from './../components/Home/Header'
import Feeds from './../components/Home/Feeds';
import MarketInfo from './../components/Home/MarketInfo';
import NewsContainer from './../components/Home/NewsContainer';
export default function Home() {
  return (
    <>
      <Header />
      <Row>
        <Col lg={{span:9,order:1}} md={{span:14,offset:1,order:1}} xs={{span:23,offset:1,order:3}}>
          <Feeds />
        </Col>
        <Col lg={{span:7,offset:0,order:2}} md={{span:9,offset:0,order:2}} xs={{span:23,offset:1,order:2}}>
          <MarketInfo />
        </Col>
        <Col lg={{span:6,order:3}} xs={{order:1}}>
           <NewsContainer />
        </Col>
      </Row>
    </>
  )
}
