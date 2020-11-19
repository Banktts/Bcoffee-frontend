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
        return await axios.get(URL + `/order/${branchId}/${date}`)
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

export const getCustomer = async (name) => {
    try {
        // return await axios.get("/customer", name)
    } catch (err) {
        throw err
    }
}
//bank
export const editEmployee = async () => {
    try {
        // return await axios.patch()
    } catch (err) {
        throw err
    }
}
//mint
export const deleteEmployee = async (branchId) => {
    try {
        // return await axios.delete()
    } catch (err) {
        throw err
    }
}
//bank
export const editInventory = async (branchId) => {
    try {
        // return await axios.patch()
    } catch (err) {
        throw err
    }
}
//mint
export const deleteMenu = async (branchId) => {
    try {
        // return await axios.delete()
    } catch (err) {
        throw err
    }
}
//bank
export const addCustomer = async (values) => {
    try {
        let res = await axios.post(URL+'/addcustomer',values)
        console.log(res.false)
        return res.data
    } catch (err) {
        
        return false
    }
}
