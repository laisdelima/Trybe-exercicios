import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Função para gerar cores aleatórias (fornecida pelo exercício)
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
};

// Criando estado inicial
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// Criando reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        // quero que o index vá de 0 a 5 e não ultrapasse 5
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }

      case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }

      case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }

    default:
      return state;
  }
};

// Criando store (aqui está incluso o dispatch)
const store = createStore(reducer, composeWithDevTools());
// console.log(store);

// Encontrando botões para que, ao serem clicados, possam disparar um evento
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'});
});

const prevBtn = document.getElementById('previous');
// console.log(prevBtn);
prevBtn.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'});
});

const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', () => {
  store.dispatch({type: 'RANDOM_COLOR'});
});

// Encontrando elemento para atualizar o estado
store.subscribe(() => {
  const { colors, index } = store.getState();

  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
})

