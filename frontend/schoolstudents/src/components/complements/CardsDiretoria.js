import styles from './css/Cards.module.css'

function CardsDiretoria({ id, nome, budget, category }){
    return(
        <div className={styles.box_cards}>
            <div className={styles.cards}>
                <h3>{nome}</h3>
                <p>
                    Número do funcionario "{budget[0]}
                    ", id "{id}"<br></br>
                    Data de nascimento {budget[1]}<br></br>
                    Cargo: {budget[3]}<br></br>
                    Data de entrada {budget[4]}<br></br>
                </p>
            </div>
        </div>
    )
}

export default CardsDiretoria;