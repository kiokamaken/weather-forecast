import { combineReducers } from '@reduxjs/toolkit'

import weatherReducer from './weather/slice'

const rootReducer = combineReducers({
  weather: weatherReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>

export default rootReducer
