window.onload = function() {
    // 全局变量
    var global = {};
    global.search = document.getElementById("search"); //选取元素
    global.search_off = true; //开启关闭搜索
    global.put = document.getElementsByClassName("search_form")[0].firstChild.firstChild.firstChild; //搜索input元素
    global.menuDom = document.getElementById("menu"); //选取元素
    global.navlistDom = document.getElementsByClassName("navlist")[0]; //选取元素
    global.navli = global.navlistDom.lastChild.children; //选取li元素
    global.navLen = global.navli.length;
    global.nav_off = true;

    // 搜索事件
    if (window.innerWidth >= 768) {
        global.search.onclick = function() {
            if (global.search_off) {
                global.put.style.width = "170px";
                global.put.focus();
            } else {
                global.put.style.width = "0";
            }
            global.search_off = !global.search_off;
        }
        global.put.onblur = function() {
            global.put.style.width = "0";
            global.search_off = !global.search_off;
        }

    } else {
        var formDom = document.getElementsByClassName("search_form")[0];
        global.search.onclick = function() {
            formDom.style.width = "100%";
            formDom.style.opacity = 1;
            global.put.focus();
        }
        global.put.onblur = function() {
            formDom.style.opacity = 0;
            setTimeout(function() {
                formDom.style.width = 0;
            }, 1000)
        }
    }


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







    // 获取计算后的元素高度
    function computstyle(obj) {
        var obj = obj.currentStyle || getComputedStyle(obj);
        return obj;
    }

}