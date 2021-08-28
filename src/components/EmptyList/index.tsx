import styles from "./styles.module.scss";

export const EmptyList = () => {
  return (
    <div className={styles.containerImageNotFound}>
      <h3>Aguarde mais um pouquinho que estamos desenvolvendo um ótimo conteúdo para você!</h3>
      <img src="/image/dev.png" alt="Sincronizando" />
    </div>    
  )
}