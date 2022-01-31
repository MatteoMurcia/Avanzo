import React, { Component } from 'react';
import styles from './Welcome.module.css';
import Moment from 'moment';


class Welcome extends Component {
  state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = Moment().format("DD/MM/YYYY hh:mm:ss");
    this.setState({ date });
  };
  
  render() {  

    const { date } = this.state;

    return (
      <div className={styles.Welcome} >
        <p>Hola, {this.props.lastName} - No.{this.props.acco_hash}</p>
        <p className={styles.web}>www.avanzo.com</p>
        <p className={styles.d}>{date}</p>
          
      </div>
    );
  }
}

export default Welcome;
