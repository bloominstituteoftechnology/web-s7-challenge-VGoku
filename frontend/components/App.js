// // // // // // // import React from 'react';
// // // // // // // import Home from './Home';
// // // // // // // import Form from './Form';
// // // // // // // import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// // // // // // // function App() {
// // // // // // //   return (
// // // // // // //     <Router>
// // // // // // //       <div id="app">
// // // // // // //         {/* Navigation bar */}
// // // // // // //         <nav>
// // // // // // //           <NavLink to="/" exact activeStyle={{ color: 'red' }}>Home</NavLink>
// // // // // // //           <NavLink to="/order" activeStyle={{ color: 'red' }}>Order</NavLink>
// // // // // // //         </nav>

// // // // // // //         {/* Routes for different components */}
// // // // // // //         <Route path='/' exact component={Home} />
// // // // // // //         <Route path='/order' component={Form} />
// // // // // // //       </div>
// // // // // // //     </Router>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;

// // // // // // // App.js
// // // // // // import React from 'react';
// // // // // // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // // // // // import Home from './Home';
// // // // // // // import About from './About';
// // // // // // // import Contact from './Contact';
// // // // // // import Contact from './Contact';
// // // // // // import About from '../pages/About';
// // // // // // const App = () => {
// // // // // //   return (
// // // // // //     <Router>
// // // // // //       <div className="App">
// // // // // //         <header>
// // // // // //           <h1>My App</h1>
// // // // // //           <nav>
// // // // // //             <ul>
// // // // // //               <li><NavLink to="/">Home</NavLink></li>
// // // // // //               <li><NavLink to="/about">About</NavLink></li>
// // // // // //               <li><NavLink to="/contact">Contact</NavLink></li>
// // // // // //             </ul>
// // // // // //           </nav>
// // // // // //         </header>
// // // // // //         <main>
// // // // // //           <Switch>
// // // // // //             <Route path="/" exact component={Home} />
// // // // // //             <Route path="/about" component={About} />
// // // // // //             <Route path="/contact" component={Contact} />
// // // // // //           </Switch>
// // // // // //         </main>
// // // // // //       </div>
// // // // // //     </Router>
// // // // // //   );
// // // // // // };

// // // // // // export default App;
// // // // // import React from 'react';
// // // // // import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// // // // // import Home from './Home';
// // // // // import Contact from './Contact';
// // // // // import About from '../pages/About';

// // // // // const App = () => {
// // // // //   return (
// // // // //     <Router>
// // // // //       <div className="App">
// // // // //         <header>
// // // // //           <h1>My App</h1>
// // // // //           <nav>
// // // // //             <ul>
// // // // //               <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
// // // // //               <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
// // // // //               <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
// // // // //             </ul>
// // // // //           </nav>
// // // // //         </header>
// // // // //         <main>
// // // // //           <Switch>
// // // // //             <Route path="/" exact component={Home} />
// // // // //             <Route path="/about" component={About} />
// // // // //             <Route path="/contact" component={Contact} />
// // // // //           </Switch>
// // // // //         </main>
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // import React from 'react';
// // // // import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// // // // import Home from './Home';
// // // // import About from '../pages/About'; // Assuming About.js exists
// // // // // import Contact from './Contact'; // Remove this line

// // // // const App = () => {
// // // //   return (
// // // //     <Router>
// // // //       <div className="App">
// // // //         <header>
// // // //           <h1>My App</h1>
// // // //           <nav>
// // // //             <ul>
// // // //               <li><NavLink to="/">Home</NavLink></li>
// // // //               <li><NavLink to="/about">About</NavLink></li>
// // // //               {/* <li><NavLink to="/contact">Contact</NavLink></li> */} {/* Remove this line */}
// // // //             </ul>
// // // //           </nav>
// // // //         </header>
// // // //         <main>
// // // //           <Switch>
// // // //             <Route path="/" exact component={Home} />
// // // //             <Route path="/about" component={About} />
// // // //             {/* <Route path="/contact" component={Contact} /> */} {/* Remove this line */}
// // // //           </Switch>
// // // //         </main>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // };

// // // // export default App;
// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// // // import Home from './Home';
// // // import About from '../pages/About'; // Assuming About.js exists

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <header>
// // //           <h1>My App</h1>
// // //           <nav>
// // //             <ul>
// // //               <li><NavLink to="/">Home</NavLink></li>
// // //               <li><NavLink to="/about">About</NavLink></li>
// // //             </ul>
// // //           </nav>
// // //         </header>
// // //         <main>
// // //           <Switch>
// // //             <Route path="/" exact component={Home} />
// // //             <Route path="/about" component={About} />
// // //           </Switch>
// // //         </main>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// // import Home from './Home';
// // // Assuming About.js exists in the '../pages' directory
// // import About from '../pages/About'; 

// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <header>
// //           <h1>My App</h1>
// //           <nav>
// //             <ul>
// //               <li><NavLink to="/">Home</NavLink></li>
// //               <li><NavLink to="/about">About</NavLink></li>
// //             </ul>
// //           </nav>
// //         </header>
// //         <main>
// //           <Switch>
// //             <Route path="/" exact component={Home} />
// //             <Route path="/about" component={About} />
// //           </Switch>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// import Home from './Home';
// import About from './pages/About'; // Assuming About.js exists in frontend/pages

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//           <h1>My App</h1>
//           <nav>
//             <ul>
//               <li><NavLink to="/">Home</NavLink></li>
//               <li><NavLink to="/about">About</NavLink></li>
//               <li><NavLink to="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/about" component={About} />
//             {/* Add other routes as needed */}
//           </Switch>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
// import About from './components/pages/About'; // Assuming About.js exists in frontend/components/pages
import About from './components/pages/About'; // Assuming About.js exists in frontend/components/pages

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>My App</h1>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* Add other routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

