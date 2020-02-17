import express from 'express';
import { New, Index, View , Delete} from '../controller/userController';

let router = express.Router();

router.get('/api', function ( req, res){
     res.json({
         status: 200,
         message: ' Welcome to Flick app crafted wih love',
     });
});

router.route('/api/user')
.get(Index)
.post(New)

router.route('/api/user/:user_id')
.get(View)
.delete(Delete)

export default router;
