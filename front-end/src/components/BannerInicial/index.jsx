import banner from '../../assets/imgs/bannerInicial.png'

import styles from './style.module.scss'

export default function BannerInicial(){
    return(
        <section className={styles.container__banner}>
            <div>
                <figure>
                    <img src={banner} alt='Paisagem com várias arvores e um ceu branco'></img>
                </figure>
            </div>
        </section>
    )
}