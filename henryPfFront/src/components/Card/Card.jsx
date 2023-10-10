import { FunctionComponent } from 'react';
import styles from './Card.module.css';


const Card = () => {
  	return (
    		<div className={styles.card}>
      			<div className={styles.frameParent}>
        				<div className={styles.crossoverDePoleasConPesoIParent}>
          					<div className={styles.crossoverDePoleas1}>Crossover de poleas con peso integrado para gimnasio</div>
          					<div className={styles.wrapper}>
            						<div className={styles.div}>$33,000.00</div>
          					</div>
        				</div>
        				<div className={styles.aadirAlCarritoWrapper}>
          					<div className={styles.aadirAlCarrito1}>Añadir al carrito</div>
        				</div>
      			</div>
      			<img className={styles.removebgPreview2Icon} alt="" src="12-removebg-preview 2.png" />
    		</div>);
};

export default Card;
