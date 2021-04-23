import React from 'react'

import './index.scss'

const Banner = ({ background, title, subtitle, icon }) => {
  return (
    <section className="banner">
      {
        background ? <img className="banner__bg" src={background} alt="banner de las notas" /> : null
      }
      <header className="banner__header">
        <h2 className="banner__title">{title}</h2>
        <h3 className="banner__subtitle">{subtitle}</h3>
        {
          icon ? <img className="banner__icon" src={icon} alt="tick de notas" /> : null
        }
      </header>
    </section>
  )
}

export default Banner
