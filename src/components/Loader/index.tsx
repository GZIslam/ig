import styles from './loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className = '' }: LoaderProps) => {
    return <div className={className}>
        <div className={styles.loader}>
            {Array(6).fill(0).map((_e, i) => <div key={i}></div>)}
        </div>
    </div>
}