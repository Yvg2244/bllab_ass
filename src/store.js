
import { configureStore } from "@reduxjs/toolkit"
import { updateAdressReducer } from "./reducer"

export const store=configureStore({
    reducer:{
       updateReducer:updateAdressReducer,
       updateDataReducer:updateAdressReducer
    }
})
export default store