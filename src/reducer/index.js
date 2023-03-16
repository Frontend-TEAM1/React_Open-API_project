import { combineReducers } from 'redux'
import { issuesSlice } from './issueSlice'

export const rootReducer = combineReducers({ issues: issuesSlice.reducer })
