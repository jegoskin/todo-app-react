import { combineReducers } from 'redux';
import logs from './logs';
import todos from './todos';

const app = combineReducers({
	logs,
	todos
})

export default app;