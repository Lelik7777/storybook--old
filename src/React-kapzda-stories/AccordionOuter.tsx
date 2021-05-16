import React, {useState} from 'react';
type AccordionOuterTitleProps={
    title:string;
    value?:(v:boolean)=>void;
    state?:boolean;
    onClick:()=>void;
}
type AccordionOuterProps={
    title:string;
}

export function AccordionOuter(props:AccordionOuterProps){
    const [on,setOn]=useState(false);
    return <div>
                       //передача через пропсы вызов функции setOn посредстов call back function
      <AccordionOuterTitle title={props.title} value={setOn} state={on} onClick={()=>setOn(!on)}/>
        {on&&<AccordionOuterBody />}
    </div>
}
function AccordionOuterTitle(props:AccordionOuterTitleProps){
    return <h1 onClick={()=>props.onClick()}>{props.title}</h1>
}
function AccordionOuterBody(){
    return <ul >
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}