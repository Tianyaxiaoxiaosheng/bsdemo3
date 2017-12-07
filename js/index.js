// function getdpr() {
//     $(".main_nav").append("dpr: "+window.devicePixelRatio);
//     $(".main_nav").append("<br/>UA: "+navigator.userAgent);
// }

function addMainNavigationEvent() {
    $(".main_nav_th").click(function () {

        //修改字体样式
        $(".main_nav_th").css({color:"white"});
        $(this).css({color:"darkorange"});

        //隐藏掉所有显示页
        $(".main_detail_item").hide();

        //判断点击项
        if (this.id == "main_nav_item1") {
            // alert("灯光");
            $("#main_detail_item1").show();
        }else if(this.id == "main_nav_item2"){
            $("#main_detail_item2").show();
        }else if(this.id == "main_nav_item3"){
            $("#main_detail_item3").show();
        }
    })

    //初始化点击
    $("#main_nav_item1").click();
}

//testButtonGroup
function testButtonGroup() {

    //没反应
    $("#option1").click(); //有效
    $("#option2").select();
    $("#option3").button("toggle");

    $("#option0").click(function(){
        $(this).button('loading').delay(1000).queue(function() {
            $(this).button('reset');
        });
    });

    //激活
    $(".but").button("toggle");
    // $("#option5").button("toggle");
}

function swtest1() {

    $('[name="status"]').bootstrapSwitch({    //初始化按钮

        onText:"照明",
        offText:"熄灭",
        onColor:"success",
        offColor:"info",
        size:"small",
        animate:false,
        onSwitchChange:function(event,state){
            if(state==true){
                $(this).val("1");
                console.log("开启");
            }else{
                $(this).val("2");
                console.log("关闭");
            }
        }
    });
    $("#close").click(function(){
        $('[name="status"]').bootstrapSwitch('state', false); // 关闭按钮


    });
    $("#open").click(function(){
        $('[name="status"]').bootstrapSwitch('state', true); // 打开按钮

    });

    $('#mySwitch input').bootstrapSwitch({
        animate:false,
        onText:'On',
        offText:'Off'
    });
}

$(document).ready(function () {
    // getdpr();
    addMainNavigationEvent();
    testButtonGroup();

    // $("#sw1").bootstrapSwitch({
    //     onText:"ON",
    //     offText:"OFF"
    // });
    swtest1();
});

