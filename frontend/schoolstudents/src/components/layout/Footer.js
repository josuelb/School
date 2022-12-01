import styles from './css/Footer.module.css'

function Footer(){
    return(
        <div className={styles.container_footer}>
            <footer className={styles.footer}>
                <p>Site feito por <span>Josue</span></p>
            </footer>
        </div>
    )
}

export default Footer;