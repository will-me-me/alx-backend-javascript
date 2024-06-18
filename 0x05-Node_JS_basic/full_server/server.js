import router from './routes/index';

const express = require('express');

const app = express();
app.use(router);

app.listen(1245, () => console.log('server started!!'));

export default app;