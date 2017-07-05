import React from 'react'

const BigButton = function(props) {
	return (
		<button
			className="f3 dim ph4 pv3 dib white bg-black-60"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default BigButton
