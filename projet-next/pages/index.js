import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
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