import '../styles/globals.css'
import Layout from '../components/layout'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import './/../styles/global.scss'
import './/../styles/calculatrice.scss'

export default function App({ Component, pageProps }) {

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  )
}