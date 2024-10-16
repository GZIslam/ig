import { Link } from 'react-router-dom'
import styles from './header.module.scss'

export const Header = () => {
    return <div className={styles.header}>
        <img src="logo.svg" alt="logo" />
        <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/profile"}>profile</Link></li>
            <li><Link to={"/other"}>other</Link></li>
        </ul>
    </div>
}