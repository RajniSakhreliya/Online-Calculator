import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coin: 0,
    totlQuestions: 1,
    login: {
        name: "",
        email: "",
        photo: '',
        date: ''
    }
}

const Slice = createSlice({
    name: 'Data',
    initialState,
    reducers: {
        coinGet: (state, momet) => {
            state.coin = momet.payload
        },

        totlQuestions: (state, momet) => {
            state.totlQuestions = momet.payload
        },

        sidebardishple: (state, momet) => {
            state.sidebardishple = momet.payload
        },
    }
})

export const { coinGet, totlQuestions,  sidebardishple } = Slice.actions;
// export const selectUserName = (state) => state.login.name;
// export const selectEmail = (state) => state.login.email;
export default Slice.reducer;