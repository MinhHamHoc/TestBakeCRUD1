import { useEffect, useState } from 'react'
import { ProductApi } from '../apis/product'
import { Product } from '../model/product'



export const useProductList = () => {
    const [data, setData] = useState<Product[]>([])
    const [error, setError] = useState<boolean | string>(false)
    const [loading, setLoading] = useState<boolean>(true)

    const fetch = () => {
        ProductApi.list().then(r => {
            setData(r.data)
            setError(false)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    return {
        loading,
        setLoading,
        error,
        setError,
        data,
        setData,
        fetch,
    }
}