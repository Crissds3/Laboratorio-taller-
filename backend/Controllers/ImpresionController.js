class ImpresionController {
    constructor(impressionService) {
        this.impressionService = impressionService;
    }

    async createImpresion(req, res) {
        try {
            const impresion = await this.impressionService.createImpresion(req.body);
            res.status(201).json(impresion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getImpresiones(req, res) {
        try {
            const impresiones = await this.impressionService.findAllImpresiones();
            res.status(200).json(impresiones);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = ImpresionController;