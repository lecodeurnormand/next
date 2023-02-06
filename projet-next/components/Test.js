import Image from 'next/image'
import { useState,useEffect } from 'react'

function Test(){

    const[test, setTest] = useState([])
    const [isDataLoading,setDataLoading] = useState(false)
  useEffect(() => {
    async function testfunc(){
      setDataLoading(true)
        let api = await fetch('https://dummyjson.com/products/')
        let apijson = await api.json()
        setTest(apijson.products)
        setDataLoading(false)
    }
    testfunc()
  }, [])
    return(
        <section className='section-test'>
                <button onClick={() => testfunc()}>Fetch random</button>
        <div className="container-cards">
            {isDataLoading ?<p>test</p>:
  test.map((post,index)=>(
    <div className="card" key={index}>
       <div className='card-inner'>
           <div className='cart-front'>
               <img src= {post.images[0]}/>
                   <div className="container-text">
                       {/* <p className='name'>{post.first_name + ' '+ post.last_name}</p> */}
                       <p className='employment'>{post.title}</p>
                       <p>{post.price} €</p>
                   </div>
           </div>
           <div className='cart-back'>
               <p>{post.description}</p>
            </div>
        </div>
    </div>
))
  }
        </div>
        </section>
    )
}

export default Test