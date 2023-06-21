

export class Service {

    constructor(repo, valid_model) {
        this.repo = repo;
        this.valid_model;
    }

    async getAll() {
        return await this.valid_model.getAll();
    }

    async getById(id) {
        return this.valid_model.getById(id)
    }

    async insert(data) {
        let validBody = this.valid_model.valid_model(data);
        if (validBody.error) {
            return validBody.error;
        } else {
            return await this.valid_model.insert(data);
        }
    }

    async update(id, data) {
        let validBody = this.valid_model.valid_model(data);
        if (validBody.error) {
            return validBody.error;
        } else {
            return await this.valid_model.update(data);
        }
    }

    async delete(id) {
        return await this.valid_model.delete(id);
    }

}