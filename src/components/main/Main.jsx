import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <Link to={'/channel'} >
    <Button variant="contained" >
      channel</Button></Link>
  )
}

export default Main