import { useEffect, useState } from "react"

const ApiXML = () => {
    //let postsApi = [];
    const [postsApi, setPostsApi] = useState([]);
    
    useEffect(() => {
        const api = new XMLHttpRequest();
        api.responseType = "json";
        api.open("GET", "https://jsonplaceholder.typicode.com/posts");
        api.send();
        api.addEventListener("load", () => {
            //postsApi = api.response; // no funciona
            setPostsApi(api.response);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 card">
                    <div className="card-header">Posts JSON PlaceHolder</div>
                    <ul className="list-group list-group-flush">
                        {postsApi.map(item => (
                            <li key={item.id} className="list-group-item">{item.title} ({item.id})</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApiXML