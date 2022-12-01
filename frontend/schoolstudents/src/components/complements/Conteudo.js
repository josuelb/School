import styles from './css/Conteudo.module.css'

import {Link} from 'react-router-dom'

function Conteudo({ url, title, src, alt, description }){    
    return(
        <div className={styles.container_Conteudo}>
            <Link to={url}>
                <div className={styles.conteudo}>
                    <img src={src} alt={alt} /><br></br>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Link>
            
        </div>
    )
}

export default Conteudo;