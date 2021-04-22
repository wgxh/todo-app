import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const A = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template: 4rem 1fr / 20rem 1fr;
	grid-template-areas:
		"nav-bar nav-bar"
		"side-bar app-bar";
`

export default function Todo () {
	return (
		<A className="todo-box">
			<NavBar />
		</A>
	)
}
