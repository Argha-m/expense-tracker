import React, {useState} from "react";
import './expenseForm.scss';

function ExpenseForm(props) {
    const [totalAmount, setTotalAmount] = useState(1000);
    const [totalAmountValidate, setTotalAmountValidate] = useState(false);
    const [transAmount, setTransAmount] = useState('');

    const handleAmount = (event) => {
        setTransAmount(event.target.value);
    }

    const trackTransaction = (type) => {
        let data = new Date();
        let isoDateStand = data.toISOString();
        let transctionsDetails = '';
        let isValidate = false;

        //Form validation
        if(transAmount === "" || totalAmount <= 0){
            setTotalAmountValidate(true);
            isValidate = true;
        } else {
            setTotalAmountValidate(false);
            isValidate = false;
        }
        console.log("a", totalAmountValidate);

        if(isValidate === false){
            console.log("b", totalAmountValidate);
            if(type === 'Add'){
                setTotalAmount(totalAmount + parseInt(transAmount));
                transctionsDetails = isoDateStand + " - " + parseInt(transAmount) + " - " + type;
            } else {
                setTotalAmount(totalAmount - transAmount);
                transctionsDetails = `${isoDateStand} - ${parseInt(transAmount)} - ${type}`;
            }
            props.parentCallback(transctionsDetails);
        }
    }

    return (
      <div className="expense_form">
        <div className="balance_amnt">Balance: {totalAmount}</div>
        <div className="transaction_amount_input">
            <input type="number" name="transactionAmount" placeholder="Enter Amount" value={transAmount} onChange={(event) => handleAmount(event)} />
            {totalAmountValidate ? <small className="val_error">No Input is available Or balance is Over.</small> : '' }
        </div>
        <div className="transaction_actions">
            <button className="btn btn_add" onClick={()=>trackTransaction('Add')}>Add</button>
            <button className="btn btn_remove" onClick={()=>trackTransaction('Remove')}>Remove</button>
        </div>
      </div>
    );
  }
  
  export default ExpenseForm;
  