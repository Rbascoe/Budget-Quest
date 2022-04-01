import { React } from "react";
import { Header } from "./src/components/Header.js";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";
import { Income } from "./components/Income";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <Balance/>
        <Income/>
        <Expenses/>

      </div>
    </div>
  );
}

export default App;
