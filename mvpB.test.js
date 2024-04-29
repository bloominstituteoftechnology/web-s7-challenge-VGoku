// // // // Import the necessary modules
// // // import React from 'react';
// // // import { render, screen } from '@testing-library/react';
// // // import '@testing-library/jest-dom';
// // // import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter alias as Router
// // // import server from './backend/mock-server';

// // // // Define the sum function within the test file
// // // function sum(a, b) {
// // //   a = Number(a);
// // //   b = Number(b);
// // //   if (isNaN(a) || isNaN(b)) {
// // //     throw new Error('pass valid numbers');
// // //   }
// // //   return a + b;
// // // }

// // // // Define the HelloWorld component within the test file
// // // function HelloWorld() {
// // //   return (
// // //     <div>
// // //       <h1>Hello World Component</h1>
// // //       <nav>
// // //         <a href='#'>Home</a>
// // //         <a href='#'>About</a>
// // //         <a href='#'>Blog</a>
// // //       </nav>
// // //       <main>
// // //         <section>
// // //           <h2>The Truth</h2>
// // //           <p>JavaScript is pretty awesome</p>
// // //         </section>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // // Test suite
// // // describe('Sprint 7 Challenge Learner Tests', () => {
// // //   // Task 1 - Unit Testing of the sum function
// // //   test('sum function adds numbers correctly', () => {
// // //     expect(sum(1, 2)).toBe(3);
// // //     expect(sum(-1, 2)).toBe(1);
// // //     expect(() => sum('a', 2)).toThrow('pass valid numbers');
// // //   });

// // //   // Task 2 - Integration Testing of HelloWorld component
// // //   test('HelloWorld component renders correctly', () => {
// // //     // Render the HelloWorld component without Router
// // //     render(
// // //       <Router>
// // //         <HelloWorld />
// // //       </Router>
// // //     );

// // //     // Assertions...
// // //   });
// // // });

// // // import { act } from 'react';
// // // import React from 'react';
// // // import { render } from '@testing-library/react';
// // // import '@testing-library/jest-dom';
// // // import { BrowserRouter as Router } from 'react-router-dom';
// // // import server from './backend/mock-server';

// // // function sum(a, b) {
// // //   a = Number(a);
// // //   b = Number(b);
// // //   if (isNaN(a) || isNaN(b)) {
// // //     throw new Error('Please provide valid numbers');
// // //   }
// // //   return a + b;
// // // }

// // // function HelloWorld() {
// // //   return (
// // //     <div>
// // //       <h1>Hello World Component</h1>
// // //       <nav>
// // //         <a href='#'>Home</a>
// // //         <a href='#'>About</a>
// // //         <a href='#'>Blog</a>
// // //       </nav>
// // //       <main>
// // //         <section>
// // //           <h2>The Truth</h2>
// // //           <p>JavaScript is pretty awesome</p>
// // //         </section>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // describe('Sprint 7 Challenge Learner Tests', () => {
// // //   test('sum function adds numbers correctly', () => {
// // //     expect(sum(1, 2)).toBe(3);
// // //     expect(sum(-1, 2)).toBe(1);
// // //     expect(() => sum('a', 2)).toThrow('Please provide valid numbers');
// // //   });

// // //   test('HelloWorld component renders correctly', () => {
// // //     render(
// // //       <Router>
// // //         <HelloWorld />
// // //       </Router>
// // //     );

// // //     // Add your assertions here...
// // //   });
// // // });

// // import { screen } from '@testing-library/react';

// // // ...

// // test('HelloWorld component renders correctly', () => {
// //   render(
// //     <Router>
// //       <HelloWorld />
// //     </Router>
// //   );

// //   // Check if the header is rendered
// //   expect(screen.getByText('Hello World Component')).toBeInTheDocument();

// //   // Check if the navigation links are rendered
// //   expect(screen.getByText('Home')).toBeInTheDocument();
// //   expect(screen.getByText('About')).toBeInTheDocument();
// //   expect(screen.getByText('Blog')).toBeInTheDocument();

// //   // Check if the main content is rendered
// //   expect(screen.getByText('The Truth')).toBeInTheDocument();
// //   expect(screen.getByText('JavaScript is pretty awesome')).toBeInTheDocument();
// // });

// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import server from './backend/mock-server';
// import React from 'react';

// // Define the sum function within the test file
// function sum(a, b) {
//   a = Number(a);
//   b = Number(b);
//   if (isNaN(a) || isNaN(b)) {
//     throw new Error('pass valid numbers');
//   }
//   return a + b;
// }

// // Define the HelloWorld component within the test file
// function HelloWorld() {
//   return (
//     <div>
//       <h1>Hello World Component</h1>
//       <nav>
//         <a href='#'>Home</a>
//         <a href='#'>About</a>
//         <a href='#'>Blog</a>
//       </nav>
//       <main>
//         <section>
//           <h2>The Truth</h2>
//           <p>JavaScript is pretty awesome</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// describe('Sprint 7 Challenge Learner Tests', () => {
//   test('sum function adds numbers correctly', () => {
//     expect(sum(1, 2)).toBe(3);
//     expect(sum(-1, 2)).toBe(1);
//     expect(() => sum('a', 2)).toThrow('pass valid numbers');
//   });

//   test('HelloWorld component renders correctly', () => {
//     render(
//       <Router>
//         <HelloWorld />
//       </Router>
//     );

//     // Check if the header is rendered
//     expect(screen.getByText('Hello World Component')).toBeInTheDocument();

//     // Check if the navigation links are rendered
//     expect(screen.getByText('Home')).toBeInTheDocument();
//     expect(screen.getByText('About')).toBeInTheDocument();
//     expect(screen.getByText('Blog')).toBeInTheDocument();

//     // Check if the main content is rendered
//     expect(screen.getByText('The Truth')).toBeInTheDocument();
//     expect(screen.getByText('JavaScript is pretty awesome')).toBeInTheDocument();
//   });
// });

// mvpB.test.js

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import server from './backend/mock-server'; // Make sure this import is correct
import React from 'react';

// Define the sum function within the test file
function sum(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    throw new Error('pass valid numbers');
  }
  return a + b;
}

// Define the HelloWorld component within the test file
function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  );
}

describe('Sprint 7 Challenge Learner Tests', () => {
  test('sum function adds numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
    expect(() => sum('a', 2)).toThrow('pass valid numbers');
  });

  test('HelloWorld component renders correctly', () => {
    render(
      
      <Router>
        <HelloWorld />
      </Router>
    );

    // Check if the header is rendered
    expect(screen.getByText('Hello World Component')).toBeInTheDocument();

    // Check if the navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText('The Truth')).toBeInTheDocument();
    expect(screen.getByText('JavaScript is pretty awesome')).toBeInTheDocument();
  });
});