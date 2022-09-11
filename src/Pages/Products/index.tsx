import React, { useRef, useState, useEffect } from 'react'
import { Row, Col, Card } from 'antd'
import { Product } from '../../model/product'
import { ProductApi } from '../../apis/product'

const { Meta } = Card;

type ProductPageProps = {

}

const ProductPage: React.FC<ProductPageProps> = () => {
    const [data, setData] = useState<Product[]>([])
    const [error, setError] = useState<boolean | string>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        ProductApi.list().then(r => {
            setData(r.data)
            setError(false)
            setLoading(false)
        })
    }, [])

    return (
        <>
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                {/* @ts-ignore */}
                    <Row gutter={[16, 16]} dataSource={data} loading={loading}>
                        {data.map((item, index) => {
                            return (
                                <Col span={8} key={index}>
                                    <Card
                                        hoverable
                                        style={{ width: 240, margin: "auto" }}
                                        cover={<img style={{ maxWidth: 240, maxHeight: 240 }} alt="" src={item.productImg} />}
                                    >
                                        <Meta title={item.productName} description={item.productDecs} />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </>
            )}


        </>
    )
}

export default ProductPage