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

Queue.prototype.toString = function() {
  return this.datos.toString();
};
