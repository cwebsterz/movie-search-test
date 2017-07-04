import React from 'react'
import { connect } from 'react-redux'
import Title from '../components/title'

const Header = function(props) {
  return (
    <header className="ph4 pv1 bg-purple white-60 avenir">
      <Title>{props.app.title}</Title>
    </header>
  )
}

const connector = connect(mapStateToProps)

export default connector(Header)

function mapStateToProps(state) {
  return state
}
