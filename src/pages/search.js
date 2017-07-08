import React from 'react'
import Header from '../containers/header'
import { Link } from 'react-router-dom'
import { TextField, List, ImageListItem, Button } from 'jrs-react-components'
import { connect } from 'react-redux'
import LinkButton from '../components/link-button'
import {
	SEARCH_TEXT,
	SEARCH_RESULTS,
	CLEAR_SEARCHED_ALBUMS,
	SET_FAVE
} from '../constants'
import { map } from 'ramda'

const Search = props => {
	const li = albums => {
		return (
			<ImageListItem
				key={albums.id}
				id={albums.id}
				title={albums.name}
				image={albums.poster}
				link={
					<Button onClick={props.showDetails(props.history, albums)}>
						Select
					</Button>
				}
			/>
		)
	}

	return (
		<div>
			<Header />
			<main>
				<div className="mw6 center mt2 tc">
					<form onSubmit={props.handleSubmit}>

						<TextField
							value={props.searchAlbum}
							onChange={props.handleChange}
							optional={false}
							help="Enter Album Name"
						/>
						<div className="cf">
							<div className="fc">
								<Button>Search Albums</Button>
							</div>
						</div>
					</form>
					{map(li, props.searchResults)}
				</div>
			</main>
		</div>
	)
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapStateToProps(state) {
	return {
		searchAlbum: state.search.searchAlbum,
		searchResults: state.search.searchResults
	}
}

function searchAlbums(dispatch, getState) {
	const searchAlbum = getState().search.searchAlbum
	const url = process.env.REACT_APP_MUSIC

	fetch(url + '?q=' + searchAlbum, {
		headers: {
			Authorization:
				'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqcnMuY2FtcCIsImlhdCI6MTQ5ODg2OTM0MiwiZXhwIjoxNTkzNTYzNzQyLCJhdWQiOiJtdXNpYy1zZWFyY2guanJzLmNhbXAiLCJzdWIiOiIxMjM0In0.XtmiG7OD3pGdS748IC4CRJp_qUa7A_JvtNu2G_GcIP8'
		}
	})
		.then(res => res.json())
		.then(items => {
			if (items.response === 'false') {
				alert('No results')
				return
			}
			dispatch({ type: SEARCH_RESULTS, payload: items })
		})
}

function mapActionsToProps(dispatch) {
	return {
		showDetails: (history, album) => e => {
			dispatch({ type: SET_FAVE, payload: album })
			dispatch({ type: CLEAR_SEARCHED_ALBUMS })

			history.push('/new')
		},
		handleSubmit: e => {
			e.preventDefault()
			dispatch(searchAlbums)
		},
		handleChange: e => dispatch({ type: SEARCH_TEXT, payload: e.target.value })
	}
}

export default connector(Search)
