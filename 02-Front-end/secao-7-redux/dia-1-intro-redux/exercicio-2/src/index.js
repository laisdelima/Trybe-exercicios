import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
      
      case 'STATUS':
        return {
          ...state,
          status: state.status === 'offline' ? 'online' : 'offline',
        }

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'THEME'});
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'STATUS'});
});

store.subscribe(() => {
  const { status, theme } = store.getState();
  const body = document.querySelector('body');
  const statusPhrase = document.getElementById('status');

  theme === 'light'
    ? ((body.style.backgroundColor = '#fff') && (themeButton.innerText = 'Dark Mode') && (body.style.color = '#333'))
    : ((body.style.backgroundColor = '#333') && (themeButton.innerText = 'Light Mode') && (body.style.color = '#fff'));

  status === 'online'
    ? ((statusPhrase.innerHTML = 'Offline') && (statusButton.innerText = 'Ficar Offline'))
    : ((statusPhrase.innerHTML = 'Online') && (statusButton.innerText = 'Ficar Online'));
});
