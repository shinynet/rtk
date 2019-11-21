import React from 'react'
import ReactDOM from 'react-dom'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import reducer from './app/store'

/**
 * configureStore (compared to the traditional createStore)
 * provides redux-thunk and redux dev tools setup and
 * configured out of the box
 */
const store = configureStore({reducer})

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)



