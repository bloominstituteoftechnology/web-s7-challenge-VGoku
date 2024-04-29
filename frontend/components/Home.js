import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component
import PizzaImg from './images/pizza.jpg'

// const Home = () => {
//   return (
//     <div>
//       <h2>Welcome to Bloom Pizza.</h2>
//       <p>This is the Home page.</p>
//       {/* Add a Link to the pizza image */}
//       <Link to="/order">
//         <img src={PizzaImg} alt="order-pizza" />
//       </Link>
//     </div>
//   );
// };

function Home() {
  const navigate = useNavigate();
  return(
    <div>
      <h2>Welcome to Bloom Pizza!</h2>
      <img onClick={() => navigate("/order")} alt="order-pizza" style={{cursor: "pointer"}} src={PizzaImg} />
    </div>
  )
}

export default Home;