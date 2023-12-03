import {  Stack,  } from "@mui/material"
import logo from "../../assets/images/logo-desk.jpg"
import { Link } from "react-router-dom"
import {colors} from "../../constants/colors"
import { SearchBar } from "../"


const Navbar = () => {
  return (
    

      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} p={'3'}
      sx={{position : 'sticky' , height:'10vh' , top : 0 , zIndex : 999 , background : colors.primary}}>
      <Link to={'/'} >
      <img src={logo} alt="logo" height={60}  />
      </Link>
      <SearchBar />
    </Stack>
    
  )
}

export default Navbar