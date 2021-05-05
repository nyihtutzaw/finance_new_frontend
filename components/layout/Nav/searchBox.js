import { Input } from 'antd';
import styles from './Nav.module.css';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox = () => {
    return <Input suffix={<SearchOutlined className={styles.iconStyle} />} addonBefore={<div></div>} placeholder="Search" className="searchBox" />
}
export default SearchBox