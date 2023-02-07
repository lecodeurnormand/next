import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Test from '../../components/Test'

/**
 * @typedef {import("@prismicio/client").Content.CallApiSlice} CallApiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallApiSlice>} CallApiProps
 * @param { CallApiProps }
 */
const CallApi = ({ slice }) => (
  <>
    <Test/>
  </>
)

export default CallApi