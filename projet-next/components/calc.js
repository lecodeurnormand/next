import { useState } from "react"

export default function (){

    
    const [value,setValue] = useState([])

    function handleClick(e){
       setValue(e.target.innerHTML)
        let tableau1 =   [value]
        let tableau2 = ["2"]
        // let tableau3 = tableau1.concat(tableau2)
        console.log(tableau1)
    }

    function handleDelete(){
        setValue('')
    }
    return(
        <section className="section-calculatrice">
            <div className="wrapper">
            <div className="container-calc">
                <div className="calc">
                    <input onChange={handleClick} value={value}  name="result" className="result" placeholder="0"/>
                     <span className="number" onClick={(e)=> handleClick(e)}>1</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>2</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>3</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>4</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>5</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>6</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>7</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>8</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>9</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>0</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>+</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>-</span>
                     <span className="number" onClick={(e)=> handleClick(e)}>*</span>
                     <span className="number" onClick={handleDelete}>C</span>
                    <span className="equal">=</span>
                </div>
            </div>
            </div>
        </section>
    )
}