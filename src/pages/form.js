import React from 'react'
import Header from '../containers/header'
import { Link } from 'react-router-dom'
import { TextField } from 'jrs-react-components'
import BigButton from '../components/big-button'
import { connect } from 'react-redux'
import {
	SET_FAVE,
	SET_FAVE_TITLE,
	SET_FAVE_POSTER,
	SET_FAVE_RANK,
	APPEND_FAVE,
	CLEAR_FAVE
} from '../constants'

const Form = props =>
	<div>
		<Header />
		<main>
			<div className="mw6 pv2 ph3 center mt2">
				<h2>Add New Favorite</h2>
				<form onSubmit={props.handleSubmit(props.history)}>
					<TextField
						value={props.favorite.name}
						onChange={props.setTitle}
						label="Name"
						optional={false}
						help="Enter Album Name"
					/>

					<TextField
						value={props.favorite.poster}
						onChange={props.setPoster}
						label="Poster"
						optional={false}
						help="Enter Album Poster Link"
					/>
					<TextField
						value={props.favorite.rank}
						onChange={props.setRank}
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

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
	return {
		favorite: state.favorite
	}
}

const setFave = history => (dispatch, getState) => {
	const favorite = getState().favorite

	dispatch({ type: APPEND_FAVE, payload: favorite })
	dispatch({ type: CLEAR_FAVE })
	history.push('/')
}

function mapActionsToProps(dispatch) {
	return {
		handleSubmit: history => e => {
			e.preventDefault()
			dispatch(setFave(history))
		},
		setTitle: e => dispatch({ type: SET_FAVE_TITLE, payload: e.target.value }),
		setPoster: e =>
			dispatch({ type: SET_FAVE_POSTER, payload: e.target.value }),
		setRank: e =>
			dispatch({ type: SET_FAVE_RANK, payload: Number(e.target.value) })
	}
}

export default connector(Form)
