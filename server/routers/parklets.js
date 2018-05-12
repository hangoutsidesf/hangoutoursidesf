import express from 'express';

const router = express.Router();

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

router.get('/', (req, res) => {
  res.send('test route is working');
});

export default router;
