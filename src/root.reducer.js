import { combineReducers } from 'redux'
import { UserDetailReducer, 
            UserListReducer,
            UserLoginReducer,
            UserJoinReducer,
            UserUpdateReducer
} from './user/index'

export const rootReducer = combineReducers({
    UserDetailReducer, 
    UserListReducer,
    UserLoginReducer,
    UserJoinReducer,
    UserUpdateReducer
})
export default rootReducer