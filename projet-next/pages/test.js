import Image from 'next/image'
function Test({posts}){
    return(
        <section className='section-test'>
        <div className="container-cards">
            {posts.map((post,index)=>(
                     <div className="card" key={index}>
                        <div className='card-inner'>
                            <div className='cart-front'>
                                <img src= {post.avatar}/>
                                    <div className="container-text">
                                        <p className='name'>{post.first_name + ' '+ post.last_name}</p>
                                        <p className='employment'>{post.employment.title}</p>
                                    </div>
                            </div>
                            <div className='cart-back'>
                                <p>back</p>
                        </div>
                 </div>
            </div>
            ))}
        </div>
        </section>
    )
}

export async function getStaticProps(){
    const res = await fetch("https://random-data-api.com/api/users/random_user?size=10")
    const posts = await res.json()
    return {
        props : {
            posts
        }
    }
}
export default Test