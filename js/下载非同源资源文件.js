downloadImg(src,name){
  var x=new XMLHttpRequest();
  //禁止浏览器缓存；否则会报跨域的错误
  x.open("GET", src+'?t='+new Date().getTime(), true);
  x.responseType = 'blob';
  x.onload=function(e){
      var url = window.URL.createObjectURL(x.response)
      var a = document.createElement('a');
      a.href = url
      a.download = name
      a.click()
  }
  x.send();
},

downloadImg(url,name)
