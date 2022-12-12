import React from 'react'

const Container = ({ children, className, style={} }) => {
  return (
    <div style={style} className={`w-full max-w-[768px] px-4 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container