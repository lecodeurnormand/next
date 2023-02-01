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
       <PrismicLink field={item.link} key={i}>
        <div className='card'  >
            
    <img src={item.img.url} alt={item.img.alt} />
    <PrismicRichText field={item.title}/>
    <PrismicRichText field={item.subtitle}  />
        </div>
        </PrismicLink>
        
  )
}
      </div>
    </div>
  </section>
)
export default NosServices