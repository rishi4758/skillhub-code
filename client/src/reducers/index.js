import {combineReducers} from "redux"
import auth from "./authreducer"
import categories from "./category"
import list from "./workerlist"
export default combineReducers({
    auth:auth,
    cat:categories,
    worker:list
})