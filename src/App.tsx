import React from 'react'
import styled from 'styled-components'
import Todo from './components/Todo'

const A = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

export default function App () {
	return (
		<A className="app-box">
			<Todo />
		</A>
	)
}
