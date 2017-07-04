import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'jrs-react-components'
import themeStyles from '../theme-styles'

const LinkButton = props =>
  <Link to={props.to}>
    <Button themeStyles={themeStyles}>
      {props.children}
    </Button>
  </Link>

export default LinkButton
