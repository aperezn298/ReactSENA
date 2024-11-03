import React from 'react'
import './App.css'
import { TwitterFollowCardFinal } from './TFCardFinal.jsx'

const users = [
  {
    id:1,
    userName: 'senaComunica',
    name: 'SENA Comunica',
    isFollowing: true,
  },
  {
    id:2,
    userName: 'majash29',
    name: 'Alvaro Pérez Niño',
    isFollowing: false
  },
  {
    id:3,
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    id:4,
    userName: 'mouredev',
    name: 'Brais Moure',
    isFollowing: false
  }
]

export function AppFinal () {
  return (
    <section className='App'>
      {
        users.map(({id, userName, name, isFollowing})=>
          <TwitterFollowCardFinal
            key={id}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing} />)
      }
    </section>
  )
}