const express = require('express');
const router = express.Router();
const {
    createTask,
    updateTask,
    deleteTask,
    viewAllTask,
    viewTask
} = require('../controllers/controllers');


router.route('./create-task').post(createTask);
router.route('./update-task').post(updateTask);
router.route('./delete-task').post(deleteTask);
router.route('./view-task/:id').get(viewTask);
router.route('./view-all-task').get(viewAllTask);

module.exports = router;