
import Conteudo from '../complements/Conteudo.js'

import styles from './css/Home.module.css'

import alunos from '../../img/alunos.png'
import funcionarios from '../../img/funcionarios.png'
import diretoria from '../../img/diretoria.png'

function Home(){

    return(
        <div className={styles.container_home}>
            <h1 className={styles.title}>School Students</h1>
                <div className={styles.Conteudo_container}>
                <Conteudo url='/Alunos' title='Alunos' src={alunos} alt="alunos" description='Lista dos Alunos. Clique para ver.'/>
                <Conteudo url='/Funcionarios' title='Funcionarios' src={funcionarios} alt="funcionarios" description="Lista de Funcionarios. Clique para ver." />
                <Conteudo url='/Diretoria' title='Diretoria' src={diretoria} alt="Diretoria" description="Lista de Diretoria. Clique para ver." />
            </div>
            
        </div>
    )
}

export default Home;