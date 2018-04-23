// variable hoisting
// prototype (y?)
// debugger (y)

function Thermostat() {
  this._temperature = 20
  this._powerSave = true
};

Thermostat.prototype.check = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if(this._powerSave == true && this._temperature < 25) {
    this._temperature += 1;
  }
  else if(this._powerSave == false && this._temperature < 32) {
    this._temperature +=1;
  }
  return this._temperature
};

Thermostat.prototype.down = function() {
  if(this._temperature > 10) {
    return this._temperature -= 1;
  }
};

Thermostat.prototype.checkPS = function() {
  return this._powerSave;
};

Thermostat.prototype.togglePS = function() {
  if(this._powerSave == false) {
    return this._powerSave = true
  }
  else if(this._powerSave == true) {
    return this._powerSave = false
  }
};

Thermostat.prototype.reset = function() {
  this._temperature = 20
};

Thermostat.prototype.usage = function() {
  if(this._temperature < 18) {
    return "low-usage"
  }
  else if(this._temperature < 25) {
    return "medium-usage"
  }
  else{
    return "high-usage"
  }
};
