import { useRouter } from "next/router";


//desde el search input coloca el estado que se busca y viceversa

//trabajr en esto

const Search = ()=>{
    const router = useRouter()
    const {country,startDate} = router.query
    return(
        <p>{country}</p>
    )
}

export default Search;