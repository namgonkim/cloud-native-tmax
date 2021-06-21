import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleWare = [logger,thunk]

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middleWare)))

export default store;