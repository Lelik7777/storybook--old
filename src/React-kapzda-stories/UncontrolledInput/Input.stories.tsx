import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
};
export const UncontrolledInput = () => <input/>;
export const TrackValueInUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    return <>
        <input value={value} onChange={onChangeValue}/>
        -- {value}
    </>;
};
export const GetValueInUncontrolledInputByPressButton = () => {
    const [value, setValue] = useState('');
    const refElement = React.createRef<HTMLInputElement>();
    const onClickButton = () => {
        if (refElement.current) {
            setValue(refElement.current.value)
        }
    };
    return <>
        <input ref={refElement}/>
        <button onClick={onClickButton}>save</button>
        -- actual value: {value}
    </>;
};
export const ControlledCheckbox = () => {
    const [value, serValue] = useState(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => serValue(e.currentTarget.checked)
    return <input type="checkbox" checked={value} onChange={onChange}/>
};
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('null')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return <select value={value} onChange={onChange}>
        <option value="1">work</option>
        <option value="2">learning</option>
        <option value="3">game</option>
    </select>
};
export const ControlledInputWithFixedValue = () => <input value={'fixed value'}/>;
