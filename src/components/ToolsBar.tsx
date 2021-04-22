import React from 'react'
import styled from 'styled-components'

const A = styled.div`
  flex: 3;
  .tools-bar {
    width: 100%;
    height: 100%;
    display: flex;
    .item {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default function ToolsBar () {
  return (
    <A className="tools-bar-box">
      <div className="tools-bar">
        <div className="github-home-box item">
          <a href="https://github.com/wgxh/todo-app" className="link">
            <img src="/src/assets/home.png" alt="Home" className="github-image" />
          </a>
        </div>
      </div>
    </A>
  )
}

