import { useEffect, useState } from "react"

const useApi = (prop) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(prop)
        .then(response => response.json())
        .then(response => setData(response))
    }, [prop])

    return data;
}

export default useApi