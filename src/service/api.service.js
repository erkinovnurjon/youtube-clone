import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
   maxResults : 50
   
  },
  headers: {
    'X-RapidAPI-Key': 'cb3e3d202dmsh5a6b7fd3533c194p116cebjsnc84cc3ed030f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};





export const ApiService = {
      async fetching (url){
            const response = await axios.get(`${BASE_URL}/${url}`, options)
            return response.data
      }
}