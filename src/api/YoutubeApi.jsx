import axios from "axios"

const baseURL = "http://www.googleapis.com/youtube/v3"


export const youtubeFetchData =async ({pageParam="", queryKey})=>{
  const [, debouncing] = queryKey

  const searchData = await axios.get(`${baseURL}/search`,{
    params:{
      key:import.meta.env.VITE_YT_API_KEY,
      part:"snippet",
      q:debouncing,
      type:"video",
      regionCode:"IN",
      maxResults:2,
      pageToken:pageParam
    }
  })
  return searchData.data

//  const alldata  = searchData.data 
}








