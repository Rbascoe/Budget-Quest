import { React } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";
import { Income } from "./components/Income";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <header >
        <Header/>
      </header>
      <div >
        <Balance/>
        <Income/>
        <Expenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>

  );
}

export default App;
