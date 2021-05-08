import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { connect } from "react-redux"
import Header from './../components/Home/Header'
import Feeds from './../components/Home/Feeds';
import MarketInfo from './../components/Home/MarketInfo';
import NewsContainer from './../components/Home/NewsContainer';
import MobileNewsContainer from './../components/Home/NewsContainer/Mobile';
import Preloader from './../components/Preloader';
import { getHomePageData } from './../redux/actions';
const Home = ({ getHomePageData, marketLists, watchLists, feedLists, blogLists }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      await getHomePageData();
      setLoading(false);
    }
    fetchMyAPI()
  }, [])

  return (
    <>
      {loading && <Preloader /> }
      { !loading && <>
        <Header marketLists={marketLists} />
        <Row>
          <MobileNewsContainer blogLists={blogLists} />
          <Col lg={{ span: 9, order: 1 }} md={{ span: 14, offset: 1, order: 1 }} xs={{ span: 24, order: 3 }}>
            <Feeds feedLists={feedLists} />
          </Col>
          <Col lg={{ span: 7, offset: 0, order: 2 }} md={{ span: 9, offset: 0, order: 2 }} xs={{ span: 24, order: 2 }}>
            <MarketInfo marketLists={marketLists} watchLists={watchLists} />
          </Col>
          <Col lg={{ span: 6, order: 3 }} xs={{ order: 1 }}>
            <NewsContainer blogLists={blogLists} />
          </Col>
        </Row>
      </>}
    </>
  )
}
const mapStateToProps = state => ({
  marketLists: state.market.lists,
  watchLists: state.watchlist.lists,
  feedLists: state.feed.lists,
  blogLists: state.blog.lists,
})

const mapDispatchToProps = {
  getHomePageData
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
