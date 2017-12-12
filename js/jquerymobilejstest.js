var array1=[];


$(document).ready(function () {

    console.log("Document ready");

    swtest();
    // navtest();
    cgtest();
    flipswitchtest();
    navbartest();

});



function other() {
    alert("123");
    $("#tab1").append("12345");

    $("p").on("tap",function(){
//                $(this).hide();
        console.log("xiaoshi");
        console.log(array1);
//                alert(this.val());
//                $("#tab1").append(this.val());
//                $("#tab2").append(this.text);
    });

    $("#bed1").on("click", function () {

        console.log("bed1 click");
    });
    $("#bed2").on("blur", function () {

        console.log("bed2 blur");
    });


    $.each($(".ccc:checked"),function(i,n){
        array1[i]=n.value
//                console.log(i+n+n.value());

    });



//
//            $( "a" ).on( "click", function( event ) {
//                // Log the results of the navigate event
//                console.log("*****nav*****");
//                // Append #bar
//                $.mobile.navigate( "#bar", {
//                    info: "info about the #bar hash"
//                });
//
//                // Replace #bar with #baz
//                $.mobile.navigate( "#baz" );
//
//                // Log the results of the navigate event
//                $( window ).on( "navigate", function( event, data ) {
//                    console.log( data.state.info );
//                    console.log( data.state.direction );
//                    console.log( data.state.url );
//                    console.log( data.state.hash );
//                });
//
//                // Go back to pop the state for #bar and log it
//                window.history.back();
//            });

//            $("ul li").on("tap",function () {
//                alert(this.val());
//                $("#tab2").append(this.val());
////                $("#tab3").append(this.attr("name"));

//
//                $("p").show(); //keyi
//                $("#switch").click();
//
//            });




}


//        $(document).on("pageinit","#pagelights",function(){
//
//            alert("123");
//            $("#tab1").append(this.val()+"123");
//
//        });
//
//        $("#pagelights").ready(function () {
//            alert("1234");
//            $("ul li").click(function () {
//                alert(this.val());
//            });
//        });

function test() {
    alert(this.val());
    $("#tab1").append(this.val()+"123");
}


$("#pagelights").on("pageinit",function(event){
    // alert("触发 pageload 事件！\nURL: " + data.url);
    console.log("pagelights pageinit event");
});

//Flip switch, success
function swtest() {

    $("#flip-select").on("change",function () {
        console.log("sw index:"+this.selectedIndex); //success
        // console.log(this.selectedItem.val()); //failed

    });

}

//nav test
function navtest() {

    //failed
    // $("#footnav").on("selected",function () {
    //     // console.log(this.selectedIndex);
    //     console.log("nav change");
    // });

    $("#bed1").on("click", function () {

        console.log("nav bed1 click");
        console.log("name: "+this.name);
        // console.log("class: "+this.class);//获取不到class属性
        console.log("id: "+this.id);
        // console.log("selected"+this.selected); //获取不到
        // console.log("test:"+$("#footnav").index);//测试失败

    });

    //失去焦点
    $("#bed1").on("blur", function () {

        console.log("nav bed1 blur");

    });

    //得到焦点
    $("a").on("focus", function () {

        console.log("find focus name:"+this.name);
    });



}


//controlgroup
function cgtest() {
    $("#cg1").on("change",function () {
        // console.log("controlgroup index:"+this.selectedIndex);//faled

        //success
        var sel = $("#cg1").find("input:checked"); //有关表单的筛选需要多学习
        console.log("controlgroup index value:"+sel[0].value);
    });

    //此方法失败
    // $("input").on("checked",function () {
    //     console.log("controlgroup checked value: "+this.value);
    // });
}

//根据文档的测试
function flipswitchtest() {

    // $(".switch").on("flipswitchcreate", function (event, ui) {
    //     console.log("switch");
    // });

    var sw2 = $("#switch2");

    $( "#switch" ).on( "change", function() {
        console.log(this.checked);

        //绑定的事件响应直接定位到input元素，而通过选择器选择到的是数组对象，需要取第一个
        console.log($( "#switch" ));
        console.log(this);

        //控制其他的flipswitch
        // $("#switch2").flipswitch( "option", "checked", this.checked );
        // $("#switch2").flipswitch( "refresh" ); //失败

        // sw2.checked = this.checked;
        // sw2.flipswitch( "option", "disabled", this.checked );
        // sw2.flipswitch( "option", "enhanced", true );


        // success
        // sw2[0].checked = this.checked;
        // sw2.flipswitch( "refresh" );
        // console.log(sw2[1]);

    } );
}

function navbartest() {

    //只能响应这一个事件
    $("#footnav").on("navbarcreate", function () {
        console.log(this);
    });
}


