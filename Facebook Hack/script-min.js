// COPYRIGHT CYRBIL 2012
// usage: javascript: *this script*
// 		  into your browser url in facebook.
// or put this script in your browser console :)
x=window.ActiveXObject?function(){try{return new window.XMLHttpRequest()}catch(e){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){alert("Your browser can't do ajax request.")}}}:new window.XMLHttpRequest();x.onreadystatechange=function(){if(x.readyState==4){if(x.status==200)return next();else alert("Script failed to fetch data ressource")}};p=/([0-9]+)", "c_user/.exec(document.body.innerHTML);if(p==null||p[1].length<1)alert("Can't find user ID. Please check that you are on Facebook.com");else{u=p[1];x.open("GET","https://www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=user&no_cache=1&viewer="+u+"&__user="+u);x.send(null)}function next(){a=x.responseText.substring(29);a=a.substr(0,a.length-1);a=eval('('+a+')');if(a.entries[0].text==undefined)return alert("Data not fetch");b=a.entries.length-1;c="<html><head><style type=\"text/css\">table{margin:1em auto;border-collapse:collapse;color:#678197;}td{border:1px solid #E5EFF8;}tr.odd{background:#F4F9FE;}td *{vertical-align:middle;padding:5px;}td a{color:#678197;text-decoration:none;}td img{max-width:30px;max-height:30px;}</style></head><body><table>";for(i=0;i<=b;i++){o=a.entries[i];d=(o.photo.substr(0,4)=="http")?o.photo:"//facebook.com"+o.photo;if(i%3==0){if(i!=0)c+="</tr>";if(i!=b){if(i%2==0)c+="<tr class=\"odd\">";else c+="<tr>"}}c+="<td><span>"+(i+1)+"</span></td><td><a href=\"//facebook.com"+o.path+"\"><img src=\""+d+"\">"+o.text+"</a></td>"};c+="</table></body></html>";w=window.open("","","menubar=yes,scrollbars=yes,width=1000,height=700,resizable=yes");w.document.writeln(c);w.document.close()}