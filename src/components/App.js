import React from 'react';
import '../styles/App.css'
import ExpensesList from './ExpensesList'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {Contact} from "./Contact";
import Footer from "./Footer";

function App() {
  return (
      <Container>
        <div className="App">
            <ExpensesList />
        </div>
      </Container>
  );
}

export default App
