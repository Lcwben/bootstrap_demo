var express = require('express');
var router = express.Router();

var data = {
    order_no : '123456789',
    link_name : '施工归档',
    feedback : '暂无',
    maintainer : '测试装维人员',
    phone : '13900012345',
    maintain_department : '装维部门1',
    return_reason : '不详',
    success : true,
    fail : false,
    flow_details : [
        {
            segment : '前台受理成功',
            date : '2017-12-18',
            time : '10:20:30'
        },{
            segment : 'CRM派PBOSS',
            date : '2017-12-19',
            time : '11:24:20'
        },{
            segment : 'PBOSS派SG',
            date : '2017-12-20',
            time : '13:05:11'
        },{
            segment : 'SG管线资源配置',
            date : '2017-12-21',
            time : '14:56:09'
        },{
            segment : 'SG预约上门',
            date : '2017-12-22',
            time : '17:08:55'
        },{
            segment : 'SG外线施工',
            date : '2017-12-24',
            time : '20:14:06'
        },{
            segment : '施工归档',
            date : '2017-12-25',
            time : '21:50:13'
        }
    ]
}

router.get('/demo1',(req,res,next)=> {
    res.render('demo1',data);
});

module.exports = router;