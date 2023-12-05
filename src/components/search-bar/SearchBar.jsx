import React from 'react'
import {IconButton, Paper} from "@mui/material"
import { colors } from '../../constants/colors'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper component={"form"} sx={{border : `1px solid ${colors.secondary}` , pl:2 , mr:12 , boxShadow : "none"}}>
      <input type="text" placeholder='Search...' className='search-bar' />
      <IconButton ><Search /></IconButton>
    </Paper>
  )
}

export default SearchBar