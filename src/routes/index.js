import express from 'express';
var router = express.Router();

/* GET home page*/
router.get('/', function(req,res){
    var data = {
        title: 'Global MM API',
        message: 'Xin chào, đây là trang chủ!'
    }
    res.render('index', data);
});

export default router;