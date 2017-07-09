import React from 'react'
import Header from '../containers/header'
import { connect } from 'react-redux'
import { find, propEq } from 'ramda'
import { SET_FAVE, SET_FAVE_RANK, APPEND_FAVE, CLEAR_FAVE } from '../constants'
import { TextField, Button } from 'jrs-react-components'

class Edit extends React.Component {
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
					<div className="mw6 pv2 ph3 center mt2">
						<form onSubmit={props.handleSubmit(props.history)}>
							<TextField
								value={props.favorite.rank}
								onChange={props.setRank}
								label="Rank"
								optional={false}
								help="Enter Rank"
								width={20}
							/>
							<div className="mt4 center tc">
								<Button>
									Edit Rank
								</Button>
							</div>
						</form>
					</div>
				</main>
			</div>
		)
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
	return {
		favorite: state.favorite,
		favorites: state.favorites
	}
}

const setFave = history => (dispatch, getState) => {
	const favorite = getState().favorite
	const url = process.env.REACT_APP_API

	fetch(url + '/favorites/' + favorite.id, {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(favorite)
	})
		.then(res => res.json())
		.then(fave => {
			dispatch({ type: SET_FAVE_RANK, payload: fave })
		})

	dispatch({ type: CLEAR_FAVE })
	history.push('/')
}

function mapActionsToProps(dispatch) {
	return {
		dispatch: dispatch,
		handleSubmit: history => e => {
			e.preventDefault()
			dispatch(setFave(history))
		},
		setRank: e =>
			dispatch({ type: SET_FAVE_RANK, payload: Number(e.target.value) })
	}
}

export default connector(Edit)
