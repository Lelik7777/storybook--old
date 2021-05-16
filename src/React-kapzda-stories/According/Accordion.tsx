import React from 'react';

type AccordionProps = {
    title: string;
    collapsed: boolean;
    onClick: () => void;
}
type AccordionTitleProps = {
    title: string;
    onClick: () => void;
}

export function Accordion(props: AccordionProps) {
    return <div>

        <AccordionTitle title={props.title} onClick={props.onClick}/>
        {!props.collapsed && <AccordingBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitleProps) {
    return <h1 onClick={props.onClick}>{props.title}</h1>
}

function AccordingBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}