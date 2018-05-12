import express from 'express';
import axios from 'axios';

const router = express.Router();

const PARKLETS_ENDPOINT = 'https://data.sfgov.org/resource/6a7x-cttf.json';

router.get('/', (req, res) => {
  axios.get(PARKLETS_ENDPOINT)
    .then(({ data }) => res.json(data))
    .catch(console.log);
});

export default router;
