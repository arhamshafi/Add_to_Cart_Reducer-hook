import React from 'react'


function Reducer_function(state, action) {

    switch (action.type) {

        case "add":

            let newitem = action.payload
            let existing = state.item.find((ele) => ele.id == newitem.id)
            if (existing) {
                let update = state.item.map(item => item.id == newitem.id ? { ...newitem, quantity: item.quantity + 1 } : item)
                return calculation(update)
            }
            else {

                let update = [...state.item, { ...newitem, quantity: 1 }]
                return calculation(update)
            }

        case "del":
            let del = action.payload
            let update = state.item.filter((ele) => ele.id !== del)
            return calculation(update)

        case "change_quan":
            let { item, quan } = action.payload

            if (quan <= 0) {
                let update = state.item.filter(ele => ele.id !== item.id)
                return calculation(update)
            }
            else {
                let update = state.item.map(ele => ele.id === item.id ? { ...ele, quantity: quan } : ele)
                return calculation(update)
            }

        default: return state
    }

    function calculation(item) {
        let total = item.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        return {
            item,
            total_amount: total
        }
    }





}

export default Reducer_function