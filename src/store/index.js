import { combineReducers } from 'redux'
import { uploadReducer } from './upload/reducer'

const rootReducer = combineReducers({
    uploadStore: uploadReducer
})
export default rootReducer