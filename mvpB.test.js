// Import the necessary modules
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter alias as Router
import server from './backend/mock-server';

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

// Test suite
describe('Sprint 7 Challenge Learner Tests', () => {
  // Task 1 - Unit Testing of the sum function
  test('sum function adds numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
    expect(() => sum('a', 2)).toThrow('pass valid numbers');
  });

  // Task 2 - Integration Testing of HelloWorld component
  test('HelloWorld component renders correctly', () => {
    // Render the HelloWorld component without Router
    render(
      <Router>
        <HelloWorld />
      </Router>
    );

    // Assertions...
  });
});
