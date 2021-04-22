import React from 'react'

import './index.scss'

import banner from 'assets/img/banner.svg'
import tick from 'assets/img/tick.svg'

const HomePage = () => {
  return (
    <>
      <section className="banner">
        <img className="banner__bg" src={banner} alt="banner de las notas" />
        <header className="banner__header">
          <h2 className="banner__title">MadeNote</h2>
          <h3 className="banner__subtitle">Organización, tranquilidad y simpleza</h3>
          <img className="banner__icon" src={tick} alt="tick de notas" />
        </header>
      </section>
    </>
  )
}

export default HomePage