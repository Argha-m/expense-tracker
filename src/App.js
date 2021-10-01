import React, {useState} from "react";
import './App.scss';
import ExpenseTracker from './components/expenseTracker';
import ExpenseForm from './components/expenseForm';

function App() {
  const [transctionData, setTransctionData ] = useState([]);

  const handleCallback = (childData) => {
    setTransctionData(transctionData => [...transctionData, childData]);
  }
  
  return (
    <div className="App">
      <h1>Expanse Tracker</h1>
      <ExpenseForm parentCallback={handleCallback} />
      <ExpenseTracker transctionItems={transctionData} />
    </div>
  );
}

export default App;
