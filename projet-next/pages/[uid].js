import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import React, {useState, useEffect} from 'react'

const Page = ({ page,metaTitle,metaDescription, ogTitle, ogDescription, ogImage }) => {
    const[url,setUrl] = useState();
    useEffect(()=>{
        const cu = window.location.href;
        setUrl(cu)
    },[])
  return(
    <>
    <Head>
    <title>{metaTitle[0].text}</title>
    <meta property="og:title" content={ogTitle[0].text} />
    <meta name="description" content={metaDescription[0].text}/>
    <meta property="og:description"content={ogDescription[0].text}/>
    <meta property="og:image" content={ogImage.url}/>
    <meta property='og:url' content = {url}/>
    </Head>
    <SliceZone slices={page.data.slices} components={components} />
    </>
  ) 
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)

  return {
    props: {
        metaTitle: page.data.meta_title,
        ogTitle : page.data.social_title,
        ogDescription: page.data.social_description,
        metaDescription: page.data.meta_description,
        ogImage : page.data.social_img,
        page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}