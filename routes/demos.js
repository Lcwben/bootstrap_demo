var express = require('express');
var router = express.Router();

var data = {
    order_no : '123456789',
    link_name : '施工归档',
    feedback : '暂无',
    maintainer : '测试装维人员',
    phone : '13900012345',
    maintain_department : '装维部门1'
}

router.get('/demo1',(req,res,next)=> {
    res.render('demo1',data);
});

module.exports = router;