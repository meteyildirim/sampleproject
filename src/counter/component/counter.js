import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, history } from "../counterSlice";
import { useId } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const hist = useSelector((state) => state.counter.histArr);
  const dispatch = useDispatch();
  const id = useId();
  const id2 = useId();
  const [input, setInput] = useState(0);

  return (
    <>
      <section>
        <div>
          <label htmlFor={id}>Please specify:</label>
          <input
            id={id}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <p>{count}</p>
        <button
          onClick={() => {
            dispatch(increment({ amount: input }));
            dispatch(history());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
            dispatch(history());
          }}
        >
          -
        </button>
      </section>
      <section>
        <button>{hist}</button>
      </section>
    </>
  );
};

export default Counter;
