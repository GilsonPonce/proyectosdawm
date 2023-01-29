import { Link } from "react-router-dom"


export const CardCustomers = ({customer}) => {
    return (
        <div className="card border-primary" style={{width: "20rem"}}>
            <div className="card-header bg-primary text-white">{customer.customerName}</div>
            <div className="card-body">
                <h5 className="card-subtitle mb-2">{customer.contactFirstName+' '+customer.contactLastName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{'Telefono: '+customer.phone}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{'Direccion: '+customer.addressLine1}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{'Limite de Credito: '+customer.creditLimit}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{'Venta Empleado: '+customer.salesRepEmployeeNumber}</h6>
                <Link to={`ordenes/${customer.customerNumber}`} className="btn btn-sm mt-3 btn-info">Ver Ordenes</Link>
            </div>
            <div className="card-footer border-light">{customer.country+' | '+customer.city + ' | '+customer.postalCode}</div>
        </div>
    )
}
