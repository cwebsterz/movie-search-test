import React from 'react'
import Header from '../containers/header'
import { Link } from 'react-router-dom'
import { TextField } from 'jrs-react-components'
import BigButton from '../components/big-button'

const Form = props =>
  <div>
    <Header />
    <main>
      <div className="mw6 pv2 ph3 center mt2">
        <h2>Add New Favorite</h2>
        <form>
          <TextField label="Name" optional={false} help="Enter Album Name" />
          <TextField label="Band" optional={false} help="Enter Band Name" />
          <TextField
            label="Poster"
            optional={false}
            help="Enter Album Poster Link"
          />
          <TextField
            label="Rank"
            optional={false}
            help="Enter Rank"
            width={20}
          />
          <div className="mt4 center tc">
            <BigButton>Create Favorite</BigButton>
          </div>
        </form>
      </div>
    </main>
  </div>

export default Form
