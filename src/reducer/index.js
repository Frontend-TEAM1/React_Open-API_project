import { combineReducers } from 'redux';
import { issueSlice } from './issues';

export const rootReducer = combineReducers({ issue: issueSlice.reducer });
