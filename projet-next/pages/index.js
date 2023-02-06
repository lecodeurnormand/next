import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Test from '../components/Test'
const Page = ({ page, navigation, settings }) => {

  return (
    <>
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