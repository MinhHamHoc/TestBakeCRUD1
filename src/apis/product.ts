import { fake_data_product, Product } from './../model/product';


const list: () => Promise<BaseResponse<Product[]>> = () => {
    return new Promise<BaseResponse<Product[]>>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [...fake_data_product],
            })
        },1000)
    })
}

const create: (p: {
    input: Pick<ProductInterface, 'productName' | 'productDecs' | 'productImg'>
}) => Promise<BaseResponse<Product>> = ({ input }) => {
    return new Promise<BaseResponse<Product>>(resolve => {
        setTimeout(() => {
            const newProduct = Product.fromJson(input)
            fake_data_product.push(newProduct)
            resolve({ data: newProduct })
        },1000)
    })
}

export const ProductApi = {
    list,
    create,
}