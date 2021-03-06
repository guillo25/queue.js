/*Version:3.0 Author: Guillermo Beltramino e-mail:guillote25@gmail.com*/
function Queue() {
  this.repetidos = true;
  if(arguments.length > 1){
	 throw "Max params invalid";
  }
  if(arguments.length == 1){
	  if(typeof(arguments[0]) === "boolean"){	  
			this.repetidos = arguments[0];
	  }else{		
	  	throw "Parameter not a bool";
	  }	  
  }
  this.datos = [];  
}

Queue.prototype.push = function(dato) {
  if(this.repetidos){
	this.datos.push(dato);
	return true;
  }else{
	if(this.count(dato) < 1){
		this.datos.push(dato);
		return true;
	}
	return false;  
  }	
};

Queue.prototype.pop = function() {
  return this.datos.shift();
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

Queue.prototype.shuffle = function() {	
  var currentIndex = this.length(), temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.datos[currentIndex];
    this.datos[currentIndex] = this.datos[randomIndex];
    this.datos[randomIndex]  = temporaryValue;
  }

}
