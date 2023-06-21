

export class Service {

    constructor(repo) {
        this.repo = repo;
    }

    async getAll() {
        return await this.repo.getAll();
    }

    async getById(id) {
        return this.repo.getById(id)
    }

    async insert(data) {
        let validBody = this.repo.valid_model(data);
        if (validBody.error) {
            return validBody.error;
        } else {
            return await this.repo.insert(data);
        }
    }

    async update(id, data) {
        let result = await this.model.findByIdAndUpdate(id, data, { new: true });
        return result;
    }

    async delete(id) {
        let result = await this.model.findByIdAndDelete(id);
        return result;
    }

}