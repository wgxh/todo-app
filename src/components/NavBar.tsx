import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import TitleBar from './TitleBar'
import ToolsBar from './ToolsBar'

const A = styled.div`
	grid-area: nav-bar;
	display: flex;
	background-color: #3498db;
`

export default function Navbar () {
	return (
		<A className="nav-bar">
			<TitleBar />
			<SearchBar />
			<ToolsBar />
		</A>
	)
}
