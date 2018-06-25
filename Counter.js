const counter = (state=0, action) => {
  if(action.type === 'INCREMENT') {
    return state + 1;
  } else if(action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

/* expect(counter(0,{type: 'INCREMENT'})).toEqual(1);
expect(counter(1, {type: 'DECREMENT'})).toEqual(0);
expect(counter(3, {type: 'SOME_THING'})).toEqual(3);
console.log("Test successful"); */

/* const createStore = (reducer) => {
  let state;
  let listeners=[];
  
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => listeners = listeners.filter( l => l !== listener);
  }
  
  dispatch({});
  return { getState, dispatch, subscribe};
} */


const { createStore } = Redux;

const store = createStore(counter);
let Counter = ({value, onInc, onDec}) => {
  return (<div>
            <h1>{value}</h1>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
          </div>);
}

render = () => {
  ReactDOM.render(<Counter 
                  value={store.getState()}
                  onInc = {() => store.dispatch({type:'INCREMENT'})}
                  onDec = {() => store.dispatch({type: 'DECREMENT'})}/>, 
  document.getElementById('root'));
}
render();
store.subscribe(render);