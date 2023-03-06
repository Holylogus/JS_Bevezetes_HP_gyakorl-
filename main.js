console.log("Szia!");
//var neve = prompt('Mia neved?','.....');
//alert('Szia' +' '+ neve);
var veletlentomb = new Array();
function feltolt() {
  for (let index = 0; index < 50; index++) {
    var vel = Math.floor(Math.random() * 100) + 1;
    veletlentomb[index] = vel;
  }
  console.log(veletlentomb);
}
function kiir() {
  var szoveg = "";
  for (let i = 0; i < veletlentomb.length; i++) {
    szoveg += veletlentomb[i] + " ";
    if (i % 5 == 4) {
      szoveg += "\n";
    }
  }
  alert(szoveg);
  console.log(szoveg);
}
function szamol() {
  var osszeg = 0;
  for (let cv = 0; cv < veletlentomb.length; cv++) {
    osszeg += veletlentomb[cv];
  }
  alert(osszeg);
}
function paros() {
  var szoveg = "";
  for (let index = 0; index < veletlentomb.length; index++) {
    if (veletlentomb[index] % 2 == 0) {
      szoveg += veletlentomb[index] + " ";
    }
  }
  alert(szoveg);
}
function maximum() {
  var maximum = veletlentomb[0];
  for (let index = 0; index < veletlentomb.length; index++) {
    if (veletlentomb[index] > maximum) {
      maximum = veletlentomb[index];
    }
  }
  alert(maximum);
}
