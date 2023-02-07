/* Acesse o elemento elementoOndeVoceEsta. */

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

/* Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */

const pai = ondeVoceEsta.parentElement;
pai.style.color = 'blue';

/* Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */

const primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Olá!';

/* Acesse o primeiroFilho a partir de pai. */
/* Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. */
/* Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. */
/* Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. */
/* Agora acesse o terceiroFilho a partir de pai. */