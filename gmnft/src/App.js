import logo from './logo.svg';
import './App.css';
import AddressInput from './components/AddressInput';
import { useState } from 'react';

const ethers = require('ethers');

const network = 'mainnet';


function App() {
const provider = ethers.getDefaultProvider(network);
const [balanceInEth, setBalanceInEth] = useState(0);

function inputAddressHandler (addressText) {
  const address = addressText;
  provider.getBalance(address).then((balance) => {
    setBalanceInEth(ethers.utils.formatEther(balance));
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>GM NFT</h1>
        <AddressInput inputAddress={inputAddressHandler} />
        <p>{balanceInEth}</p>
      </header>
    </div>
  );
}

export default App;
