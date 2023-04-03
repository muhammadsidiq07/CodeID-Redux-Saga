import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/order/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const deleted = async (id) => {
    try {
        const result = await axios.delete(`${config.domain}/order/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

const create = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/order/`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const update = async (data) => {
    try {
        const result = await axios.put(`${config.domain}/order/${data.id}`, data)
        return result
    } catch (error) {
        return await error.message
    }
}

const findOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/order/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default { list, deleted, create, update, findOne }