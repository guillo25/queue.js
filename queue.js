function Queue() {
  this.datos = [];  
}

Queue.prototype.push = function(dato) {
  this.datos.push(dato);
};

Queue.prototype.pop = function(dato) {
  this.datos.pop();
};

Queue.prototype.remove = function(dato) {		  
  var index = this.datos.indexOf(dato);	
  if (index > -1) {
    this.datos.splice(index, 1);
    return true;
  }
  return false;
};

Queue.prototype.count = function(dato) {	
	var contador = 0;

	for(var i = 0; i< this.datos.length; i++) {
		var value = this.datos[i];
		if(value === dato){
			contador++;
		}
	}
	return contador;
};

Queue.prototype.length = function() {			
	return this.datos.length;
};

Queue.prototype.isEmpty = function() {			
	return this.length() == 0;
};

Queue.prototype.toString = function() {
  return this.datos.toString();
};
