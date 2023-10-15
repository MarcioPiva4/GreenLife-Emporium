import styles from './style.module.scss';

export default function OverlayLoading({ resposta }) {
  return (
    <div className={styles.overlay}>
      <span className={styles.loader}></span>
      <p>Aguarde um momento...</p>
      {resposta && resposta.message && (
        resposta.map((e, index) => (
          <h3 key={index}>{e.message}</h3>
        ))
      )}
    </div>
  );
}
