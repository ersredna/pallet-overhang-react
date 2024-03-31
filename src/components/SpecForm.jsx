import React from "react";

export default function SpecForm({ handleChange, handleSwitch, specInputs }) {

    function changeLink(e) {
        handleChange(e)
    }

    function switchLink(e) {
        handleSwitch(e)
    }
    
    return (
        <div id='spec-form'>
            <div>
                <label htmlFor="pallet-width-input">Pallet Width(in): </label>
                <input type="number" id="pallet-width-input" onChange={changeLink} value={specInputs.palletWidth}></input>
            </div>
            <div>
                <label htmlFor="pallet-height-input">Pallet Height(in): </label>
                <input type="number" id="pallet-height-input" onChange={changeLink} value={specInputs.palletHeight} ></input>
            </div>
            <div>
                <label>Switch Pallet height and width: </label>
                <button id="switch-pallet-btn" onClick={switchLink}>Switch</button>
            </div>
            <br/>
            <div>
                <label htmlFor="bag-width-input">Bag Width(in): </label>
                <input type="number" id="bag-width-input" onChange={changeLink} value={specInputs.bagWidth} ></input>
            </div>
            <div>
                <label htmlFor="bag-height-input">Bag Height(in): </label>
                <input type="number" id="bag-height-input" onChange={changeLink} value={specInputs.bagHeight} ></input>
            </div>
            <div>
                <label>Switch Bag height and width: </label>
                <button id="switch-bag-btn" onClick={switchLink}>Switch</button>
            </div>
            <br/>
            <div>
                <label htmlFor="allowable-x-overhang-input">Allowable Width Overhang(in): </label>
                <input type="number" id="allowable-x-overhang-input" onChange={changeLink} value={specInputs.allowableXOverhang} ></input>
            </div>
            <div>
                <label htmlFor="allowable-y-overhang-input">Allowable Height Overhang(in): </label>
                <input type="number" id="allowable-y-overhang-input" onChange={changeLink} value={specInputs.allowableYOverhang} ></input>
            </div>
            <br />
            <div>
                <label htmlFor="pattern-input">Bag Pattern: </label>
                <select id="pattern-input" onChange={changeLink} value={specInputs.pattern}>
                    <option value="5">5 Bag</option>
                    <option value="4a">4 Bag (A)</option>
                    <option value="4b">4 Bag (B)</option>
                    <option value="3">3 Bag</option>
                </select>
            </div>
        </div>
    )
}