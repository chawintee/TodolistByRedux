import React from 'react'

function InputDetail(props) {
    const { name, value, text } = props;
    return (
        <div>
            <div>
                <label>Enter Your {name}</label>
            </div>
            <textarea placeholder={name} onChange={text} value={value} />
        </div>
    )
}

export default InputDetail
