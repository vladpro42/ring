import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from "./redux/store.ts"
import { Provider } from 'react-redux'

import { fetchRings } from './redux/rings/ringsReducer.ts'

store.dispatch(fetchRings)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
