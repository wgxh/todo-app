import React from 'react'
import styled from 'styled-components'

const A = styled.div`
  flex: 3;
  border-radius: 0 .4rem .4rem 0;
  .title-bar {
    transition: .1s ease-in-out;
    color: #FFFFFF;
    height: 100%;
    width: 100%;
    cursor: pointer;
    .title-text-box {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title-bar-icon-box {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: .5rem;
    }
    &:hover {
      background-color: #42A5F5;
    }
  }
`

export default function TitleBar () {
  return (
    <A className="title-bar-box">
      <div className="title-bar">
        <div className="title-text-box">
          <div className="title-bar-icon-box">
            <img src="/src/assets/menu-bar.png" alt="Alt"/>
          </div>
          <h1 className="title-bar-text">TODO APP</h1>
        </div>
      </div>
    </A>
  )
}

