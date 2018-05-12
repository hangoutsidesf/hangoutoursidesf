import express from 'express';
import axios from 'axios';

const router = express.Router();

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

router.get('/', async (req, res) => {
  axios.get(PARKLETS_ENDPOINT)
    .then(resp => resp.data)
    .then(data => res.json(data))
    .catch(error => res.json({ error }));
});

export default router;
