import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'

const Top = () => {
    const setGlobalState  = useContext(Store)
    
    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data', res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    }, [setGlobalState])
    return (
        <Layout>
            <h2>Top Page</h2>
        </Layout>
    )
}

export default Top
