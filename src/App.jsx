import React, { setState } from 'react'
import './App.css'

import SpecForm from './components/SpecForm.jsx'
import Pallet from './components/Pallet.jsx'
import OverhangInfo from './components/OverhangInfo.jsx'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      specInputs: { palletWidth: 40, palletHeight: 48, bagWidth: 16, bagHeight: 24, allowableXOverhang: 1, allowableYOverhang: 1, pattern: '5' }
    }
  }

  handleChange = (e) => {
    const { id, value } = e.target
    
    this.setState(({ specInputs }) => {
      switch (id) {
        case 'pallet-width-input':
          return { specInputs: { ...specInputs, palletWidth: Number(value) } }
        case 'pallet-height-input':
          return { specInputs: { ...specInputs, palletHeight: Number(value) } }
        case 'bag-width-input':
          return { specInputs: { ...specInputs, bagWidth: Number(value) } }
        case 'bag-height-input':
          return { specInputs: { ...specInputs, bagHeight: Number(value) } }
        case 'allowable-x-overhang-input':
          return { specInputs: { ...specInputs, allowableXOverhang: Number(value) }}
        case 'allowable-y-overhang-input':
          return { specInputs: { ...specInputs, allowableYOverhang: Number(value) }}
        case 'pattern-input':
          return { specInputs: { ...specInputs, pattern: value }}
        default:
          break
      }
    })
  }

  handleSwitch = (e) => {
    const { id } = e.target

    console.log(id)

    this.setState(({specInputs}) => {
      switch (id) {
        case 'switch-pallet-btn':
          return { specInputs: { ...specInputs, palletWidth: specInputs.palletHeight, palletHeight: specInputs.palletWidth } }
        case 'switch-bag-btn':
          return { specInputs: { ...specInputs, bagWidth: specInputs.bagHeight, bagHeight: specInputs.bagWidth } }
      }
    })

  }

  render() {
    return (
      <>
        <SpecForm handleChange={this.handleChange} handleSwitch={this.handleSwitch} specInputs={this.state.specInputs} />
        <br />
        <OverhangInfo specInputs={this.state.specInputs} />
        <br />
        <Pallet specInputs={this.state.specInputs} />
      </>
    )
  }
}