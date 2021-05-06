import CommentBox from './../../../images/comment_box.svg';
import Home from './../../../images/home.svg';
import Noti from './../../../images/noti.svg';
import UpArrow from './../../../images/up_arrow.svg';
import Search from './../../../images/search.svg';
import Burger from './../../../images/burger.svg';
import styles from './Nav.module.css';
const MobileNav=()=>{
    return (
        <div className={styles.mobileNavbarContainer}>
            <Home/>
            <UpArrow />
            <CommentBox />
            <Noti />
            <Search />
            <Burger />
        </div>
    )
}
export default MobileNav;