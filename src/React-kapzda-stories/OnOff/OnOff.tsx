import React, {useState} from 'react';
type OnOffProps={
    onChange:(v:boolean)=>void;
}
 export function OnOff(props:OnOffProps){
     console.log('OnOff rendered');
    let [on,setOn]=useState(false);
     const onStyle={
        width:'30px',
        height:'30px',
        margin:'5px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:on?'green':'white'
    }
    const offStyle={
        width:'30px',
        height:'30px',
        margin:'5px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor: on?'white':'red'
    }
    const circleStyle={
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        margin:'5px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:on?'green':'red',
    }
     const switchOn=()=>{
         setOn(true);
         props.onChange(true);
     }
     const switchOff=()=>{
         setOn(false);
         props.onChange(false);
     }
     return <div>

        <div style={onStyle} onClick={switchOn} >ON</div>
        <div style={offStyle} onClick={ switchOff}>OFF</div>
        <div style={circleStyle}></div>
    </div>
}