'use client'

import { useState, useEffect } from 'react'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

interface FetchOptions extends RequestInit {
  skip?: boolean
}

export function useFetch<T>(
  url: string,
  options?: FetchOptions
): FetchState<T> & { refetch: () => void } {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: !options?.skip,
    error: null,
  })

  const fetchData = async () => {
    if (options?.skip) return

    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const response = await fetch(url, options)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const json = await response.json()
      setState({ data: json, loading: false, error: null })
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error : new Error('An error occurred'),
      })
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return {
    ...state,
    refetch: fetchData,
  }
}
