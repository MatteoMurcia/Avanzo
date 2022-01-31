import React, { Component } from 'react';
import styles from './Client.module.css';
import Moment from 'moment';

class Client extends Component {
  render() {  
    return (
      <div className={styles.Client}>
        <div>
          <p>Nombres:</p>
          <p>No. Identificacion:</p>
          <p>Correo Electronico:</p>
          <p>Numero Telefonico:</p>
          <p>Fecha de Registro:</p>
          <br/>
          <p>Empresa:</p>
          <p>Cantidad de Cuotas:</p>
          <p>Monto Maximo:</p>
          <p>Pre-cupo Calculado:</p>
        </div>
        <div className={styles.data}>
          <p>{this.props.estado.name +" "+ this.props.estado.lastName}</p>
          <p>{this.props.estado.identificationId}</p>
          <p>{this.props.estado.email}</p>
          <p>{this.props.estado.phoneNumber}</p>
          <p>{Moment(this.props.estado.createdAt).format("DD-MM-YYYY")}</p>
          <br/>
          <p>{this.props.estado.socialReason}</p>
          <p>{this.props.estado.montlyFee}</p>
          <p>{this.props.estado.maximumAmount}</p>
          <p>{this.props.estado.computedCapacity}</p>
        </div>
      </div>
    );
  }
}
  


export default Client;

