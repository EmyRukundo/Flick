import express from 'express';

let router = express.Router();

router.get('/api', function ( req, res){
     res.json({
         status: 200,
         message: ' Welcome to Flick app crafted wih love',
     });
});

export default router;
