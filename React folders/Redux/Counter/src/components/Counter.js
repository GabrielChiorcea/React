import classes from './Counter.module.css';
import { counterActions } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementEventHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseEventHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementEventHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementEventHandler}>increment</button>
        <button onClick={increaseEventHandler}>increase by 5</button>
        <button onClick={decrementEventHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementEventHandler() {
//     this.props.increment;
//   }
//   decrementEventHandler() {
//     this.props.decrement;
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div>
//           <button onClick={this.incrementEventHandler.bind(this)}>
//             increment
//           </button>
//           <button onClick={this.decrementEventHandler.bind(this)}>
//             decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapDispatchToProps, mapStateToProps)(Counter);
