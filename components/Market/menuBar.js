import { Menu, Row } from 'antd';
import styles from './MarketDetail.module.css';
const MenuBar = () => {
    const menuItems = [
        { title: "General", key: "general" },
        { title: "Financial", key: "financial" },
        { title: "Share Status", key: "share_status" },
    ]
    return (

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

    )
}
export default MenuBar