/* modules */
import React, {Component} from 'react';

/* other files */
import Styles from './Styles.css';

const Tag = ({ name }) => {
  return (
    <div className={Styles.btn_outer}>
    <button className={Styles.btn}>
	       {name}
    </button>
    </div>
  )
}
	
export default Tag;
