import React from 'react'
import styles from './ButtonContain.module.css'

export default function ButtonContainer(props) {
    let customCSS = {
        backgroundColor : '#56cbdb',
        color: '#262834'
    }
  return (
    <div className={styles.container}>
        {props.buttons.map(name => <button key = {name} className={`${styles.buttonlist} ${name==='AC' ? `${styles.clear}` : ''} ${name==='=' ? `${styles.result}` : ''}  ${name==='DE' ? `${styles.delete}` : ''}`} style = {name==='+' || name==='-'|| name==='/' || name==='*' ? customCSS : null} onClick = {props.HandleOnClick}>{name}</button>)}
    </div>
  )
}

