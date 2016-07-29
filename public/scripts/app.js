/*
states
	hour
	minutes
	seconds
	clock type
*/

var viewport = document.getElementById("viewport");

function render(hour, minute,second,type){
 	var html = "";
  	if(type==="0"){
  	  html+= '<div class="clock">';
  	  html+='<div class="num-1"><div class="u-1"><h1>1</h1></div></div>';
  	  html+='<div class="num-2"><div class="u-2"><h1>2</h1></div></div>';
      html+='<div class="num-3"><div class="u-3"><h1>3</h1></div></div>';
  	  html+='<div class="num-4"><div class="u-4"><h1>4</h1></div></div>';
      html+='<div class="num-5"><div class="u-5"><h1>5</h1></div></div>';
  	  html+='<div class="num-6"><div class="u-6"><h1>6</h1></div></div>';
      html+='<div class="num-7"><div class="u-7"><h1>7</h1></div></div>';
  	  html+='<div class="num-8"><div class="u-8"><h1>8</h1></div></div>';
      html+='<div class="num-9"><div class="u-9"><h1>9</h1></div></div>';
  	  html+='<div class="num-10"><div class="u-10"><h1>10</h1></div></div>';
      html+='<div class="num-11"><div class="u-11"><h1>11</h1></div></div>';
  	  html+='<div class="num-12"><div class="u-12"><h1>12</h1></div></div>';
      html+='<div class="subclock">';
      html+='<div class=h-'+(hour)+'><div class="h"></div></div>';
	  html+='<div class=m-'+(minute)+'><div class="m"></div></div>';
	  html+='<div class=s-'+(second)+'><div class="s"></div></div>';
	  html+='</div>';
	  html+='</div>';
	}
	else if(type==="1"){
	  html+= '<div class="hour"><h2>'+(hour)+':'+(minute)+':'+second+'</h2></div>';

	}
  	return html;
  }
  function actualizacion(){
  	  var e = document.getElementById("change");
	  var op = e.options[e.selectedIndex].value;
	  //document.write(op);
	  var d= new Date();
	  var h = d.getHours() ;
	  var m = d.getMinutes();
	  var s = d.getSeconds();
	  viewport.innerHTML= render(h - 12,m,s,op);
  }

var act= setInterval(actualizacion,1000);