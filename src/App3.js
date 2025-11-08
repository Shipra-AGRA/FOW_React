import ReactDOM from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import { store } from './redux/store';
import { useState } from 'react';

const App3=()=>{
    const [amount,setAmount]=useState(0)
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    function handleIncrement(){
        dispatch(increment())
    }
    function handleDecrement(){
        dispatch(decrement())
    }
    function resetHandler(){
        dispatch(reset())
    }
    function IncrementByAmount(){
        dispatch(incrementByAmount(amount))
    }

return(
    <div className="container">
        <h3>Count:{count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={resetHandler}>Reset</button>
        <input type='number' value={amount} placeholder='Enter Amount' 
        onChange={(e)=>{setAmount(e.target.value)}}/>
        <button onClick={IncrementByAmount}>IncrementByAmount</button>
    </div>
)
}
export default App3

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Provider store={store}><App3/></Provider>)