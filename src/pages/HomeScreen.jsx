import React, {useEffect, useState} from "react";
import {getGifTrending} from "../helpers/fetchApi"
import banner from "../assets/banner1.gif"


const HomeScreen = () => {

  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)

  //cuando se monta o renderiza la pagina
  useEffect(()=>{

    getGifTrending().then((respuesta) => {

      console.log(respuesta)

      let arreglo = []

      respuesta.forEach(element => {
        const {title, id} = element
        const {url} = element.images.original

        arreglo.push({id,title,url})

      });

      setGifs([...arreglo])
      setLoading(false)

    })

  },[])

  return (

    <div className="container">
      <div className="row">
        <div className="col">
          <div className="w-100">
            <img className="img_banner" src={banner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col">
          <h3 className="text-white">
            <i className="fa fa-line-chart" aria-hidden="true"></i> Trending
          </h3>
        </div>
      </div>

      {loading ? (
        <div>
          <h3 className="text-white text-center offset-3">Cargando...</h3>
        </div>
      )
      :
      (
        <div className=" galeria">
          {gifs.map((gif, index)=>(
            <div className="mb-3 animate__animated animate__fadeIn" key ={index}>
              <img className="img_galeria" src={gif.url} alt={gif.title}/>
            </div>
          ))}
        </div>
      )
      }

    </div>
  );
};

export default HomeScreen;
