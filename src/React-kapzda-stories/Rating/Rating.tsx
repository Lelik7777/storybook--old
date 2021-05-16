import React from 'react';
type StarProps={
    selected:boolean;
    value:RatingValue;
    onClick:(v:RatingValue)=>void;
}
export  type RatingValue=0|1|2|3|4|5;
type RatingProps={
    numberStars:RatingValue;
    onClick:(v:RatingValue)=>void;
}
export function Rating(props:RatingProps) {
    return <div>
       <div><b>StarRefactor</b></div>
        //передача через пропсы объявление функции onClick
        <Star selected={props.numberStars>0} value={1} onClick={props.onClick}/>
        <Star selected={props.numberStars>1} value={2} onClick={props.onClick}/>
        <Star selected={props.numberStars>2}value={3} onClick={props.onClick}/>
        <Star selected={props.numberStars>3} value={4} onClick={props.onClick}/>
        <Star selected={props.numberStars>4} value={5} onClick={props.onClick}/>
    </div>
}

function Star(props:StarProps) {
   const styleStar={
       marginRight: '10px',
   }
   return <span style={styleStar} onClick={()=>props.onClick(props.value)}>
       {props.selected?<b>Star</b>:<>Star</>}
   </span>


}