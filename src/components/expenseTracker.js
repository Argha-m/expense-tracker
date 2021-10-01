import React from "react";
import './expenseTracker.scss';

function ExpenseTracker(props) {
    return (
      <div className="expense_tracker">
        <h3>Transctions:</h3>
        <div className="expense_tracker_list">
          {props.transctionItems.map((item, i) => 
            <div key={i} className="expense_track_item">{i+1}: {item}</div>
          )}
        </div>
      </div>
    );
  }
  
  export default ExpenseTracker;
  