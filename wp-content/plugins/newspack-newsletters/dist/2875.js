(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[2875],{2875:(e,t,n)=>{!function(e){"use strict";e.defineMode("mumps",(function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var t=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),n=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),$=new RegExp("^[\\.,:]"),a=new RegExp("[()]"),o=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),r=["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"],c=e(["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"]),m=e(r);function i(e,r){e.sol()&&(r.label=!0,r.commandMode=0);var i=e.peek();return" "==i||"\t"==i?(r.label=!1,0==r.commandMode?r.commandMode=1:(r.commandMode<0||2==r.commandMode)&&(r.commandMode=0)):"."!=i&&r.commandMode>0&&(r.commandMode=":"==i?-1:2),"("!==i&&"\t"!==i||(r.label=!1),";"===i?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":'"'==i?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match(n)||e.match(t)?"operator":e.match($)?null:a.test(i)?(e.next(),"bracket"):r.commandMode>0&&e.match(m)?"variable-2":e.match(c)?"builtin":e.match(o)?"variable":"$"===i||"^"===i?(e.next(),"builtin"):"@"===i?(e.next(),"string-2"):/[\w%]/.test(i)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error")}return{startState:function(){return{label:!1,commandMode:0}},token:function(e,t){var n=i(e,t);return t.label?"tag":n}}})),e.defineMIME("text/x-mumps","mumps")}(n(4631))}}]);