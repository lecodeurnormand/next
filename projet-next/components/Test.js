// import axios from 'axios'

// const API_URL = "https://jsonplaceholder.typicode.com/";

// export async function getTodos(){
//     try {
//         const {data} = await axios.get(`${API_URL}todos`);
//         return data;
//     } catch (error){
//         console.log(error)
//     }
// }

 function Test({posts}){
    return(
        <ul>
            {console.log(posts)}
            {/* {posts.map((post,index)=>(
                <li key={index}>{post.title}</li>
            ))} */}
        </ul>
    )
}

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/")
    const posts = await res.json()
    return {
        props : {
            posts
        }
    }
}
export default Test