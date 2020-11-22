import axios from 'axios'


export const getMenu = async (branchId) => {
    try {
        return await axios.get(`/menu/${branchId}`)
    } catch (err) {
        throw err
    }
}

export const getEmployee = async (branchId) => {
    try {
        return await axios.get(`/employee/${branchId}`)
    } catch (err) {
        throw err
    }
}

export const getOrder = async (branchId, date) => {
    try {
        return await axios.get(`/all/order/${branchId}/${date}`)
    } catch (err) {
        throw err
    }
}

export const getInventory = async (branchId) => {
    try {
        return await axios.get(`/inventory/${branchId}`)
    } catch (err) {
        throw err
    }
}

export const getBranch = async () => {
    try {
        return await axios.get(`/branch`)
    } catch (err) {
        throw err
    }
}

export const getCustomer = async (customerName) => {
    try {
        return await axios.get(`/customer/${customerName}`)
    } catch (err) {
        throw err
    }
}
//bank
export const editEmployee = async (empId, position) => {
    try {
        console.log(empId, position)
        return await axios.put(`/update/position/${empId}`, { position })
    } catch (err) {
        throw err
    }
}
//mint
export const deleteEmployee = async (empId) => {
    try {
        return await axios.delete(`/delete/employee/${empId}`)
    } catch (err) {
        throw err
    }
}
//bank
export const editInventory = async (data) => {
    try {
        console.log("data", data)

        return await axios.put(`/inventory/update/${data.branchIdEdit}/${data.itemId}`, data)
    } catch (err) {
        throw err
    }
}
//mint
export const deleteMenu = async (data) => {
    try {
        return await axios.delete(`/delete/menu/${data.menuId}/${data.branchId}`, data)
    } catch (err) {
        throw err
    }
}
//bank
export const addCustomer = async (values) => {
    try {
        return await axios.post('/customer/add', values)

    } catch (err) {

        throw err
    }
}

export const placeOrder = async (data) => {
    try {
        return await axios.post("/post/order", data)
    } catch (err) {
        throw err
    }
}

export const getOrderLine = async (orderId) => {
    try {
        return await axios.get(`/orderline/${orderId}`)
    } catch (err) {
        throw err
    }
}

export const getOrderEach = async (orderId) => {
    try {
        return await axios.get(`/order/${orderId}`)
    } catch (err) {
        throw err
    }
}