import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.NosServicesSlice} NosServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NosServicesSlice>} NosServicesProps
 * @param { NosServicesProps }
 */
const NosServices = ({ slice }) => (
  <section className='section-services'>
    <div className='wrapper'>
      <h2>Nos services</h2>
      <div className='container-cards'>

    {slice.items.map((item,i) =>
        <div className='card' key={item.id} >
    <img src={item.img.url} alt={item.img.alt} key={i} />
    <PrismicRichText field={item.title} />
    <PrismicRichText field={item.subtitle} />
        </div>
  )
}
      </div>
    </div>
    
    {/* <style jsx>{`
        section {
        
        }
        .title {
          color: #8592e0;
        }
    `}</style> */}
  </section>
)

export default NosServices