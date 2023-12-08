import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {ApiServise} from "../../service/api.service"

const Channel = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = uVeState([])

  useEffect(() => {
    const getData = async () => {
      const data = ApiServise.fetching(`channel?part=snippet&id=${id}`)
    }
  } ,[id])
  
  return (
    <Link to={'/'}  >
    <Button variant="outlined" >main
      </Button>
      </Link>
  )
}

export default Channel