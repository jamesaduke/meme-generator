import React from 'react'

export const Practice = () => {
    let[count, setCount] = React.useState(0);

    const add = () => {
        /**
         * NOTE: If you ever need the old value of state to help you determine the new value of state,
         * you should pass a callback function to your state setter function instead of using state direclty.
         * This callback function will receive the old value of state as its parameter, which you can use to determine the new value of state.
         * Please see the following example:
         */
        setCount(prevCount => prevCount + 1);
    }

    const subtract = () =>{
        setCount(prevCount => prevCount - 1);
    }

  return (
    <div>
        <button className="counter--minus" onClick={subtract}>-</button>
        <div className="counter--count">
            <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={add}>+</button>
    </div>
  )
}

