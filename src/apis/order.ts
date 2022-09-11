import { fake_data_order, Order } from '../model/order'

const list: () => Promise<BaseResponse<Order[]>> = () => {
    return new Promise<BaseResponse<Order[]>>( (resolve, reject) => {
        setTimeout( () => {
            resolve({
                data: fake_data_order
            })
        }, 1000)
    } )
}

export const OrderApi = {
    list
}