/**
 * THIS IS JUST A TEMPLATE FILE FOR ROUTING
 * TODO: rename file to match route it is routing for
 */
import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
  res.send('test route is working');
});

export default router;
