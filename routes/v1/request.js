const router = require('express').Router();
const container = require('../../di');

router.get('', container.RequestController.list.bind(container.RequestController));
router.post('', container.RequestController.create.bind(container.RequestController));
router.get('/my_requests', container.RequestController.getByUserId.bind(container.RequestController));
router.get('/type', container.RequestController.getType.bind(container.RequestController));
router.get('/need_approval', container.RequestController.getNeedApproval.bind(container.RequestController));
router.get('/approval', container.ApprovalController.list.bind(container.ApprovalController));

router.delete('/approval/:id', container.ApprovalController.delete.bind(container.ApprovalController));
router.put('/approval/:id', container.ApprovalController.update.bind(container.ApprovalController));
router.get('/:id', container.RequestController.getById.bind(container.RequestController));
router.put('/:id', container.RequestController.update.bind(container.RequestController));
router.delete('/:id', container.RequestController.delete.bind(container.RequestController));
router.post('/:request_id/approval', container.ApprovalController.create.bind(container.ApprovalController));
router.get('/:request_id/approval', container.ApprovalController.getById.bind(container.ApprovalController));
router.get('/:year/:month', container.RequestController.getByDate.bind(container.RequestController));


module.exports = router;
