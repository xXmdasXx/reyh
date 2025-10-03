import React from 'react'
import SearchIcon from '../../global/atoms/SearchIcon/SearchIcon'
import ShoppingCartIcon from '../../global/atoms/ShoppingCartIcon/ShoppingCartIcon'

function IconsMolecule(className,...props) {
  return (
    <div {...className} {...props}>
        <div className='sm:flex hidden'>
          <SearchIcon className='!mx-2'></SearchIcon>
        </div>
        
        <div>
          <ShoppingCartIcon></ShoppingCartIcon>
        </div>
    </div>
  )
}

export default IconsMolecule