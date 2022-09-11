import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'

export class Order implements OrderInterface {
    id!: number

    orderTitle!: String

    orderDesc!: String

    orderImg: any

    orderPrice!: Number

    constructor(json: any) {
        const keys = Object.keys(json)
        for (let index = 0; index < keys.length; index += 1) {
            const key = keys[index]
            // @ts-ignore
            this[key] = json[key]
        }
    }
    static fromJson = (json: Record<string, any>) => {
        return new Order(json)
    }
}

export const fake_data_order: Order[] = [
    new Order ({
        orderTitle: "Product 1",
        orderDesc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
        orderImg: img1,
        orderPrice: 399
    }),
    new Order ({
        orderTitle: "Product 2",
        orderDesc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        orderImg: img2,
        orderPrice: 599
    }),
    new Order ({
        orderTitle: "Product 3",
        orderDesc: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
        orderImg: img3,
        orderPrice: 699
    })
]