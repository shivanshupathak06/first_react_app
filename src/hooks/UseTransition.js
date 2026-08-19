// import { useState } from "react";

// function UseTransition() {

//   const [pending,setPending]=useState(false);
//   const handleButton=async ()=>{
//     setPending(true)
//     await new Promise(res=>setTimeout(res,2000))
//     setPending(false)
//   }

//   return (
//     <div>
//       <h1>useTransition Hook in React js 19</h1>
//       <button disabled={pending} onClick={handleButton} >Click</button>
//     </div>
//   );
// }
// export default UseTransition;



import { useState, useTransition } from "react";

function UseTransition() {
  const [pending, startTransition] = useTransition();
  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <div>
      <h1>useTransition Hook in React js 19</h1>
      {
        pending ? (
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading..."
          width="50"
        />
      ) 
        : null
      }
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </div>
  );
}

export default UseTransition;