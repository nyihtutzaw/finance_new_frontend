import { Card, Row, Col } from 'antd';
import InfoCard from './infoCard';
import style from './MarketDetail.module.css';
import MenuBar from './menuBar.js';
import BarChart from './barChart.js';
const Company = ({ market }) => {
    const profileInfos = [
        { title: "Name", value: market.profile.name },
        { title: "Sector", value: market.profile.sector },
        { title: "Industry", value: market.profile.industry },
        { title: "Country", value: market.profile.country },
        { title: "IPO Date", value: market.profile.ipo_date },
        { title: "CEO", value: market.profile.ceo },
    ]
    const stockInfos = [
        { title: "Code", value: market.stock_info.code },
        { title: "Type", value: market.stock_info.type },
        { title: "Exchange", value: market.stock_info.exchange },
        { title: "IPO Date", value: market.stock_info.ipo_date },
    ]
    return (
        <Card title={<MenuBar />} className={style.companyCard}>
            <Row>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                    <InfoCard title="Company Profile" infos={profileInfos} />
                    <InfoCard title="Stock Information" infos={stockInfos} />
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                    <BarChart annuals={market.annuals} />
                </Col>
            </Row>
            <Row>
                <h4>Description</h4>
                <p className={style.descriptionText}>{market.description}</p>
            </Row>
        </Card>
    )
}
export default Company;