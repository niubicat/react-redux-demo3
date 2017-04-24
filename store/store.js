import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import myApp from '../reducers/MyApp';

// 创立中间件
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);


let store = createStoreWithMiddleware(myApp);

export default store;