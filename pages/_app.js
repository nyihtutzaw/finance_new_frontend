import '../styles/globals.css'
import { wrapper } from "../redux/store"
import MainContainer from '../components/layout/MainContainer'
function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
export default wrapper.withRedux(MyApp);
