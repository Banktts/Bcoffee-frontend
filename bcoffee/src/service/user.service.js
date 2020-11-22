import axios from 'axios'

const URL = "http://localhost:4000"

export const getMenu = async (branchId) => {
    try {
        return await axios.get(URL + `/menu/${branchId}`)
    } catch (err) {
        throw err
    }
}

export const getEmployee = async (branchId) => {
    try {
        return await axios.get(URL + `/employee/${branchId}`)
    } catch (err) {
        throw err
    }
}

export const getOrder = async (branchId, date) => {
    try {
        return await axios.get(URL + `/all/order/${branchId}/${date}`)
    } catch (err) {
        throw err
    }
}

export const getInventory = async (branchId) => {
    try {
        return await axios.get(URL + `/inventory/${branchId}`)
    } catch (err) {
        throw err
    }
}

export const getBranch = async () => {
    try {
        return await axios.get(URL + "/branch")
    } catch (err) {
        throw err
    }
}

export const getCustomer = async (customerName) => {
    try {
        return await axios.get(URL + `/customer/${customerName}`)
    } catch (err) {
        throw err
    }
}
//bank
export const editEmployee = async (data) => {
    try {
        return await axios.put(URL + `/update/position/${data.empId}`, data)
    } catch (err) {
        throw err
    }
}
//mint
export const deleteEmployee = async (empId) => {
    try {
        return await axios.delete(URL + `/delete/employee/${empId}`)
    } catch (err) {
        throw err
    }
}
//bank
export const editInventory = async (data) => {
    try {
        console.log("data", data)
        return await axios.put(URL + `/inventory/update/${data.branchIdEdit}/${data.itemId}`, data)
    } catch (err) {
        throw err
    }
}
//mint
export const deleteMenu = async (data) => {
    try {
        return await axios.delete(URL + `/delete/menu/${data.menuId}/${data.branchId}`, data)
    } catch (err) {
        throw err
    }
}
//bank
export const addCustomer = async (values) => {
    try {
        let res = await axios.post(URL + '/addcustomer', values)
        console.log(res.false)
        return res.data
    } catch (err) {

        return false
    }
}

export const placeOrder = async (data) => {
    try {
        return await axios.post(URL + "/post/order", data)
    } catch (err) {
        throw err
    }
}

export const getOrderLine = async (orderId) => {
    try {
        return await axios.get(URL + `/orderline/${orderId}`)
    } catch (err) {
        throw err
    }
}

export const getOrderEach = async (orderId) => {
    try {
        return await axios.get(URL + `/order/${orderId}`)
    } catch (err) {
        throw err
    }
}