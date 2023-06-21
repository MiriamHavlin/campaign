import mongoose from "mongoose";


export class Repository{
    constructor(model, valid_model){
        this.model = model;
        this.valid_model = valid_model;
    }

    async getAll(){
        let items = await this.model.find({});
        return items;
    }

    async getById(id){
        let item = await this.model.findById(id);
        return item;
    }

    async insert(data){
        let result = await this.model.create(data);
        return result;
    }

    async update(id, data){
        let result = await this.model.findByIdAndUpdate(id, data, { new: true });
        return result;
        }    

    async delete(id){
        let result = await this.model.findByIdAndDelete(id);
        return result;
    }
}

