import {FETCH_CAT} from '../actions/types'
export default function(state={},action){

    switch(action.type){
        case FETCH_CAT:
            return action.payload || false;
        default:
            return state;
    }
}