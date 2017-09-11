window.onload = function() {
    // 全局变量
    var global = {};
    global.search = document.getElementById("search"); //选取元素
    global.search_form = document.getElementsByClassName("search_form")[0];
    global.put = global.search_form.lastChild.firstChild;
    global.search_off = true; //开启关闭搜索
    global.menuDom = document.getElementById("menu"); //选取元素
    global.navlistDom = document.getElementsByClassName("navlist")[0]; //选取元素
    global.navli = global.navlistDom.lastChild.children; //选取li元素
    global.navLen = global.navli.length;
    global.nav_off = true;


    // 菜单事件
    global.menuDom.onclick = function() {
        var li = computstyle(global.navli[0]).height;
        if (global.nav_off) {
            global.navlistDom.style.height = (parseInt(li) * global.navLen) + "px";
        } else {
            global.navlistDom.style.height = 0;
        }
        global.nav_off = !global.nav_off;
    }

    global.menuDom.onblur = function() {
        global.navlistDom.style.height = 0;
        global.nav_off = !global.nav_off;
    }


    // 搜索事件
    search();
    window.onresize = function(){
        global.put.blur();
        search();
    }

    function search(){
        if(window.innerWidth >= 768){
            global.search.onclick = function(){
                if(global.search_off){
                    global.search_form.className = "search_form show_search";
                    global.put.focus();
                }else{
                    global.search_form.className = "search_form"; 
                }
                console.log(global.search_off)
                global.search_off = !global.search_off;
            }
        
            global.put.onblur = function(){
                global.search_form.className = "search_form";
                global.search_off = !global.search_off;
            }
        }else{
            global.search.onclick = function(){
                global.search_form.className = "search_form show_modal";
                setTimeout(function(){
                    global.search_form.className = "search_form show_modal show_modal_opacity";
                },0)
                global.put.focus();
            }
            global.put.onblur = function(){
                global.search_form.className = "search_form show_modal";
                setTimeout(function(){
                    global.search_form.className = "search_form show_modal hide_modal_opacity";
                    setTimeout(function(){
                        global.search_form.className = "search_form";
                    },500)
                },0)
            }
        }
    }






    // 获取计算后的元素高度
    function computstyle(obj) {
        var obj = obj.currentStyle || getComputedStyle(obj);
        return obj;
    }

}