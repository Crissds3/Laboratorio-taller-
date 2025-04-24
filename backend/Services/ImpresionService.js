class ImpresionService {
    constructor(ImpresionModel) {
        this.ImpresionModel = ImpresionModel;
    }

    async createImpresion(data) {
        const impresion = new this.ImpresionModel(data);
        return await impresion.save();
    }

    async getImpresiones() {
        return await this.ImpresionModel.find().populate('userId').populate('productoId');
    }
}

module.exports = ImpresionService;