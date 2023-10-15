import styles from './style.module.scss'

export default function NotFound(){
    return(


        <div className={styles.banner__background}>
            <div className={styles.notfound__ball}>
                <div className={styles.notfound__ball__container}>
                    <h1>404</h1>
                    <p>OOPS! Página não encontrada</p>
                    <div className={styles.notfound__ball__container__line}>
                    </div>
                    <div className={styles.notfound__ball__container__button}>
                        <button>Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}