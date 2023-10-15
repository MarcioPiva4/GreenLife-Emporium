import styles from './style.module.scss'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <h1>GreenLife Emporium</h1>
            <span>©2023 <b>COPYRIGHT</b> </span>
        </footer>
    )
}