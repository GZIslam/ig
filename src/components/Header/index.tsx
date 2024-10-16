import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { basePath } from '../../router'

export const Header = () => {
    return <div className={styles.header}>
        <img src="logo.svg" alt="logo" />
        <ul>
            <li><Link to={basePath + "/"}>home</Link></li>
            <li><Link to={basePath + "/profile"}>profile</Link></li>
            <li><Link to={basePath + "/other"}>other</Link></li>
        </ul>
    </div>
}