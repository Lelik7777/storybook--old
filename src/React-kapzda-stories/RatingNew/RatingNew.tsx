import React, {useState} from 'react';

type StarProps={
    value:1|2|3|4|5;
    selected:boolean;
    setValue:(v:1|2|3|4|5)=>void;
}
export function RatingNew(){
    const [value,setValue]=useState(0);
    return <div>
<Star value={1} selected={value>0} setValue={setValue}/>
<Star value={2} selected={value>1} setValue={setValue}/>
<Star value={3} selected={value>2} setValue={setValue}/>
<Star value={4} selected={value>3} setValue={setValue}/>
<Star value={5} selected={value>4} setValue={setValue}/>
    </div>
}
function Star(props:StarProps){

    return <span onClick={()=>props.setValue(props.value)}>
        {props.selected?<b>Star</b>:<>Star</>}
    </span>
}