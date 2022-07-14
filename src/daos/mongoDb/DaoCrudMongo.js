const { MAX_TIME }= process.env;
class DaoCrudMongo{

    constructor(model){
        this.model = model;
    }

    async getAll() {
        return await this.model.find();
    }

    static async getById(id) {
        return await this.model.findById(id);
    }    

    async saveOne(params, object) {
            return this.model
                .updateOne(params || { _id: object._id }, object, { upsert: true })
                .maxTime(MAX_TIME)
                .lean()
                .exec();
    }    
    
    static async delete(id) {
        
    }        
}

module.exports = DaoCrudMongo;