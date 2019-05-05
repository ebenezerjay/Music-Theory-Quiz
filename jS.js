class Theory {
	constructor (id) {
		this.id = id;
		this.pullFromStorage = JSON.parse(localStorage.getItem('pTest'));
	}


	pullFromStorage(id) {
		
	}

	saveToStorage(array) {
		localStorage.setItem('pTest', JSON.stringify(array));
	}
} 

