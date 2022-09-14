import { User } from './../model/user';
import { UserApi } from '../apis/user';
import { useEffect, useState } from 'react'


export const userUserList = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<User[]>([])
    const [error, setError] = useState<boolean | string>(false)
    const [page, setPage] = useState<Page>({
        current: 1,
        max: 10
    })

    const fetch = () => {
        UserApi.list().then(r => {
            setData(r.data)
            if (r.page) setPage(r.page)
            setError(false)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetch()
    },[])

    return {
        loading,
        setLoading,
        error,
        setError,
        data,
        setData,
        page,
        setPage,
        fetch
    }
}

