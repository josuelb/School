import styles from './css/Funcionarios.module.css';

import CardsFuncionarios from '../complements/CardsFuncionarios';
import { useState, useEffect } from 'react';

function Funcionarios(){

    const [funcionarios, setFuncionarios] = useState([])

    useEffect(()=>{
        fetch('/views/school/APIs/Funcionario/',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(data=>{
            console.log(data)
            setFuncionarios(data)
        }).catch((err)=>console.log(err))
    })

    return(
        <div className={styles.container_funcionario}>
            <h1 className={styles.title}>Lista de Funcionários</h1>
            <div className={styles.cards_list}>
                {funcionarios.length > 0 && funcionarios.map((funcionario)=><CardsFuncionarios
                key={funcionario.id}
                id={funcionario.id}
                nome={funcionario.nome}
                budget={[funcionario.ID_FUNCIONARIO, funcionario.date_Nasc, funcionario.sexo, funcionario.cargo, funcionario.date_entrada]}
                />)}
            </div>
           
        </div>
    )
}

export default Funcionarios;