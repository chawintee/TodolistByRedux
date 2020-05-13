import React, { useState } from 'react'
import { connect } from 'react-redux'
import InputTopic from '../component/InputTopic';
import InputDetail from '../component/InputDetail';
import * as actionTypes from '../store/action';


function TodoList(props) {
    const [topic, setTopic] = useState("");
    const [detail, setDetail] = useState("");
    const [nowDoing, setNowDoing] = useState(true);

    const textTopic = (e) => setTopic(e.target.value);
    const textDetail = (e) => setDetail(e.target.value)

    const logLogLog = () => {
        console.log(topic);
        console.log(detail);
        console.log(nowDoing);
    }


    return (
        <div>
            <div>Hello TodoList</div>
            <InputTopic name="Topic" value={topic} text={textTopic} />
            <InputDetail name="Detail" value={detail} text={textDetail} />
            <button onClick={logLogLog}>log</button>
            <button onClick={() => props.addToListHandle(topic, detail)} >ADD_TO_LIST</button>

            <hr />
            <button onClick={() => setNowDoing(true)}>Doing</button>
            <button onClick={() => setNowDoing(false)}>Delete</button>

            <ul>
                {nowDoing ?
                    <>
                        {props.doing.map((ele) => <li Key={ele.id}><strong>{ele.topic}</strong><div>{ele.detail} <button onClick={()=>props.deleteToDelHandle(ele.id)}>Move</button></div> </li>)}
                    </>
                    :
                    <>
                        {props.finished.map((ele) => <li Key={ele.id}><strong>{ele.topic}</strong><div>{ele.detail} <button onClick={()=>props.moveToList(ele.id)}>Move</button></div> </li>)}
                    </>
                }
            </ul>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        doing: state.nowDoing,
        finished: state.finished
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToListHandle: (topic, detail) => dispatch({ type: actionTypes.ADD_TO_LIST, topic: topic, detail: detail}),
        deleteToDelHandle: (id) => dispatch({type:actionTypes.MOVE_TO_FINISHED, targetId:id}),
        moveToList: (id) => dispatch({type:actionTypes.MOVE_TO_LIST, targetId: id})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
