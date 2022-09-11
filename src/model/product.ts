
export class Product implements ProductInterface {
    productName!: String

    productDecs!: String

    productImg!: any

    constructor(json:any) {
    const keys = Object.keys(json)
    for(let index = 0; index < keys.length; index += 1) {
      const key = keys[index]
      // @ts-ignore
      this[key] = json[key]
    }
  }
  static fromJson = (json: Record<string,any>) => {
    return new Product(json)
  }
}

export const fake_data_product: Product[] = [
    new Product ({
        productName: "San pham 1",
        productDecs: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        productImg: require('../imgs/FastFood.jpg')
    }),
    new Product ({
        productName: "San pham 2",
        productDecs: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        productImg: require('../imgs/Love What You Do_ Lucy Cooper of My Kind Lifestyle _ 91 Magazine.jpg')
    }),
    new Product ({
        productName: "San pham 3",
        productDecs: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        productImg: require('../imgs/Which Apple Products Are Really Worth Your Money_ (Updated).jpg')
    }),
    new Product ({
        productName: "San pham 4",
        productDecs: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        productImg: require('../imgs/Marc Tran .jpg')
    }),
    new Product ({
        productName: "San pham 5",
        productDecs: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        productImg: require('../imgs/37 Beauty Products Under $10 That Feel Like They Should Cost More.jpg')
    }),
    new Product ({
        productName: "San pham 6",
        productDecs: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        productImg: require('../imgs/The Story of the 1960s Mass-Produced Modular Design That Actually Went into Production.jpg')
    }),
]

export {}