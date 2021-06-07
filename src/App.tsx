import React, {useState} from 'react';
import {RatingNew} from './React-kapzda-stories/RatingNew/RatingNew';
import s from './App.module.css';
import {Rating, RatingValue} from './React-kapzda-stories/Rating/Rating';
import {Accordion} from './React-kapzda-stories/According/Accordion';
import {OnOff} from './React-kapzda-stories/OnOff/OnOff';
import {AccordionOuter} from './React-kapzda-stories/AccordionOuter';
import {OnOffNew} from './React-kapzda-stories/OnOffNew';

export type FilterValueTasks = 'all' | 'active' | 'completed';

function App() {
    // for Rating
    const [rating, setRating] = useState<RatingValue>(0);

    //for accordion
    const [accordion,setAccordion]=useState(false);

    //for OnOffNew
    let [on,setOn]=useState<boolean>(false);

    //for TodoList
    console.log('App rendered');
    let [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Html&&Css',
            isDone: true,
        },
        {
            id: 2,
            title: 'Css',
            isDone: true,
        },
        {
            id: 3,
            title: 'ReactJs',
            isDone: false,
        },
    ]);
    const [filter, setFilter] = useState('all');
    let selectTasks = tasks;
    if (filter === 'active') {
        selectTasks = tasks.filter(t => t.isDone);
    }
    if (filter === 'completed') {
        selectTasks = tasks.filter(t => !t.isDone);
    }

    function removeTask(id: number) {
        let filterTask = tasks.filter(t => t.id !== id)
        setTasks(filterTask);
    }

    function changeTasks(value: FilterValueTasks) {
        setFilter(value);
    }

    return <div className={s.appWrapper}>


        <Accordion
            title="Menu"
            collapsed={accordion}
            onClick={()=>setAccordion(!accordion)}
        />

        //Rating refactor
        <Rating numberStars={rating} onClick={setRating}/>

        <Accordion
            title="User"
            collapsed={accordion}
            onClick={()=>setAccordion(!accordion)}

        />
        <OnOff onChange={setOn}/>{on.toString()}
        <OnOff onChange={setOn}/>{on.toString()}
        <OnOff onChange={setOn}/>{on.toString()}
        <OnOffNew on={on} setOn={()=>setOn(!on)}/>
        <AccordionOuter title="List"/>
        <AccordionOuter title="List of people"/>
        <RatingNew/>

    </div>

}

export default App;
