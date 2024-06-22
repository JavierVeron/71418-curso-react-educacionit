const BaseLayout = (propiedad) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className={propiedad.className} role="alert">
                        {propiedad.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseLayout