import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Head from 'next/head'


const Page = ({ page, navigation, settings }) => {
  return (
    <div>
  <Head>
    <title>Contact</title>
    <meta property='og:title' content="Contact" key="title"/>
    <meta 
    name='description' 
    content='Voici la page contact blablabla'
    key='desc'/>
  </Head>
  <SliceZone slices={page.data.slices} components={components} />
  </div>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('contact')

  return {
    props: {
      page,
    },
  }
}
