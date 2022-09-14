/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import React, { useRef, useImperativeHandle, useState } from 'react'
import { Modal, Form, Input, FormInstance, Upload, Button } from 'antd';
import { defaultFormItemLayout } from '../../../Themes/styles'
import { PlusOutlined } from '@ant-design/icons';
import { ProductApi } from '../../../apis/product'

type ModalFormProps = {
    onFinished: () => void
}

export type ModalFormMethod = {
    setVisible: (visible: boolean) => void
}

const ModalForm = React.forwardRef<ModalFormMethod, ModalFormProps>(({ onFinished }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const form = useRef<FormInstance>(null)

    useImperativeHandle(ref, () => {
        return {
            setVisible: value => {
                setVisible(value)
                if (value) {
                    form.current?.resetFields()
                }
            }
        }
    })
    //@ts-ignore
    const onSubmit = value => {
        const param = {
            productName: value.Title,
            productDecs: value.Description,
            productImg: value.Img
        }
        setLoading(true)
        ProductApi.create({ input: param }).then(r => {
            setLoading(false)
            setVisible(false)
        })
        onFinished()
    }


    // const onOk = () => {}

    return (
        <Modal
            visible={visible}
            onCancel={() => {
                setVisible(false)
            }}
            confirmLoading={loading}

        >
            <Form onFinish={onSubmit} ref={form}>
                <Form.Item label="Upload" name="Img">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item name="Title" {...defaultFormItemLayout} label="Title">
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item name="Description" {...defaultFormItemLayout} label="Description">
                    <Input placeholder="Description" />
                </Form.Item>
                <Form.Item {...defaultFormItemLayout}>
                    <Button htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
})

export default ModalForm