import {FETCH_WORKER} from '../actions/types'
export default function(state={},action){

    switch(action.type){
        case FETCH_WORKER:
            return action.payload || false;
        default:
            return state;
    }
}