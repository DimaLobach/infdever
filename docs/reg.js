var data = window.location.search.substr(1);
var dts = data.split('&');
var elems = ['', '', ''];
var idx = 0;
  dts.forEach((element) => {
  elems[idx] = element.split('=')[1];
  idx++;
})
elems.forEach(element => console.log(element));
