import React from 'react'
import AboutUser from '../../organisms/AboutUser/AboutUser'
import Filters from '../../organisms/Filters/Filters'
import PopularTracks from '../../organisms/PopularTracks/PopularTracks'
import PopularAlbums from '../../organisms/PopularAlbums/PopularAlbums'

function User() {
  return (
    <div>
        <AboutUser></AboutUser>
        <Filters></Filters>
        <PopularTracks></PopularTracks>
        <PopularAlbums></PopularAlbums>
    </div>
  )
}

export default User