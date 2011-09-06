// JavaScript Document

var Utils = {
	getParameter:function( val ,data){
		var re = new RegExp (val + "=([^&#]*)","i")
		var a = re.exec(data)
		if ( a == null )
			return null;
		return decodeURI(a[1]);
	},
	nonce:function(length) {
		/*随机生成字符串*/
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var result = "";
        for (var i = 0; i < length; ++i) {
            var rnum = Math.floor(Math.random() * chars.length);
            result += chars.substring(rnum, rnum+1);
        }
        return result;
	},
	timestamp:function(){
		/*获取时间戳*/
		var t = (new Date()).getTime() ;
        return Math.floor(t / 1000);
	},
	getMenuItem:function(menuItemName){
		/*根据名称,获取Menu对象*/
		var menu=safari.extension.toolbarItems[0].menu;
		var menuItems = menu.menuItems;
     	for (var i=0; i<menuItems.length; i++) {
			if(menuItems[i].identifier==menuItemName)	return menuItems[i];	
      	}
		return null;
	}
}




