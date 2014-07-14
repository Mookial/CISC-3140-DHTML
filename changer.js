function getERef(name) {
	return top.document.getElementById(name);
} 

function getEProp(name,property) {
	return top.document.getElementById(name).style[property];
} 
	
function setEProp(name,property,value) {
	top.document.getElementById(name).style[property] = value;
}

function setEContent(name,content) {
	top.document.getElementById(name).innerHTML=content;
}

var timerID;
var time = 900;
var change = true;

function init() {
	timerID = setTimeout("changer()",time);
}

function changer() {
	setEProp("background","backgroundColor",change?"green":"pink");
	setEProp("1","color",change?"orange":"red");
	setEProp("1","fontSize",change?"100":"10");
	setEProp("2","color",change?"blue":"green");
	setEProp("2","fontSize",change?"150":"25");
	setEProp("3","color",change?"magenta":"white");
	setEProp("3","fontSize",change?"50":"800");
	timerID = setTimeout("changer()",time);
	if (time>40) time -= 20;
	change = !change;
}
