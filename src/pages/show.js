import React from 'react'
import MusicCard from '../components/music-card'
import Header from '../containers/header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'

const Show = props =>
  <div>
    <Header />
    <main>
      <div className="mw6 center mt2 tc">
        <MusicCard
          image="https://i.scdn.co/image/f896b4651bea2a75dc1418a284473c02444c0c1c"
          title="Saints and Sinners"
        />
      </div>
      <div className="mw6 tc center">
        <a
          className="link ba br2 w4 pa2 center db mb3"
          href={`https://open.spotify.com/album/5HSdx1824FepWuf8NbG7B3`}
          target="_blank"
        >
          Play Album
        </a>
        <Link to="/"><BigButton>Return</BigButton></Link>
      </div>
    </main>
  </div>

export default Show
