var names = ["Ben", "Naziia", "Roger", "Maurice", "Helena"];
console.log(names)
for (let i=0; i<names.length; i++) {  //(let i=names.length; -1 i>=0; i--)
  console.log(i)
  console.log(names[i]);
  var child = document.createElement('div');
  child.innerHTML = names[i];
  child = child.firstChild;
  document.getElementById('test').appendChild(child);
}
