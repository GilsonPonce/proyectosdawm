import React from 'react'

export const TablaOrdenesShipped = ({total,keys,data}) => {
    return (
        <table className="table table-striped table-light">
            <thead>
                <tr>
                    <th colSpan={4} scope="col">Total Monto Comprado</th>
                    <th scope="col">{total}</th>
                </tr>
                <tr>
                    <th scope="col"># Orden</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio C/U</th>
                </tr>
            </thead>
            <tbody>

                {
                    keys.map((key, index) => {
                        if (data[key].status == "Shipped") {
                            return <tr key={index}>
                                <th scope="row">{index + '-' + data[key].orderNumber}</th>
                                <td>{data[key].orderDate}</td>
                                <td>{data[key].productLine}</td>
                                <td>{data[key].quantityOrdered}</td>
                                <td>{data[key].priceEach}</td>
                            </tr>
                        }

                    })
                }
            </tbody>
        </table>
    )
}
