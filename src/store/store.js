import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'reducer';
import { getIssues } from 'reducer/issueSlice';
import logger from 'redux-logger';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development', //true, false
	middleware: defaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			return [...defaultMiddleware(), logger];
			//위와 같이 기존의 미들웨어를 가지고 오지 않으면 logger만 사용으로 덮어버림
		}
		return defaultMiddleware();
	},
});
store.dispatch(getIssues());

//getIssues에서 정의된 비즈니스 로직이 실행되어 GitHub API로부터 데이터를 검색하고, 데이터를 store에 저장
