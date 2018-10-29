# atom
Create atoms and compounds objects in JavaScript with this library.

Atom.js allows you to make atoms and combine them easily. This isn't anything really cool, it's just an expirement with classes.

Here is example code you could do with this

  let H = new atom(1,0,1); //Protons, Neutrons, Electrons
  let O = new atom(8,8,8);

  let water = new compound([H,H,O]);//Making H2O
  console.log(water);
  
