import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.sendFile( __dirname + '/pages/index.html');
});

export default routes;