import React from 'react'
import Header from '../containers/header'
import {
	Button,
	List,
	ImageListItem,
	SimpleListItem
} from 'jrs-react-components'
import LinkButton from '../components/link-button'
import { connect } from 'react-redux'
import { map, sortBy, compose, prop } from 'ramda'

const Home = function(props) {
	function li(albums) {
		console.log('albums: ', albums)
		return (
			<ImageListItem
				rank={albums.rank}
				key={albums.id}
				id={albums.id}
				title={albums.name}
				image={albums.poster}
				link={<LinkButton to={`/show/${albums.id}`}>Details</LinkButton>}
			/>
		)
	}

	function sortedAlbums(albumRank) {
		return sortBy(a => Number(prop('rank', a), albumRank))
	}

	return (
		<div>
			<Header />
			<main>
				<div className="mw6 center mt2 tc">
					<List>
						<SimpleListItem
							title="Add New Favorite"
							link={<LinkButton to="/new">Add</LinkButton>}
						/>
						{compose(map(li), sortedAlbums())(props.favorites)}
					</List>
				</div>
			</main>
		</div>
	)
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
	console.log('state', state)
	return {
		favorites: state.favorites
	}
}

export default connector(Home)

function openDocs(e) {
	if (/localhost/.test(window.location.href)) {
		window.location = 'http://localhost:5000'
	} else {
		window.location =
			'https://github.com/jrs-innovation-center/jrscode-react-starter#jrs-react-starter-kit'
	}
}
