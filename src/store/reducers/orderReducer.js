import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import api from '../../api/api'

export const place_order = createAsyncThunk(
    'order/place_order',
    async ({
        price,
        quantity,
        products,
        shipping_fee,
        shippingInfo,
        userId,
        navigate,
        items,
    }) => {
        try {
            const {
                data
            } = await api.post('/home/order/palce-order', {
                price,
                quantity,
                products,
                shipping_fee,
                shippingInfo,
                userId,
                navigate,
                items,
                quantity
            })
            navigate('/payment', {
                state: {
                    price: price + shipping_fee,
                    items,
                    quantity,
                    orderId: data.orderId
                }
            })
            console.log(data)
            return true
        } catch (error) {
            console.log(error.response)
        }
    }
)

export const get_orders = createAsyncThunk(
    'order/get_orders',
    async ({
        customerId,
        status
    }, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/customer/gat-orders/${customerId}/${status}`)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
)

export const get_order = createAsyncThunk(
    'order/get_order',
    async (orderId, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/customer/gat-order/${orderId}`)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
)

export const admin_order_status_update = createAsyncThunk(
    'order/admin_order_status_update',
    async ({ orderId, info }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.put(`/admin/order-status/update/${orderId}`, info, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const orderReducer = createSlice({
    name: 'order',
    initialState: {
        myOrders: [],
        errorMessage: '',
        successMessage: '',
        myOrder: {}
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        [get_orders.fulfilled]: (state, {
            payload
        }) => {
            state.myOrders = payload.orders
        },
        [get_order.fulfilled]: (state, {
            payload
        }) => {
            state.myOrder = payload.order
        },
        [admin_order_status_update.rejected]: (state, { payload }) => {
            state.errorMessage = payload.message
        },
        [admin_order_status_update.fulfilled]: (state, { payload }) => {
            state.successMessage = 'Order Return Request sent Successfuly'
        },
    }
})

export const {
    messageClear
} = orderReducer.actions
export default orderReducer.reducer