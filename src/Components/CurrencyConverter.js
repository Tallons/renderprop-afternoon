import React, {useState} from "react";
import data from "./currencyData.json"

const CurrencyConverter = (props) => {
      const [currencyChosen, setCurrencyChosen] = useState(false),
            [selectedCurrency, setSelectedCurrency] = useState("select currency"),
            [amount, setAmount] = useState(0),
            [currencyData, setCurrencyData] = useState(data);
   return(
      <div>
         <select value={selectedCurrency} 
            onChange={(event) => {
               setSelectedCurrency(event.target.value)
               setCurrencyChosen(event.target.value === "Select Currency" ? false : true)
               }}>
            <option value="select Currency"> Select Currency</option>
            {currencyData.map((currency, index) => (
                  <option key={currency.id} value={index}>{currency.name}</option>
               ))}
         </select>
         <div>
            <button className="add" onClick={() => setAmount(amount + 1)}>+</button>
            <button className="minus" onClick={() => {amount > 0 && setAmount(amount - 1)}}>-</button>
               {currencyChosen 
                  ? (props.render(currencyData[selectedCurrency],amount)) 
                  : (<p>Please Select Currency</p>)}
         </div>
      </div>
   )
}

export default CurrencyConverter;