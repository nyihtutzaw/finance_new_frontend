import { Layout } from 'antd';
import Nav from '../Nav';
const {  Content } = Layout;

const MainContainer = ({ children }) => {
    return (
        <>
            <Layout>
                <Nav />
                <Content>{children}</Content>

            </Layout>
        </>
    )
}
export default MainContainer