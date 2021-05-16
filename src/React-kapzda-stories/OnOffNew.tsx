import React, {useState} from 'react';

type OnOffNewProps={
    setOn:()=>void;
    on:boolean;
}
 export function OnOffNew(props:OnOffNewProps){


     const onStyle={
        width:'30px',
        height:'30px',
        margin:'5px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:props.on?'green':'white'
    }
    const offStyle={
        width:'30px',
        height:'30px',
        margin:'5px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor: props.on?'white':'red'
    }
    const circleStyle={
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        margin:'5px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:props.on?'green':'red',
    }
     return <div>
         <div>New</div>
        <div style={onStyle} onClick={props.setOn}>ON</div>
        <div style={offStyle} onClick={props.setOn}>OFF</div>
        <div style={circleStyle}></div>
    </div>
}