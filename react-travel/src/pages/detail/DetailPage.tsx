import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import axios from 'axios'


interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { touristRouteId } = useParams<MatchParams>()
  const [ loading, setLoading ] = useState<boolean>()
  const [ product, setProduct ] = useState<any>()
  const [ error, setError ] = useState<string | null>()

  // const testId = 'fb6d4f10-79ed-4aff-a915-4ce29dc9c7e1'

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/fb6d4f10-79ed-4aff-a915-4ce29dc9c7e1`
          // `http://123.56.149.216:8080/api/touristRoutes/${testId}`
        )
        setProduct(data)
        setLoading(false)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [touristRouteId])

  console.log({loading, product, error})

  return <h1>路线ID：{props.match.params.touristRouteId} </h1>
}