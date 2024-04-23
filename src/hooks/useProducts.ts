

import { Products } from '@interfaces/app'
import { API } from '@utils/const'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useProducts() {

    const [products, setproducts] = useState<Products[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getProducts = async () => {
       try {
        setLoading(true)
        const Products = await Axios.get<Products[]>(API.products)
        console.log(Products.data)
        setproducts(Products.data.map((product) => ({ ...product, title: fixText(product.title) })))
        setLoading(false)
       } catch (error) {
        setproducts([])
       }
    }

    const fixText = (text: string) => {
        return text.length > 18 ? text.substring(0, 18).toLowerCase() : text
    }

    useEffect(() => {
        getProducts()
    }, [])

  return {
    products,
    loading
  }
}
