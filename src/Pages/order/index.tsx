import React, { useState, useEffect } from 'react'
import OrderItem from './orderItem';
import { Order } from '../../model/order'
import { OrderApi } from '../../apis/order'


type OrderPageProps = {

}

const OrderPage: React.FC<OrderPageProps> = () => {
    const [data, setData] = useState<Order[]>([])

    useEffect(() => {
        OrderApi.list().then(r => {
            setData(r.data)
        })
    }, [])



    return (
        <>
            <h1 className='text-center mt-3'>All Items</h1>
            <section className='py-4 container' >
                <div className='row justify-content-center'>
                    {data.map((item, index) => {
                        return (
                            <OrderItem
                                img={item.orderImg}
                                title={item.orderTitle}
                                desc={item.orderDesc}
                                price={item.orderPrice}
                                items={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default OrderPage