import styles from './css/Alunos.module.css'

import CardsAluno from '../complements/CardAlunos'

import {useState, useEffect} from 'react'

function Alunos(){

    const [alunos, setAlunos] = useState([])

    useEffect(()=>{
        fetch('/views/school/APIs/Aluno/', {
            method: 'GET',
                
        }).then(resp => resp.json()).then(data=>{
            console.log(data)
            setAlunos(data)
        }).catch((err)=>console.log(err))
    }, [])

    return(
        <div className={styles.container_alunos}>
            <h1 className={styles.title}>Lista de alunos</h1>
            <div className={styles.cards_list}>
                {alunos.length > 0 && alunos.map((aluno)=>
                    <CardsAluno 
                    key={aluno.id}
                    id={aluno.id}
                    name={aluno.nome}
                    budget={[aluno.matricula, aluno.date_Nasc, aluno.sexo, aluno.curso]}
                    />
                )}
            </div>
        </div>
    )
}

export default Alunos;