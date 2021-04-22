import React from  'react'
import styled from 'styled-components'

const A = styled.div`
	grid-area: app-bar;
`

export default function AppBar () {
	return (
		<A className="app-bar"></A>
	)
}
