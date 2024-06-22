import useApi from "./UseApi"

const Usuarios = () => {
    const users = useApi("https://jsonplaceholder.typicode.com/users");
    console.log(users);

    return (
        <div className="container">
            <div className="row">
                {users.map(item => (
                    <div key={item.id} className="col-md-3 mb-3">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{item.username}</h6>
                            <p className="card-text">{item.company.name}</p>
                            <a href="#" className="card-link">{item.website}</a>
                            <a href="#" className="card-link">{item.email}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Usuarios