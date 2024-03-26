import React from "react"

import Bag from './Bag.jsx'

export default function Pallet({ specInputs }) {

    // console.log((specInputs.palletHeight / 2 - specInputs.bagWidth * 1.5) * 10)

    let bags = 0
    const xOffset = (specInputs.bagHeight - specInputs.bagWidth) / 2
    let positions = {}
    switch (specInputs.pattern) {
        case '5': 
            bags = 5
            positions = { 
                0: { x: `${(specInputs.palletWidth / 2 - specInputs.bagHeight + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagWidth * 1.5) * 10}px` },
                1: { x: `${(specInputs.palletWidth / 2 + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagHeight) * 10}px` }, 
                2: { x: `${(specInputs.palletWidth / 2 - specInputs.bagHeight + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagWidth * 0.5) * 10}px` }, 
                3: { x: `${(specInputs.palletWidth / 2 + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2) * 10}px` }, 
                4: { x: `${(specInputs.palletWidth / 2 - specInputs.bagHeight + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 + specInputs.bagWidth * 0.5) * 10}px` } 
            }
            break
        case '4':
            bags = 4
            positions = {
                0: { x: `${(specInputs.palletWidth / 2 - specInputs.bagHeight + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagWidth - xOffset) * 10}px` },
                1: { x: `${(specInputs.palletWidth / 2 + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagHeight + xOffset) * 10}px` }, 
                2: { x: `${(specInputs.palletWidth / 2 - xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 + xOffset) * 10}px` }, 
                3: { x: `${(specInputs.palletWidth / 2 - specInputs.bagWidth - xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - xOffset) * 10}px` }, 
            }
            break
        case '3':
            bags = 3
            positions = {
                0: { x: `${(specInputs.palletWidth / 2 - specInputs.bagHeight + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagWidth * 1) * 10}px` },
                1: { x: `${(specInputs.palletWidth / 2 + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2 - specInputs.bagHeight / 2) * 10}px` }, 
                2: { x: `${(specInputs.palletWidth / 2 - specInputs.bagHeight + xOffset) * 10}px`, y: `${(specInputs.palletHeight / 2) * 10}px` },
            }
            break
        default:
            bags = 5
    }


    return (
        <div style={{ width: `${specInputs.palletWidth * 10}px`, height: `${specInputs.palletHeight * 10}px` }} className='pallet'>

            {Array.from({ length: bags }, (_, i) => {
                let width
                let height

                if (i === 1 || i === 3) {
                    width = specInputs.bagWidth
                    height = specInputs.bagHeight
                }
                else {
                    width = specInputs.bagHeight
                    height = specInputs.bagWidth
                }

                return <Bag className='bag' key={i} width={width} height={height} position={positions[i]}></Bag>
            })}

        </div>
    ) 
}