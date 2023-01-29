import { useEffect, useState } from 'react'

export const TablaProductos = ({ keys, data }) => {

    const [product, setProduct] = useState([])

    const detalles = () => {
        let productos = [];
        let nombre = [];
        keys.map(key => {
            let nom = data[key].productName;
            if (!nombre.includes(nom)) {
                nombre.push(nom)
                productos.push(data[key])
            }
        })
        setProduct(productos)
    }

    useEffect(()=>{
        detalles();
    },[data])

    return (
        <table className="table table-striped table-light">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombre</th>
                    {/* <th scope="col">Descripcion</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    product.map((ele, index) => <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{ele.productLine}</td>
                        <td>{ele.productName}</td>
                        {/* <td>{ele.productDescription}</td> */}
                    </tr>)
                }
            </tbody>
        </table>
    )
}
