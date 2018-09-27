import { createStore, applyMiddleware, Store } from 'redux';
import { CredentialState } from '../interfaces/App.interface';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const Window: any = window;

const store: Store<CredentialState> = applyMiddleware(thunk)(createStore)(rootReducer, Window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;