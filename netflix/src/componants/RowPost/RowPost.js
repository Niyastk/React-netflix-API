import axios from "axios"
import React,{useEffect,useState} from 'react'
import { api_key, base_url, image_url } from "../../Constants/Constants.js"
import './RowPost.css'
import YouTube from "react-youtube"
function RowPost(props) {
  const [originals, setOriginals] = useState([])
  const [urlId,setUrlId] = useState("")
  useEffect(() => {
    axios.get(base_url+props.url).then((response)=>{
      console.log(response.data.result)
    setOriginals(response.data.results)
    })
  }, [])
  const opts = {
    height : '390',
    width : '100%',
    playVars : {
      autoplay : 1
    },
  };
  const handleMovie = (id)=>{
    axios.get( base_url + `/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }
    })
  }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {originals.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small_poster' :'poster'} alt='poster' src={`${image_url+obj.backdrop_path}`} />
                )}                
            </div>
            {  urlId  && <YouTube opts={opts} videoId={urlId.key} /> }
        </div>
    )
}

export default RowPost