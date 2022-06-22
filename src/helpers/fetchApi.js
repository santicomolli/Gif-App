//https://api.giphy.com/v1/gifs/trending

const apiKey = "jb1r951auZZ3UMjbYgtRZfY6jWeEeYvE"
const limite = 15

//funcion para obtener los gif de pag inicio..Los trendings
export const getGifTrending = async () => {

    const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limite}`)

    const {data} = await resp.json()
    
    return data
}

//funcion que traiga un gif por su id



//funcion que me devuelva el resultado de una busqueda