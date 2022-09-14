import React, { useImperativeHandle, useRef, useState } from 'react'
import { Button, Form, FormInstance, Input, Modal } from 'antd'
import { defaultFormItemLayout } from '../../../Themes/styles'
import { generateId, User } from '../../../model/user'
import { UserApi } from '../../../apis/user'


type ModalFormProps = {
    onFinished: () => void
}

export type ModalFormMethod = {
    setVisible: (visible: boolean) => void
    setData: (data?: User) => void

    getVisible: () => boolean
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
            },
            setData: value => { },
            getVisible: () => visible,
        }
    })
    //@ts-ignore
    const onSubmit = value => {
        const param = {
            id: generateId(),
            firstName: value.first_name,
            lastName: value.last_name,
            gender: 1 as 0 | 1,
            birthday: '25/05/2001'
        }

        console.log("PARRRAAAAAAM: ", param)
        setLoading(true)

        UserApi.create({ input: param }).then(r => {
            setLoading(false)
            setVisible(false)
        })

        console.log("USSSEEER" ,UserApi)

        onFinished()
    }

    const onOk = () => { }

    return (
        <Modal
            visible={visible}
            onCancel={() => {
                setVisible(false)
            }}
            confirmLoading={loading}
            onOk={onOk}
        >
            <Form onFinish={onSubmit} ref={form}>
                <Form.Item name="first_name" {...defaultFormItemLayout} label="First Name">
                    <Input placeholder='First Name' />
                </Form.Item>
                <Form.Item name="last_name" {...defaultFormItemLayout} label="Last Name">
                    <Input placeholder='Last Name' />
                </Form.Item>

                <Form.Item {...defaultFormItemLayout}>
                    <Button htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
})

export default ModalForm