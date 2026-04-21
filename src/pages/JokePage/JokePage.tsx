import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { axiosApi } from "../../axiosApi";


export const JokePage = () => {
    const {category} = useParams();
    const [joke, setJoke] = useState<string>('');

    useEffect(() => {
        const getJoke = async() => {
            try{
                const response = await axiosApi(`/rendom?category=${category}`)
                const jokeDate = response.data;
                setJoke(jokeDate.value);
            }catch(e) {
                console.log(e)
            }
        }
        if (category) {
            getJoke()
        }
    },[category]);

    return(
        <div>
          Joke category = {category}
          <p>{joke}</p>
        </div>
    )
}