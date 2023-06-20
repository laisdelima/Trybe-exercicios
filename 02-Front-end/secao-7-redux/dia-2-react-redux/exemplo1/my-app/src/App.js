import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionCreator, clickCounter } from './redux/actions'; 

class App extends React.Component {
  render() {
    const { countState, dispatch, clickCount } = this.props;
    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    };

    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button
          onClick={() => dispatchAll()}
        >
          Incrementar 1
        </button>

        <button
          onClick={() => dispatchAll(5)}
        >
          Incrementar 5
        </button>
        <h3>Número de clicks: { clickCount }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clickCount: state.clicks,
});

export default connect(mapStateToProps)(App);
