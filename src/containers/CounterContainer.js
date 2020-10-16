import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter'

function CounterContainer() {
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff,
    // }));
    // const number = useSelector( state => state.counter.number);  //최적화 1
    // const diff = useSelector ( state => state.counter.diff);     //최적화 1
    const { number, diff } = useSelector(state => ({
      number: state.counter.number,
      diff: state.counter.diff,
  }),
    shallowEqual   //최적화 2
  );

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

  return(
    <Counter 
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;