import React, { Component } from 'react';
import styles from './Money.module.css';

class Money extends Component{
  render() {  
    return (
      <div className={styles.Money}>
        <div className={styles.Cupo}>
          <p>Cupo disponible</p>
          <p className={styles.Green}>${this.props.estado.partialCapacity}</p>
        </div>
        <br/>
        <br/>
        <h4>Conceptos</h4>
        <div className={styles.Conceptos}>
          <div className={styles.Titulos}>
            <p>Capital</p>
            <p>Intereses Corrientes</p>
            <p>Administracion</p>
            <p>IVA</p>
            <br/>
            <p>TOTAL A PAGAR</p>
          </div>
          <div>
            <p className={styles.Green}>${this.props.estado.totalCapital}</p>
            <p className={styles.Green}>${this.props.estado.totalInterest}</p>
            <p className={styles.Green}>${this.props.estado.totalFeeAdministration}</p>
            <p className={styles.Green}>${this.props.estado.totalIva}</p>
            <br/>
            <p className={styles.Green}>${this.props.estado.totalRemainder}</p>
          </div>
        </div>
      </div>
    );
  }
} 
  


export default Money;