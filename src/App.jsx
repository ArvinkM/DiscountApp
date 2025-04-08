
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {

  const [amount, setAmount] = useState(0)
  const [percent, setPercent] = useState(0)
  const [discounted, setDiscounted] = useState(0)
  const [saved, setSaved] = useState(0)

  const calcdiscount = () => {
    const discountedAmount = (amount * percent) / 100
    const finalAmount = amount - discountedAmount
    setDiscounted(finalAmount)
    setSaved(discountedAmount)
  }

  const reset = () => {
    setAmount(0)
    setPercent(0)
    setDiscounted(0)
    setSaved(0)
  }


  return (
    <>
      <div className="app">
        <div className="container">
          <div className="header">
            <h2>Discount Calculator  <i class="fa-solid fa-tags fa-shake"></i></h2>
            <p>Get your discounted prices here!</p>
          </div>
          <div className="discounted">
            <h2>&#8377; {discounted}</h2>
            <p>Discounted amount</p>
            {saved > 0 && <p className="saved">You saved: &#8377; {saved.toFixed(2)}</p>}
          </div>
          <div className="form">
            <form className='input'>
              <TextField id="outlined-basic" label="Actual Amount" variant="outlined" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <TextField id="filled-basic" label="Discount Percentage" variant="filled" type="number" value={percent} onChange={(e) => setPercent(e.target.value)} />
            </form>
          </div>
          <div className="button">
            <Button variant="contained" className="calculate-btn" onClick={calcdiscount}>Calculate</Button>
            <Button variant="outlined" className="reset-btn" onClick={reset}>Reset</Button>
          </div>
        </div>
      </div >



    </>
  )
}

export default App
