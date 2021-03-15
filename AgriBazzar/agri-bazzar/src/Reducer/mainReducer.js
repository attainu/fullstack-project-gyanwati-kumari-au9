import { combineReducers } from 'redux';

import authReducer from './auth';
import profileReducer from './profile';
import searchReducer from './search';
import Pagination from './pagination';


export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    search: searchReducer,
    pagination:Pagination,
   
});