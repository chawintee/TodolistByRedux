import * as actionTypes from './action'

const initialState = {
    nowDoing: [],
    finished: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_LIST : 
            const newDoing = {
                id: Date.now(),
                topic: action.topic,
                detail: action.detail,
            }
        return{
            ...state,
            nowDoing : state.nowDoing.concat(newDoing)
        }
        case actionTypes.MOVE_TO_FINISHED :
            const newFinish = state.nowDoing.filter(ele=>ele.id === action.targetId);
            return {
                ...state,
                nowDoing : state.nowDoing.filter(ele=>ele.id !== action.targetId),
                finished : state.finished.concat(newFinish)
            }
        case actionTypes.MOVE_TO_LIST :
            const newNowDoing = state.finished.filter(ele=>ele.id === action.targetId);
            return {
                ...state,
                nowDoing : state.nowDoing.concat(newNowDoing),
                finished : state.finished.filter(ele=>ele.id !== action.targetId)
            }
                
            
    }



    return state
}

export default reducer;
