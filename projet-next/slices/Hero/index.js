import React from 'react'
import { PrismicRichText } from '@prismicio/react'
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section className='section-hero'>
    <div className='wrapper'>
      <div className='container-hero'>
      <img src={slice.primary.img.url} alt={slice.primary.img.alt} />
      <div className='container-text'>
        <PrismicRichText field={slice.primary.title}  />
        <PrismicRichText field={slice.primary.subtitle} />
      </div>
      </div>
    </div>
  </section>
)

export default Hero