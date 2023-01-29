import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoCustomers } from '../components/InfoCustomers';
import { TablaOrdenesShipped } from '../components/TablaOrdenesShipped';
import { TablaProductos } from '../components/TablaProductos';
import { getTotal } from '../helpers/getTotal';
import { useFetch } from '../hooks/useFetch';

export const CustomerOrdenes = () => {
    let { number } = useParams();
    const [keys, setKeys] = useState([])
    const [total, setTotal] = useState(0);
    const { loading, data } = useFetch(`https://project4-38cea-default-rtdb.firebaseio.com/ordenes.json?orderBy="customerNumber"&equalTo=${number}`);

    useEffect(() => {
        data != undefined && setKeys(Object.keys(data))
        getTotal(data).then(resp => {
            setTotal(resp)
        })
    }, [data])

    return (
        <div className='text-white container mt-3 pt-5'>
           <div className="row">
            <div className="col-12">
                <InfoCustomers id={number}/>
            </div>
            <div className="col">
                <p className="h4 text-black">Ordenes Enviadas</p>
                <TablaOrdenesShipped
                    data={data}
                    keys={keys}
                    total={total}
                />
            </div>
            <div className="col">
                <p className="h4 text-black">Productos Solicitados</p>
                <TablaProductos
                    data={data}
                    keys={keys}
                />
            </div>
           </div>
        </div>
    )
}
