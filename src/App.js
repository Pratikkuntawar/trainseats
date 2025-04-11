// import logo from './logo.svg';
// import './App.css';
// import Users from './Users';
// import User from './User';
// import React,{useEffect, useState,useRef,createContext} from 'react';
// import Cart from './Cart';
// import Userdetails from './Userdetails';
// import FormHandling from './FormHandling';
// import ParentComponent from './ParentComponent';
// import Child1 from './Child1';
// import Card from './Card';
// const MyContext=createContext();
// function App() {
//   const click=()=>{
//     alert("Hi Pratik Kuntawar");
//   }
//   const [count,setcount]=useState(0);
//   const increment=()=>{
//     setcount(count+1);
//   }
//   const [name,setname]=useState("Hi Pratik");
//   const changename=()=>{
//     setname("Hi Pratik Kuntawar");
//   }
//   const usersData = [
//      { name: "John Doe", age: 25, email: "john.doe@example.com" },
//      { name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
//      { name: "Bob Johnson", age: 28, email: "bob.johnson@example.com" },
//      ];
//   const [inputvalue,setinputvalue]=useState("");
//   const handlechange=(e)=>{
//     console.log(e.target.value);
//     setinputvalue(e.target.value);
//   }
//   const [status,setstatus]=useState(true);
//   useEffect(()=>{
//     alert("Hi Pratik Kuntawar");
//     console.log("Component is rendered sucessfully");
//   })
//   const inputref=useRef(null);
//   const handleinput=()=>{
//     console.log(inputref.current.value);
//     inputref.current.color='green';
//   }
//   const shoot=()=>{
//     console.log("Clicked ME button is clicked");
//   }
//   const shareddata="Hello From Parent!!"
//   return (
//     <div className="App">
//       <button onClick={shoot}>Clicked ME!!</button>
//     {/* {
//       usersData.map((user,index)=>(
//         <Userdetails
//         key={index}
//         name={user.name}
//         age={user.age}
//         email={user.email}
//         />
//       ))
//     } */}
//     {/* <h1 style={{color:'black',backgroundColor:'green'}}>Input Value:{inputvalue}</h1>
//     <input type="text" onChange={handlechange}></input>
//     <br/>
//     { status ? <div className="status">Content</div>:null}
//     <button onClick={()=>setstatus(false)}>Hide</button>
//     <button onClick={()=>setstatus(true)}>Show</button>
//     <br/>
//     <input ref={inputref} type="text"></input>
//     <button onClick={handleinput}>Get Value Entered in input box</button>
//     <FormHandling/>
//     <ParentComponent/> */}
//    <MyContext.Provider value={shareddata}>
//    <h1>Use Context Hook</h1>
//    <Child1/>
//    </MyContext.Provider>
//    <Card/>
//     </div>

//   );
// }

// export default App;
// export {MyContext};
// import React,{useState} from 'react';
// import Card from './Card';
// import FormHandling from './FormHandling';
// function App() {
//   const [count,setcount]=useState(0);
//   const update=()=>{
//     setcount(count+1);
//     console.log(count);
//   }
//   const handleinput=(e)=>{
//   console.log(e.target.value);
//   }
//   return (
//     <div>
//       <h1>Hi,My Name is Pratik and Welcome to the Reactjs Tutorial</h1>
//       <h1>Count:{count}</h1>
//       <button onClick={update}>Increment Button</button>
//       <br></br>
//       <input  onChange={handleinput} type="text"></input>
//       <br></br>
//       <FormHandling/>
//       <Card name="ritik"/>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import Dashboard from './Dashboard';
import withAuth from './withAuth';
import SeatBooking from './SeatBooking';

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <div>
      <SeatBooking/>
    </div>
  )
}

export default App;
