import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Calc from '../../components/calc'

/**
 * @typedef {import("@prismicio/client").Content.CalculatriceSlice} CalculatriceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CalculatriceSlice>} CalculatriceProps
 * @param { CalculatriceProps }
 */
const Calculatrice = ({ slice }) => (
  <>
   <Calc/>
   </>
)

export default Calculatrice