import React from 'react'
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchIcon({sx = {}, ...props }) {
  return (
    <div>
        <IconButton
        sx={{
            backgroundColor: "transparent",
            color: "text.primary",
            "&:hover": {
            backgroundColor: "rgba(30,144,255,0.1)",
        },
        p: 1.5,
        ...sx,
      }}
      {...props}>
            <SearchOutlinedIcon className='!text-3xl'></SearchOutlinedIcon>
        </IconButton>
    </div>
  )
}

export default SearchIcon