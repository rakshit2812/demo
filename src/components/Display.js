import React from 'react'
import style from "./Display.module.css"

export default function Display(props) {
  return (
    <>
        <input className={style.display} type="text" readOnly value = {props.value}/>
    </>
  )
}
