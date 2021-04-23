import React from 'react'

import './index.scss'

import Banner from 'components/Banner'

import banner from 'assets/img/banner.svg'
import tick from 'assets/img/tick.svg'
import Notes from 'pages/Notes'

const renderLandingPage = () => {
  return (
    <>
      <Banner
        background={banner}
        title={"MadeNote"}
        subtitle={"Organización, tranquilidad y simpleza"}
        icon={tick}
      />

      <article>
        <h2>Posibilidad de crear tus notas de una manera rapida</h2>
        <p>Es simple, solo debes registrarte, y ya las tendras ahi</p>
        <p>Tienes algunas mas importantes que otras? No te procupes, pueden distingirlas con un click!</p>
      </article>
    </>
  )
}

const HomePage = () => {
  return <>
    {
      localStorage.getItem('token')
        ? <Notes />
        : renderLandingPage()
    }
  </>
}

export default HomePage