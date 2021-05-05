import { Menu, Row } from 'antd';
import styles from './Nav.module.css';
const MenuBar = () => {
    const menuItems = [
        { title: "Home", key: "home" },
        { title: "Markets", key: "markets" },
        { title: "News", key: "news" },
        { title: "portfolio", key: "portfolio" },
    ]
    return (
        <Row>
            <Menu selectedKeys={[menuItems[0]["key"]]} mode="horizontal" className={styles.menuContainer}>
                {
                    menuItems.map((element) => {
                        return (
                            <Menu.Item key={element.key} className={styles.menuItem}>
                                {element.title}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Row>
    )
}
export default MenuBar