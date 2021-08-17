import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mycounterReducer from '../features/counter/mycounterSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    mycounter:mycounterReducer,
  },
})