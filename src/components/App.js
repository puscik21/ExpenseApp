import React from 'react';
import '../styles/App.css'
import Header from './Header'
import ExpensesList from './ExpensesList'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <ExpensesList />
      <Footer />
    </div>
  );
}

export default App;
