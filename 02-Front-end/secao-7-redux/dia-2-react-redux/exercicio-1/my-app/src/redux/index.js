import { legacy_createStore as createStore } from 'redux';
import cosmoReducer from './reducers/cosmoReducer';

const store = createStore(cosmoReducer);

export default store;