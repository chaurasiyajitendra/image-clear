import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="loader mb-4"></div>
      <span className="text-lg font-semibold text-gray-700">Loading...</span>
    </div>
  )
}

export default Loading
