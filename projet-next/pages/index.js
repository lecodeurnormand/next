import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import {getTodos} from '../components/Test'
import React,{useEffect, useState} from 'react'
import Test from '../components/Test'
const Page = ({ page, navigation, settings }) => {
// const [todos,setTodos] = useState([])
// useEffect(()=>{
//   async function getTodosLoad(){
//     const todos = await getTodos();
//     setTodos(todos);
//   }
//   getTodosLoad();
// })

  return (
    <>
    <Test/>
    <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('home')

  return {
    props: {
      page,
    },
  }
}