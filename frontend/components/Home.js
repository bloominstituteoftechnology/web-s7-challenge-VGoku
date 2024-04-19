import React from 'react';
import pizza from './images/pizza.jpg';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'; // Import createMemoryHistory

// function Home() {
//   // Create a memory history object
//   const history = createMemoryHistory();

//   return (
//     <div>
//       <h2>
//         Welcome to Bloom Pizza!
//       </h2>
//       {/* Render the component with the Router using the created history object */}
//       <Router history={history}>
//         <Link to="/order">
//           <img alt="order-pizza" style={{ cursor: 'pointer' }} src={pizza} />
//         </Link>
//       </Router>
//     </div>
//   );
// }

// export default Home;

// import React from 'react';
// import pizza from './images/pizza.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>
        Welcome to Bloom Pizza!
      </h2>
      <Link to="/order">
        <img alt="order-pizza" style={{ cursor: 'pointer' }} src={pizza} />
      </Link>
    </div>
  );
}