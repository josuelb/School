import styles from './css/Cards.module.css'

function CardsAluno({ id, name, budget, category }){
    return(
        <div className={styles.box_cards}>
            <div className={styles.cards}>
                <h3>{name}</h3>
                <p>
                    Aluno de matricula "{budget[0]}", id "{id}". <br></br>
                    Data de nascimento {budget[1]}.<br></br>
                    Cursa {budget[3]}.<br></br>
                </p> 
            </div>
        </div>
    )
}

export default CardsAluno