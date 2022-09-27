import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { CSSProperties } from 'react'
import { Button } from 'library/dist/wrapper/react/Button.lite'
import { LazyLoader } from 'library/dist/wrapper/react/LazyLoader.lite'

export const App = () => {
  const navigate = useNavigate()
  const Green = 'green-main' as any
  const Green2 = 'green2-main' as any
  const Red = 'red-main' as any
  return (
    <div>
      <h1 style={{ color: '#61DBFB' }}>Blue</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
        <Button text={'None'} onClick={() => navigate('/')} />
        <LazyLoader name={'green'} mode={'hover'}>
          <Button text={'Green 1'} onClick={() => navigate('/green')} />
        </LazyLoader>
        <LazyLoader name={'green2'} mode={'hover'}>
          <Button text={'Green 2'} onClick={() => navigate('/green2')} />
        </LazyLoader>
        <LazyLoader name={'red'} mode={'hover'}>
          <Button text={'Red'} onClick={() => navigate('/red')} />
        </LazyLoader>
      </div>
      <div
        style={{ margin: '1rem', padding: '1rem', border: '1px solid black' }}
      >
        <Routes>
          <Route path="/" element={<div>None</div>} />
          <Route
            path="green"
            element={
              <LazyLoader name={'green'}>
                <Green />
              </LazyLoader>
            }
          />
          <Route
            path="green2"
            element={
              <LazyLoader name={'green2'}>
                <Green2 />
              </LazyLoader>
            }
          />
          <Route
            path="red"
            element={
              <LazyLoader name={'red'}>
                <Red />
              </LazyLoader>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

const buttonStyle: CSSProperties = {
  width: '100px',
}
