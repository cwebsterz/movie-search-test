import React from 'react'

const MusicCard = props =>
  <div className="db center mw5 black">

    <img className="db ba b--black-10" alt={props.title} src={props.image} />

    <dl className="mt2 f3 lh-copy">
      <dt className="clip">Title</dt>
      <dd className="ml0 fw9">{props.title}</dd>
      <dt className="clip">Year</dt>
      <dd className="ml0 gray f5">{props.year}</dd>
    </dl>
  </div>

export default MusicCard
