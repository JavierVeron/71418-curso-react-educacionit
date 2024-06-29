import { useEffect, useState } from "react"
import Loading from "./Loading";
import Posts from "./Posts";

const ApiFetch = () => {
    const [postsApi, setPostsApi] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    // Consumir una API con Fetch, ejecutando una función asíncrona
    /* useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPostsApi(data);
        })();
    }, []); */

    // Consumir una API con Fetch, utilizando los métodos Then y Catch
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setPostsApi(data)
            setLoaded(true);
        })
    }, []);

    return (
        loaded ? <Posts posts={postsApi} /> : <Loading />
    )
}

export default ApiFetch