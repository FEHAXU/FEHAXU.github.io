// JavaScript Document
function setCookie(name,nr,jtgq=0){
	if(jtgq == 0){
		document.cookie = name+"="+nr+";path=/test";
	}
	else{
		var daaa = new Date();
		daaa.setDate(daaa.getDate()+jtgq)
		document.cookie=encodeURI(name+"="+nr)+";expires="+daaa.toUTCString()+";path=/test";
	}
}
function GetCookie(name){
	var cookieString=decodeURI(document.cookie);
	var cookieArray=cookieString.split(";");
	for(var i=0;i<cookieArray.length;i++){
		var cookieNum=cookieArray[i].split("=");
		var cookieName=cookieNum[0];
		var cookieValue=cookieNum[1];
		if(cookieName==name){
			return cookieValue;
		}
		else{
			return false;
		}
	}
}
function DeleteCookie(name){
	var dada=new Date();
	dada.setDate(dada.getTime()-1000);
	document.cookie=name+"=删除"+";expires="+dada.toGMTString();
}