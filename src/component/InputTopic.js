import React from 'react'

function InputTopic(props) {
    const {name, value, text } = props;

    return (
        <div>
            <div>
                <label>Enter Your {name}</label>
            </div>
            <input placeholder={name} onChange={text} value={value} />
        </div>
    )
}

export default InputTopic
