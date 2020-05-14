import React, {useState, useEffect, useRef} from 'react'
// https://www.youtube.com/watch?v=DSbeyRFqnLk

const EditInPlace = ({ value, onChangeValue }) => {

    const inputRef = useRef(null);
    const [isEditing, SetIsEditing] = useState(false);
    const edit = () => SetIsEditing(true)
    const done = () => {
        SetIsEditing(false)
        onChangeValue(inputRef.current.value)
    }

    useEffect(() => {
        if(isEditing){
            inputRef.current.focus()
        }
    }, [isEditing]);

    if(isEditing){
        return <input type="text" defaultValue={value} ref={inputRef} onBlur={done} className="editInPlaceInput"/>
    }
    return <h1 onClick={edit} className="editInPlaceH1">{value}</h1>
} 
export default EditInPlace