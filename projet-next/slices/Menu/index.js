import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.MenuSlice} MenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuSlice>} MenuProps
 * @param { MenuProps }
 */
const Menu = ({ slice }) => (
  <nav>
    <ul>
    {
  slice?.items?.map((item, i) =>
    <li key={i}><PrismicLink  field={item.link}> <PrismicRichText field={item.text} /></PrismicLink></li>  
  )
}
    </ul>
  </nav>
)

export default Menu