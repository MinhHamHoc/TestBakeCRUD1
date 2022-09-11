import React, { useRef, useState, useEffect } from 'react'
import { Table, TableProps, Card } from 'antd'
import { User } from '../../model/user'
import { UserApi } from '../../apis/user'


type UserPageProps = {

}

const UserPage: React.FC<UserPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<User[]>([])
  const [error, setError] = useState<boolean | string>(false)
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 10
  })

  useEffect(() => {
    UserApi.list().then(r => {
      setData(r.data)
      if (r.page) (setPage(r.page))
      setError(false)
      setLoading(false)
    })

    // setTimeout(() => {
    //   setData(fake_data)
    //   setError(false)
    //   setPage({
    //     current: 1,
    //     max: 10,
    //   })
    //   setLoading(false)
    // }, 1000)
  }, [])

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

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
        <Table loading={loading} dataSource={data} columns={columns.current} />
        </>
      )}
    </>

  )
}

export default UserPage
