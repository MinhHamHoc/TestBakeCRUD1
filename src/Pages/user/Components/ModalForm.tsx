/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
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
        }
    })
    //@ts-ignore
    const onSubmit = value => {
        const param = {
            id: generateId(),
            firstName: value.first_name,
            lastName: value.last_name,
            gender: value.gender,
            birthday: value.birthday
        }

        console.log("PARRRAAAAAAM: ", param)
        setLoading(true)

        UserApi.create({ input: param }).then(r => {
            setLoading(false)
            setVisible(false)
        })

        onFinished()
    }

    const onOk = () => {
        const param = {
            id: generateId(),
            firstName: form.current?.getFieldValue('first_name') ?? '',
            lastName: form.current?.getFieldValue('last_name') ?? '',
            gender: form.current?.getFieldValue('gender') ?? '',
            birthday: form.current?.getFieldValue('birthday') ?? '',
        }
        setLoading(true)
        UserApi.create({ input: param }).then(r => {
            setLoading(false)
            setVisible(false)
        })

        onFinished()
    }

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
                <Form.Item name="gender" {...defaultFormItemLayout} label="Gender">
                    <Input placeholder='Gender' />
                </Form.Item>
                <Form.Item name="birthday" {...defaultFormItemLayout} label="Birthday">
                    <Input placeholder='Birthday' />
                </Form.Item>
                <Form.Item {...defaultFormItemLayout}>
                    <Button htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
})

export default ModalForm