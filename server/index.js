import {} from 'dotenv/config';

import app from './server';

const PORT = process.env.PORT || 8080;

app.listen(PORT);
