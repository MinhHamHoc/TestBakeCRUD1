import React, { useRef, useState, useEffect } from 'react'
import { Table, TableProps, Button } from 'antd'
import { User } from '../../model/user'
import { UserApi } from '../../apis/user'
import { userUserList } from '../../Hooks/user'
import modal from 'antd/lib/modal'
import ModalForm, { ModalFormMethod } from './Components/ModalForm'

type UserPageProps = {}

const UserPage: React.FC<UserPageProps> = () => {
  const { data, loading, error, page, fetch } = userUserList()

  const columns = useRef<TableProps<User>['columns']>([
    {
      title: 'id',
      key: 'id',
      dataIndex: 'id'
    },
    {
      title: 'firstName',
      key: 'firstName',
      dataIndex: 'firstName'
    },
    {
      title: 'lastName',
      key: 'lastName',
      dataIndex: 'lastName'
    },
    {
      title: 'birthday',
      key: 'birthday',
      dataIndex: 'birthday'
    },
    {
      title: 'gender',
      key: 'gender',
      dataIndex: 'gender',
      render: value => {
        return <span>{value === 1 ? 'Nam' : 'Nu'}</span>
      }
    },
    {
      title: 'Created_at',
      key: 'Created_at',
      dataIndex: 'created_at'

    }
  ])

  const modal = useRef<ModalFormMethod>(null)

  const onCreate = () => {
    modal.current?.setVisible(true)
  }

  const onFinished = () => {
    fetch()
  }

  return (
    <>
      <div className="view-create">
        <Button onClick={onCreate}>Create</Button>
      </div>
      <Table
        rowKey={item => item.id}
        loading={loading}
        dataSource={data}
        columns={columns.current}
      />
      <ModalForm ref={modal} onFinished={onFinished} />
    </>

  )
}

export default UserPage
