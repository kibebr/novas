import { FunctionComponent } from 'react'

export const DarkGoldFilter: FunctionComponent = () => (
  <svg id='_gold-sunset' xmlns="http://www.w3.org/2000/svg" className='hidden'>
    <filter id="gold-sunset" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feColorMatrix type="matrix" values=".33 .33 .33 0 0
        .33 .33 .33 0 0
        .33 .33 .33 0 0
        0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.27 0.86 1"/>
        <feFuncG type="table" tableValues="0.01 0.31 0.95"/>
        <feFuncB type="table" tableValues="0.02 0.02 0.02"/>
        <feFuncA type="table" tableValues="0 1"/>
      </feComponentTransfer>
      <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
    </filter>
  </svg>
)
