import React, {useState} from 'react';
import './App.css';
import {MoneyFilter} from './components/MoneyFilter'

function App() {

  const [money, setMoney] = useState ([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' }
  ])            
  
   
   return(
    <div className="App">
       <MoneyFilter money={money}/>  
    </div>
   ) 
          
}

export default App;









