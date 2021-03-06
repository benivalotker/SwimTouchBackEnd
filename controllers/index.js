//load all controller 
'use strict';

const express = require('express'),
router        = express.Router();

router.use('/login',        require('./login'))
router.use('/profile',      require('./profile'))
router.use('/exercise',     require('./exercise'))
router.use('/trainning',    require('./trainning'))
router.use('/swimmer',      require('./swimmer'))
router.use('/team',         require('./team'))
router.use('/records',      require('./records'))
router.use('/statistic',    require('./statistic'))
router.use('/target',       require('./target'))
router.use('/notification', require('./notification'))
router.use('/todo',         require('./todo'))
router.use('/mails',        require('./mails'))

module.exports = router