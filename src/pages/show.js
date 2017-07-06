import React from 'react'
import MusicCard from '../components/music-card'
import Header from '../containers/header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { find, propEq } from 'ramda'
import { SET_FAVE } from '../constants'

class Show extends React.Component {
	componentDidMount() {
		const faveAlbum = find(
			propEq('id', this.props.match.params.id),
			this.props.favorites
		)
		this.props.dispatch({ type: SET_FAVE, payload: faveAlbum })
	}

	render() {
		const props = this.props
		return (
			<div>
				<Header />
				<main>
					<div className="mw6 center mt2 tc">
						<MusicCard
							image={props.favorite.poster}
							title={props.favorite.name}
						/>
					</div>
					<div className="mw6 tc center">
						<a
							className="link ba br2 w4 pa2 center db mb3"
							href={`https://open.spotify.com/album/` + props.favorite.id}
							target="_blank"
						>
							Play Album
						</a>
						<Link to="/"><BigButton>Return</BigButton></Link>
					</div>
				</main>
			</div>
		)
	}
}
const connector = connect(mapStateToProps)

function mapStateToProps(state) {
	return {
		favorites: state.favorites,
		favorite: state.favorite
	}
}

export default connector(Show)
