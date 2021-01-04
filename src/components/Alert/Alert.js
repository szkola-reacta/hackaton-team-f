import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Alert.module.scss';

function Alert({message, clicked}) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(true)
  },[clicked])

  const clickHandler = () => {
    setIsActive(false);
  }

  return (
    <div className={clsx(styles.alert, isActive ? styles.active : '')}>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} onClick={clickHandler}>x</button>
    </div>
  )
}

export default Alert;