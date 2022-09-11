import { fake_data_product, Product } from './../model/product';


const list: () => Promise<BaseResponse<Product[]>> = () => {
    return new Promise<BaseResponse<Product[]>>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: fake_data_product,
            })
        },1000)
    })
}

export const ProductApi = {
    list,
}