import React from 'react'
import './App.css'
import { TwitterFollowCardComp } from './TFCardDos.jsx'

const users = {
  id:1,
  userName: 'majash29',
  name: 'Alvaro Pérez Niño',
  isFollowing: true
}

export function AppSingle () {
  return (
    <section className='App'>
      <TwitterFollowCardComp
      key={users.id}
      userName={users.userName}
      name={users.name}
      initialIsFollowing={users.isFollowing} />
    </section>
  )
}