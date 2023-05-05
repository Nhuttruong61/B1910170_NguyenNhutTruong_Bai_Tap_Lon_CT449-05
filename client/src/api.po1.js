import axios from "axios";
const url = "/api/po1";

export default class API{
    //Get all Po1 from server
    static async getAllPo1(){
        const res = await axios.get(url);
        return res.data;
    }
    //Get Po1 by id
    static async getPo1ByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //insert po1 into database
    static async addPo1(po1){
        const res = await axios.post(url, po1);
        return res.data;
    }
    //update Po1 into database
    static async updatePo1(id, po1){
        const res = await axios.patch(`${url}/${id}`, po1);
        return res.data;
    }
    //delete Po1 
    static async deletePo1(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}