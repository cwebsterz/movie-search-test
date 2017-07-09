import React from 'react'
import MusicCard from '../components/music-card'
import Header from '../containers/header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { find, propEq } from 'ramda'
import { SET_FAVE, CLEAR_FAVE } from '../constants'
import { TextField, Button } from 'jrs-react-components'

class Show extends React.Component {
	componentDidMount(dispatch) {
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
						<BigButton onClick={props.handleClick()}>Delete</BigButton>
					</div>
				</main>
			</div>
		)
	}
}
const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
	return {
		favorites: state.favorites,
		favorite: state.favorite
	}
}

function removeAlbum(dispatch, getState) {
	const selectedAlbum = getState().search.selectedAlbum
	const url = process.env.REACT_APP_MUSIC

	fetch(url + '/favorites', {
		method: 'DELETE',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify()
	})
		.then(res => res.json())
		.then(favorite => {
			dispatch({ type: CLEAR_FAVE })
		})
}

function mapActionsToProps(dispatch) {
	return {
		handleClick: e => dispatch(removeAlbum)
	}
}

export default connector(Show)
