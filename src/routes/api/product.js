const { ProductController } = require('../../controllers');
const { validateAdmin } = require('../middleWares');

module.exports = router => {
    router.get('/:id?', validateAdmin, ProductController.getByIdOrAll);
    router.post('/', validateAdmin, ProductController.addProduct);
    router.put('/:id', validateAdmin, ProductController.updateProduct);
    router.delete('/:id', validateAdmin, ProductController.deleteProduct);
    router.get('/productRandom', ProductController.productRandom);
    return router;
};