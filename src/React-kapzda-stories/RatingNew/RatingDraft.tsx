import React, {useState} from 'react';

type StarProps = {
    selected: boolean;
    value: number;
}

export function RatingDraft() {

    return <div>
        <Star selected={true} value={1}/>
        <Star selected={true} value={2}/>
        <Star selected={false} value={3}/>
        <Star selected={false} value={4}/>
    </div>
}

function Star(props: StarProps) {
    const [sel, setSel] = useState(1);
    const styleStar = {
        display: 'online-block',
        marginRight: '10px',
    }
    return props.selected ?
        <span style={styleStar} onClick={() => setSel(props.value)}> <b>Star</b> </span>
        :
        <span style={styleStar} onClick={() => setSel(props.value)}> Star </span>


}