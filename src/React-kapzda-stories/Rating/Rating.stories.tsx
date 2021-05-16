import React, {useState} from 'react';
import {Rating, RatingValue} from './Rating';


export default {
    title: 'rating story',
    component: Rating,
};
export const EmptyRating = () => <Rating numberStars={0} onClick={x => x}/>
export const Rating1 = () => <Rating numberStars={1} onClick={x => x}/>
export const Rating2 = () => <Rating numberStars={2} onClick={x => x}/>
export const Rating3 = () => <Rating numberStars={3} onClick={x => x}/>
export const Rating4 = () => <Rating numberStars={4} onClick={x => x}/>
export const Rating5 = () => <Rating numberStars={5} onClick={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValue>(5);
    return <Rating numberStars={rating} onClick={setRating}/>
};