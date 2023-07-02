import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <form className='form'>
      <fieldset>
        <legend>Dados</legend>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            id="name"
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <br /><br />

        <label htmlFor="age">
          Idade:
          <input
            type="number"
            value={age}
            id="age"
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br /><br />

        <label htmlFor="city">
          Cidade:
          <input
            type="text"
            value={city}
            id="city"
            onChange={({ target }) => setCity(target.value)}
          />
        </label>
        <br /><br />

        <div>
        <label htmlFor="fundamentos">
          <input
            type="radio"
            id="fundamentos"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
          Fundamentos
        </label>
        </div>
        <br />
        <div>
        <label htmlFor="front-end">
          <input
            type="radio"
            id="front-end"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
          Front-end
        </label>
        </div>
        <br />

        <div>
        <label htmlFor="back-end">
          <input
            type="radio"
            id="back-end"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
          Back-end
        </label>
        </div>
        <br />
        <div>
        <label htmlFor="ciencia">
          <input
            type="radio"
            id="ciencia"
            name="module"
            value="Ciência da Computação"
            checked={module === 'Ciência da Computação'}
            onChange={({ target }) => setModule(target.value)}
          />
          Ciência da Computação
        </label>
        </div>
        <br />

        <button>
          Enviar
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
