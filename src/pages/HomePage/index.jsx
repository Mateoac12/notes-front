import React from 'react'

import './index.scss'

import Banner from 'components/Banner'

import banner from 'assets/img/banner.svg'
import tick from 'assets/img/tick.svg'

const HomePage = () => {
  return (
    <>
      <Banner
        background={banner}
        title={"MadeNote"}
        subtitle={"Organización, tranquilidad y simpleza"}
        icon={tick}
      />
    </>
  )
}

export default HomePage