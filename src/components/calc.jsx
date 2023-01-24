import React from 'react'
import '../calc.css'

const Calc = () => {

    const onclick=(e)=>{
            console.log(e.target.textContent)
            let inputValue=document.querySelector('#calc-in').textContent;
            inputValue=e.target.textContent
    }

  return (
    <div className='main'>
      
        <div className='app'>
            <div className="first-row">
                <label htmlFor='calc-in'>
                    <h1>calculator</h1>
                </label>
                <input  type="text" id='calc-in'></input>
            </div>
            <div className="second-row">
                <button onClick={onclick}>Ac</button>
                <button onClick={onclick}>+/-</button>
                <button onClick={onclick}>%</button>
                <button onClick={onclick} className='spl'>÷</button>
            </div>
            
            <div className="third-row">
                <button onClick={onclick}>7</button>
                <button onClick={onclick}>8</button>
                <button onClick={onclick}>9</button>
                <button onClick={onclick} className='spl'>x</button>
            </div>
            <div className="fourth-row">
                <button onClick={onclick}>4</button>
                <button onClick={onclick}>5</button>
                <button onClick={onclick}>6</button>
                <button onClick={onclick} className='spl'>-</button>
            </div>
            <div className="fifth-row">
                <button onClick={onclick}>1</button>
                <button onClick={onclick}>2</button>
                <button onClick={onclick}>2</button>
                <button onClick={onclick} className='spl'>+</button>
            </div>
            <div className="sixth-row">
                <button onClick={onclick} className='zero'>0</button>
                <button onClick={onclick}>.</button>
                <button onClick={onclick} className='spl'>=</button>
                
            </div>
            </div>

            
        </div>
  )
}

export default Calc