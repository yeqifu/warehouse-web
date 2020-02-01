var api='http://127.0.0.1:8080/'
//下次再发ajax请求时把token带到后台去
var token = $.cookie('TOKEN');
//设置全局ajax前置拦截
$.ajaxSetup({
    headers:{
        //每次ajax请求时把token带过去
        'TOKEN':token
    }
});


if(token==undefined){
    if(window.location!='http://127.0.0.1:8081/warehouse-web/login.html'){
        window.top.location='/warehouse-web/login.html';
    }
}else{
    if(window.location!='http://127.0.0.1:8081/warehouse-web/login.html'){
        $.ajax({
            url:api+"login/checkLogin",
            async:true,
            type:'post',
            dataType:'json',
            success:function(res){
                if(res.code==-1){
                    window.top.location='/warehouse-web/login.html';
                }
            },
            error:function(res){
                window.top.location='/warehouse-web/login.html';
            }
        });
    }
}