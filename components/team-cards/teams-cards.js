
import React from 'react'
import styles from './teams-cards.module.css'
const CardList = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <img src={props.img} className={styles.cardImage}/>
        <h2 className={styles.cardTitle}>Lorem ipsum</h2>
        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet</p>
      </div>
         
    </div>
  );
};

export default CardList;
