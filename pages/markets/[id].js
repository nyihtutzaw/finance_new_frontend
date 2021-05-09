import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { connect } from "react-redux"
import Header from './../../components/Home/Header'
import MarketInfo from './../../components/Home/MarketInfo';
import NewsContainer from './../../components/Home/NewsContainer';
import MobileNewsContainer from './../../components/Home/NewsContainer/Mobile';
import MarketDetail from './../../components/Market'
import Preloader from './../../components/Preloader';
import { getMarketDetailData, getSideData } from './../../redux/actions';
const Market = ({ getMarketDetailData, getSideData, marketLists, watchLists, blogLists,market }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchMyAPI() {
      if (router.isReady) {
        setLoading(true);
        await getMarketDetailData(router.query.id);
        await getSideData();
        setLoading(false);
      }
    }
    fetchMyAPI()
  }, [router.isReady,router.query.id])

  return (
    <>
      {loading && <Preloader />}
      { !loading && <>
        <Header marketLists={marketLists} />
        <Row>
          <MobileNewsContainer blogLists={blogLists} />
          <Col lg={{ span: 14, order: 1 }} md={{ span: 14, offset: 1, order: 1 }} xs={{ span: 24, order: 3 }}>
            <MarketDetail market={market} />
          </Col>
          <Col lg={{ span: 8, offset: 0, order: 2 }} md={{ span: 9, offset: 0, order: 2 }} xs={{ span: 24, order: 2 }}>
            <MarketInfo marketLists={marketLists} watchLists={watchLists} />
            <NewsContainer blogLists={blogLists} />
          </Col>

        </Row>
      </>}
    </>
  )
}
const mapStateToProps = state => ({
  marketLists: state.market.lists,
  market:state.market.each,
  watchLists: state.watchlist.lists,
  blogLists: state.blog.lists,
})

const mapDispatchToProps = {
  getMarketDetailData,
  getSideData
}
export default connect(mapStateToProps, mapDispatchToProps)(Market)
