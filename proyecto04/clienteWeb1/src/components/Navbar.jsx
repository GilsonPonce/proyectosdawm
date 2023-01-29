import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand ms-3" to={"/"}>Reporte de Ventas</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={""}>Productos Pedidos</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
