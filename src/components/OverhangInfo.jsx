import React from "react";

export default function OverhangInfo({ specInputs }) {

    const { palletWidth, palletHeight, bagWidth, bagHeight, allowableXOverhang, allowableYOverhang, pattern } = specInputs

    let xOverhang = { value: -1, textColor: 'black' }
    let yOverhang = { value: -1, textColor: 'black' }

    switch (pattern) {
        case '5':
            xOverhang.value = ((bagWidth + bagHeight) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableXOverhang ? 'red' : 'green'
            yOverhang.value = (Math.max(bagWidth * 3, bagHeight * 2) - palletHeight) / 2
            yOverhang.textColor = yOverhang.value > allowableYOverhang ? 'red' : 'green'
            console.log(yOverhang.value, allowableYOverhang)
            break
        case '4a':
            xOverhang.value = ((bagWidth + bagHeight) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableXOverhang ? 'red' : 'green'
            yOverhang.value = ((bagWidth + bagHeight) - palletHeight) / 2
            yOverhang.textColor = yOverhang.value > allowableYOverhang ? 'red' : 'green'
            break
        case '4b':
            xOverhang.value = ((bagWidth + bagHeight) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableXOverhang ? 'red' : 'green'
            yOverhang.value = (Math.max(bagWidth * 3, bagHeight * 1) - palletHeight) / 2
            yOverhang.textColor = yOverhang.value > allowableYOverhang ? 'red' : 'green'
            break
        case '3':
            xOverhang.value = (Math.max(bagWidth * 2, bagHeight) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableXOverhang ? 'red' : 'green'
            yOverhang.value = ((bagWidth + bagHeight) - palletHeight) / 2
            yOverhang.textColor = yOverhang.value > allowableYOverhang ? 'red' : 'green'
            break
        default:
            break
    }

    return(
        <div>
            <p className='overhang-info' style={{ color: xOverhang.textColor }}>X Overhang(in): {xOverhang.value}</p>
            <p className='overhang-info' style={{ color: yOverhang.textColor }}>Y Overhang(in): {yOverhang.value}</p>
        </div>
    )
}