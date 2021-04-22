import React from 'react'
import styled from 'styled-components'

const A = styled.div`
  flex: 10;
  .search-bar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .search-input-box {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 1rem;
      min-height: 100%;
      cursor: pointer;
      .search-input {
        height: 2.5rem;
        background-color: #1E88E5;
        border: none;
        outline: none;
        transition: .2s ease-in-out;
        border-radius: .3rem;
        color: #ffffff;
        text-align: center;
        font-size: .9rem;
        &::placeholder {
          color: #ffffff;
          text-align: center;
        }
        opacity: 0;
        width: 0;
      }
      .search-icon {
        width: 2rem;
        height: 2rem;
        transition: .2s ease-in-out;
      }
      &:hover {
        .search-input {
          opacity: 1;
          width: 30rem;
        }
        .search-icon {
          width: 0;
          opacity: 0;
        }
      }
    }
  }
`

export default function SearchBar () {
  return (
    <A className="search-bar-box">
      <div className="search-bar">
        <div className="search-input-box">
          <input type="text" className="search-input" placeholder="Type to search..." />
          <img src="/src/assets/search.png" alt="" className="search-icon"/>
        </div>
      </div>
    </A>
  )
}
