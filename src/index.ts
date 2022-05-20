import { Router } from 'itty-router';
import { getCats } from './handlers/cats';
import { getDogs } from './handlers/dogs';

const router = Router();

router.get('/', request => new Response('Hello!'));
router.get('/cats', getCats);
router.get('/dogs', getDogs);

router.all('*', () => new Response('404, not found!', { status: 404 }));

export default {
  async fetch(request: Request): Promise<Response> {
    return router.handle(request);
  },
};
