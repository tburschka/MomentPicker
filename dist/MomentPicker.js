!function(a){var b="MomentPicker",c=moment().startOf("day"),d={date:c,level:0,style:{selected:"selected",current:"current"}};a.fn[b]=function(e){var f=a(this).data(b);return f?f:this.each(function(){var f,g=a.extend(!0,{},d,e),h=g.date,i=h.clone(),j=a(this),k=g.level;if(j.is('input[type="text"]')){var l=j;container=a('<div class="momentpicker">'),j.after(container),j=container,j.hide(),l.on("click",function(){A()}),l.on("focus",function(){A()}),a(document).on("mousedown",function(a){j.is(a.target)||0!==j.has(a.target).length||j.hide()})}else j.addClass("momentpicker");j.html(['<div class="header">','<a class="prev"></a>','<a class="current"></a>','<a class="next"></a>',"</div>",'<div class="body"></div>'].join(""));var m=j.children("div.header"),n=j.children("div.body"),o=m.children("a.next"),p=m.children("a.prev"),q=m.children("a.current"),r=function(){return!1},s=r,t=r,u=r,v=r,w=r,x=r,y=r,z=r,A=function(){""!==l.val()&&H(moment(l.val(),"L")),j.show()},B=function(a){a instanceof Function?y=a:!function(){var b=moment(a);moment.isMoment(b)&&(b.startOf("day"),y=function(){return b.clone()})}(),w=function(a){return a<y().year()},u=function(a){return a.clone().startOf("month")<y().startOf("month")},s=function(a){return a<y()};var b=y();b>i?H(b):N()},C=function(a){a instanceof Function?z=a:!function(){var b=moment(a);moment.isMoment(b)&&(b.startOf("day"),z=function(){return b.clone()})}(),x=function(a){return a>z().year()},v=function(a){return a.clone().startOf("month")>z().startOf("month")},t=function(a){return a>z()};var b=z();i>b?H(b):N()},D=function(b){var c=a.Event(b);c.api=f,j.trigger(c)},E=function(a){return!w(a)&&!x(a)},F=function(a){return!s(a)&&!t(a)},G=function(a){return!u(a)&&!v(a)},H=function(){if(arguments.length>0){var a=moment(arguments[0]);return a.isValid()&&(a.startOf("day"),F(a)&&(i=a,D("pick"),h=i.clone(),N())),f}return i.clone()},I=function(){var a=h.year(),b=a+12,d="";for(q.text(a+" - "+(b-1));b>a;){var e=[];a===c.year()&&e.push(g.style.current),a===i.year()&&e.push(g.style.selected);var f=E(a)?"a":"span";d+="<"+f+' data-year="'+a+'" class="'+e.join(" ")+'">'+a+"</"+f+">",a++}n.html(d),D("renderYears")},J=function(){var a=h.clone().startOf("y"),b=a.clone().add(12,"M"),d="";for(q.text(a.year());b>a;){var e=[];a.format("M-YYYY")===c.format("M-YYYY")&&e.push(g.style.current),a.format("M-YYYY")===i.format("M-YYYY")&&e.push(g.style.selected);var f=G(a)?"a":"span";d+="<"+f+' data-month="'+a.format("M-YYYY")+'" class="'+e.join(" ")+'">'+a.format("MMM")+"</"+f+">",a.add(1,"M")}n.html(d),D("renderMonths")},K=function(){var a=h.clone().startOf("w"),b=a.clone().add(1,"w"),d='<div class="week">';for(q.text(h.format("MMMM YYYY"));b>a;)d+="<span>"+a.format("ddd")+"</span>",a.add(1,"d");d+="</div>",a=h.clone().startOf("M").startOf("w"),b=a.clone().add(42,"d"),d+='<div class="month">';for(var e=!1;b>a;){var f=[];a.format("D-M-YYYY")===c.format("D-M-YYYY")&&f.push(g.style.current),a.format("D-M-YYYY")===i.format("D-M-YYYY")&&f.push(g.style.selected);var j=F(a)?"a":"span";a.month()!==h.month()?f.push(e?"next":"prev"):e=!0,d+="<"+j+' data-day="'+a.format("D-M-YYYY")+'" class="'+f.join(" ")+'">'+a.date()+"</"+j+">",a.add(1,"d")}d+="</div>",n.html(d),D("renderDays")},L=[{years:12},{years:1},{months:1}],M=[I,J,K],N=function(){arguments.length>0&&(k=Math.max(arguments[0],g.level)),j.removeClass("top"),k===g.level&&j.addClass("top"),M[k](),D("render")},O=function(){h.add(L[k]),N(),D("showNext")},P=function(){h.subtract(L[k]),N(),D("showPrev")};o.click(O),p.click(P),q.click(function(){N(Math.max(0,--k))}),n.on("click","a[data-year]",function(){h.year(a(this).data("year")),N(1)}),n.on("click","a[data-month]",function(){var b=moment(a(this).data("month"),"M-YYYY");h.month(b.month()).year(b.year()),N(2)}),n.on("click","a[data-day]",function(){H(moment(a(this).data("day"),"D-M-YYYY")),l&&(l.val(i.format("L")),j.hide())});var Q=function(){return arguments.length>0?(B(arguments[0]),f):y()},R=function(){return arguments.length>0?(C(arguments[0]),f):z()};f={val:H,next:O,prev:P,min:Q,max:R,renderYears:function(){N(0)},renderMonths:function(){N(1)},renderDays:function(){N(2)}},g.hasOwnProperty("min")&&B(g.min),g.hasOwnProperty("max")&&C(g.max),j.data(b,f),D("ready"),N()})}}(jQuery);