import styles from './css/Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar(){
    return (
        <div className={styles.NavBar_container}>
            <h1>School Students</h1>
            <nav className ={styles.nav}>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/Alunos'>Alunos</Link></li>
                    <li><Link to='/Funcionarios'>Funcionarios</Link></li>
                    <li><Link to='/Diretoria'>Diretoria</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;