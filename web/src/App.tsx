// import React, { useState } from 'react';
// import './App.css';

// //JSX - Síntaxe de XML dentro do javascript
// import Header from './Header';

// function App() {
//   const [counter, setCounter] = useState(0);

//   function handleBottomClick(){
//     setCounter(counter + 1 );
//   }
//   return (
//       <div>
//         <Header title="Ecoleta" />     

//         <h4>{counter}</h4>
//         <button type="button" onClick={handleBottomClick}>Aumentar</button>   
//       </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';

import Routes from './routes';

function App() {
  return (
      <div>
          <Routes />
      </div>
  );
}
export default App;

