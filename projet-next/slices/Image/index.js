import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => (
  <section className='section-img'>
    <div className='container-img'>
    <img src={slice.primary.img.url} alt={slice.primary.img.alt} />
    </div>
  </section>
)

export default Image