import { useState, useEffect} from 'react'

import CardsDiretoria from '../complements/CardsDiretoria';

import styles from './css/Diretoria.module.css'

function Diretoria(){

    const [funcionarios, setFucionarios] = useState([])

    useEffect(()=>{
        fetch('/views/school/APIs/Diretoria/', {
            method: 'GET',
        }).then((resp)=>resp.json()).then((data)=>{
            console.log(data)
            setFucionarios(data)
        }).catch((err)=>console.log(err))
    })

    return(
        <div className={styles.container_Diretoria}>
            <h1 className={styles.title}>Diretoria</h1>
            <div className={styles.cards_list}>
                {funcionarios.length > 0 && funcionarios.map((funcionario) =>
                    <CardsDiretoria 
                    key={funcionario.id}
                    id={funcionario.id}
                    nome={funcionario.nome}
                    budget={[funcionario.ID_FUNCIONARIO, funcionario.date_Nasc, funcionario.sexo, funcionario.cargo,
                    funcionario.date_entrada]}
                    />
                )}
            </div>
        </div>
    )
}

export default Diretoria;