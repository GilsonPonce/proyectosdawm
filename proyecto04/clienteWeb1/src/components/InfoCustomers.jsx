import { useFetch } from "../hooks/useFetch"

export const InfoCustomers = ({ id }) => {
    const { isLoading, data } = useFetch('http://localhost:3000/customers/' + id)
    return (
        <>
            {

                !isLoading && (<div className="card text-bg-info my-4" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{data[0].customerName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{"Contacto: " + data[0].contactFirstName + " " + data[0].contactLastName}</h6>
                        <p className="card-subtitle">{"Telefono: " + data[0].phone}</p>
                        <p className="card-subtitle">{"Direccion: " + data[0].addressLine1}</p>
                        <p className="card-subtitle">{data[0].country + " | " + data[0].city + " | " + data[0].postalCode}</p>
                    </div>
                </div>)
            }
        </>
    )
}
