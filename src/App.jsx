import React, { setState } from 'react'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pallet: [0, 0],
      bag: [0, 0]
    }
  }


  render() {
    return (
      <>
        <div>test</div>
      </>
    )
  }
}