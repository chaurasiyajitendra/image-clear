import React from 'react'
import Home from './Pages/Home'



const App = () => {
  return (
    <>
    <div className='flex flex-col h-screen justify-center overflow-hidden bg-gray-300 items-center '>
      {/* Header */}
      <header className='text-center text-gray-800 mb-6 ove'>
        <h1 className='text-4xl font-bold'>
          AI Image Enhancer
        </h1>
        <p className='font-medium text-lg tracking-tight'>Upload your Image and let AI enhance to in second !</p>
      </header>
     <Home />
      {/* Footer */}
      <footer className='text-md text-gray-500 mt-6'>
        Powered By ©Jaxon 
      </footer>
    </div>
    </>
  )
}

export default App
