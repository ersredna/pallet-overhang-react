import React from "react"

import Bag from './Bag.jsx'

export default function Pallet({ specInputs }) {

    const { palletWidth, palletHeight, bagWidth, bagHeight, pattern } = specInputs

    let bags = 0
    let onSide = 0
    let positions = {}
    const offset = (bagHeight - bagWidth) / 2

    switch (pattern) {  
        case '4a':
            bags = 4
            onSide = 2
            positions = {
                0: { x: `${(palletWidth / 2 - bagHeight + offset) * 10}px`, y: `${(palletHeight / 2 - bagWidth - offset) * 10}px` },
                1: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 + offset) * 10}px` }, 
                2: { x: `${(palletWidth / 2 + offset) * 10}px`, y: `${(palletHeight / 2 - bagHeight + offset) * 10}px` }, 
                3: { x: `${(palletWidth / 2 - bagWidth - offset) * 10}px`, y: `${(palletHeight / 2 - offset) * 10}px` }, 
            }
            break
        case '4b':
            bags = 4
            onSide = 3
            positions = {
                0: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 - bagWidth * 1.5) * 10}px` },
                1: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 + bagWidth * 0.5) * 10}px` },
                2: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 - bagWidth * 0.5) * 10}px` },
                3: { x: `${(palletWidth / 2 - bagWidth - offset) * 10}px`, y: `${(palletHeight / 2 - bagHeight / 2) * 10}px` },
            }
            break
        case '3':
            bags = 3
            onSide = 1
            positions = {
                0: { x: `${(palletWidth / 2 - bagHeight / 2) * 10}px`, y: `${(palletHeight / 2 - bagWidth * 1 - offset) * 10}px` },
                1: { x: `${(palletWidth / 2) * 10}px`, y: `${(palletHeight / 2 - offset) * 10}px` },
                2: { x: `${(palletWidth / 2 - bagWidth) * 10}px`, y: `${(palletHeight / 2 - offset) * 10}px` }, 
            }
            break
        default:
            bags = 5
            onSide = 3
            positions = { 
                0: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 - bagWidth * 1.5) * 10}px` },
                1: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 + bagWidth * 0.5) * 10}px` },
                2: { x: `${(palletWidth / 2 - offset) * 10}px`, y: `${(palletHeight / 2 - bagWidth * 0.5) * 10}px` },
                3: { x: `${(palletWidth / 2 - bagWidth - offset) * 10}px`, y: `${(palletHeight / 2) * 10}px` },
                4: { x: `${(palletWidth / 2 - bagWidth - offset) * 10}px`, y: `${(palletHeight / 2 - bagHeight) * 10}px` },
            }
    }

    return (
        <div className='pallet-wrapper' style={{ width: '20px', height: `${Math.max(palletHeight * 10, (bagWidth * onSide) * 10, (bagHeight * (bags - onSide)) * 10)}px`}}>
            <div style={{ width: `${palletWidth * 10}px`, height: `${palletHeight * 10}px` }} className='pallet'>

                {Array.from({ length: bags }, (_, i) => {
                    let width
                    let height
                    
                    if (i < onSide) {
                        width = bagHeight
                        height = bagWidth
                    }
                    else {
                        width = bagWidth
                        height = bagHeight
                    }
                    
                    return <Bag className='bag' key={i} width={width} height={height} position={positions[i]}></Bag>
                })}

            </div>
        </div>
    ) 
}