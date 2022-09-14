/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef } from 'react'
import { Row, Col, Card, Button } from 'antd'
import { Product } from '../../model/product'
import { ProductApi } from '../../apis/product'
import { useProductList } from '../../Hooks/product';
import ModalForm, { ModalFormMethod } from './Components/ModalForm'


const { Meta } = Card;

type ProductPageProps = {}

const ProductPage: React.FC<ProductPageProps> = () => {
     const { data, loading, error, fetch } = useProductList()

    const modal = useRef<ModalFormMethod>(null)

    const onCreate = () => {
        modal.current?.setVisible(true)
    }

    const onFinished = () => {
        fetch()
    }

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
                    <Button onClick={onCreate}>Create New Product</Button>
                    <ModalForm ref={modal} onFinished={onFinished} />
                </>
            )}


        </>
    )
}

export default ProductPage