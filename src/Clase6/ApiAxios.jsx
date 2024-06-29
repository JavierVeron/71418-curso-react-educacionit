import { useEffect, useState } from "react"
import Loading from "./Loading";
import Posts from "./Posts";
import Api from "./Api";

const ApiAxios = () => {
    const [postsApi, setPostsApi] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    // Consumir una API con Fetch, ejecutando una función asíncrona
    useEffect(() => {
        (async () => {
            const response = await Api.get("/posts");
            console.log(response);
            setPostsApi(response.data);
            setLoaded(true);
        })();
    }, []);

    return (
        loaded ? <Posts posts={postsApi} /> : <Loading />
    )
}

export default ApiAxios