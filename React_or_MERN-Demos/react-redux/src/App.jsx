import React from "react"
import {useSelector , useDispatch} from "react-redux";
import {incrementNum,decrementNum} from "./actions/index";



function App() {

  const myState=useSelector((state)=>state.changeTheNumber)


  const dispatch = useDispatch();

  return (
    <>
   <div className="container">
    <h1>Increment / Decrement Counter</h1>
    <p>With React and Redux</p>
    <h2 className="countNum" style={{fontSize:'4rem'}}>{myState}</h2>
    <div className="buttons">
     <button className="minus"  onClick={()=>dispatch(decrementNum(1))}  > Decrement(-)</button> &nbsp;&nbsp;&nbsp;
     <button className="plus" onClick={()=>dispatch(incrementNum(1))}  > Increment(+) </button> 
    </div>
   </div>
        
    </>
  )
}

export default App
