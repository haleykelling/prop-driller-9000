import React from 'react'
import ProptimusOmega from './proptimusOmega'

export default function Proptimus(props) {
    return(
        <ProptimusOmega photo={props.photo} catchPhrase={props.catchPhrase} callForBetterHelp={props.callForBetterHelp}/>
    )
}