import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UseTransition from "./hooks/UseTransition";


// function App() {
//   return (
//     <div className="App">
//       <p>Hello World</p>
//       <p>REACT</p>
//     </div>vvhvjhvhj
//   );
// }

hjbjgb


//  COMPONENT

// function App() {
//   return (
//     <div className="App">
//       <h1>First Component</h1>
//       <Color/>
//     </div>
//   );
// }
// function Color() {
//   return (
//     <div>
//       <h1>Red</h1>
//     </div>
//   );
// }




// EXPORT IMPORT

// import Login from './UserComponent'
// function App() {
//   return (
//     <div className="App">
//       <h1>Importing Exporting Components</h1>
//       <Login/>
//     </div>
//   );
// }
// export default App;

// import Login, {Profile, Setting, UserKey} from './UserComponent'
// function App() {
//   return (
//     <div className="App">
//       <h1>Importing Exporting Components</h1>
//       <Login/>
//       <Profile/>
//       <Setting/>
//       <h1>{UserKey}</h1>
//     </div>
//   );
// }

// export default App;




// WRITING MARKUP WITH JSX

// function App() {
//   const userName = "Shivanshu Pathak"
//   let x = 20;
//   let y = 30;
//   function callFun() {
//     alert("Hello")
//   }
//   return (
//     <div>
//       <h1>{userName}</h1>
//       <h1>{x*y}</h1>
//       <h1>{10+20}</h1>
//       <button onClick={callFun}>Click</button>
//     </div>
//   )
// }
// export default App;





// React js click event and function call

// function App() {
//       function callFun(){
//             alert("function called")
//       }

//       const fruit=()=>{
//             alert("apple")
//       }
//       return (
//             <div>
//                   <h1>Event and function call</h1>
//                   <button onClick={fruit}>Click Me</button>
//                   <button onClick={()=>fruit("apple")}>Apple</button>
//                   <button onClick={()=>fruit("banana")}>Banana</button>
//             </div>
//       )
// }      
// export default App






///   STATE

// import { useState } from "react";
// import Counter from "./Counter";
// function Fruit() {
//       const [fruit, setFruit]=useState("Apple");
//       const handleFruit=()=>{
//             setFruit("Banana"
//       }
//       return (
//             <div>
//                   <h1>State in React Js</h1>
//                   <h1>{fruit}</h1>
//                   <button onClick={handleFruit}>Change Fruit Name</button>
//                   <Counter/>
//             </div>
//       )
// }
// export default Fruit




///   TOGGLE OR HIDE SHOW

// import { useState } from "react"
// function App() {
//       const [display, setDisplay]=useState(true)
//       return (
//             <>
//                   <h1>Toggle in React js</h1>
//                   <button onClick={()=>setDisplay(!display)} >Toggle</button>
//                   {
//                         display? <h1>Anil Sidhu</h1>:null
//                   }
//             </>
//       )
// }      
// export default App





///    PROPS

// import User from "./User";
// function App() {
//       let name = "Shivanshu"
//       let age = 20
//       return (
//             <div>
//                   <h1>Props in React js</h1>
//                   <User name={name} age={age} />
//                   {/* <User name="Shivanshu" age={20} /> */}
//             </div>
//       )
// }      
// export default App;










// import User from "./User";
// function App() {
//       let userObject = {name : "Shivanshu", age : "20"}
//       return (
//             <div>
//                   <h1>Props in React js</h1>
//                   <User user = {userObject} />
//             </div>
//       )
// }      
// export default App;




// import UseForm from "./hooks/UseForm";

// function App() {
//   return (
//     <UseForm />
//   );
// }



function App() {
  return (
    <UseTransition />
  );
}


export default App;