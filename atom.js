class upquark {
	constructor() {
		this.mass = '3 MeV';
		this.charge = (2/3); 
	}
}
class downquark {
	constructor() {
		this.mass = '6 MeV';
		this.charge = -(1/3);
	}
}
class quarks {
	constructor(up,down) {
		this.up = [];
		for (var i = 0; i < up; i++) {
			this.up.push(new upquark());
		}
		this.down = [];
		for (i = 0; i < down; i++) {
			this.down.push(new downquark());
		}
		this.mass = ((up * 3) + (down * 6)) + ' MeV';
	}
}
class proton {
	constructor() {
		this.quraks = new quarks(2,1);
		this.charge = 1;
		this.mass = '938.3 MeV';
	}
}
class neutron {
	constructor() {
		this.quraks = new quarks(1,2);
		this.charge = 0;
		this.mass = '939.6 MeV';
	}
}
class electron {
	constructor() {
		this.charge = -1;
		this.mass = '0.511 MeV';
	}
}
class nucleus {
	constructor(protons,neutrons) {
		this.protons = [];
		for (var i = 0; i < protons; i++) {
			this.protons.push(new proton());
		}
		this.neutrons = [];
		for (i = 0; i < neutrons; i++) {
			this.neutrons.push(new neutron());
		}
	}
}
class atom {
	constructor(protons,neutrons,electrons) {
		this.nucleus = new nucleus(protons,neutrons);
		this.electrons = [];
		for (var i = 0; i < electrons; i++) {
			this.electrons.push(new electron());
		}
	}
}
class compound {
	constructor(list) {
		this.atoms = [];
		for (var i = 0; i < list.length; i++) {
			this.atoms.push(list[i]);
		}
	}
}
