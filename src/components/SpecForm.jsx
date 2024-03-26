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
                <label htmlFor="allowable-overhang-input">Allowable Overhang(in): </label>
                <input type="number" id="allowable-overhang-input" onChange={changeLink} value={specInputs.allowableOverhang} ></input>
            </div>
            <div>
                <label htmlFor="pattern-input">Bag Pattern: </label>
                <select id="pattern-input" onChange={changeLink} value={specInputs.pattern}>
                    <option value="5">5 Bag</option>
                    <option value="4">4 Bag</option>
                    <option value="3">3 Bag</option>
                </select>
            </div>
        </div>
    )
}