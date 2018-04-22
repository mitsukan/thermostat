var Thermostat = function() {

  this.temperature = 20
  this.powerSave = true

  Thermostat.prototype.check = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if(this.powerSave == true && this.temperature < 25) {
      this.temperature += 1;
    }
    else if(this.powerSave == false && this.temperature < 32) {
      this.temperature +=1;
    }
    return this.temperature
  };

  Thermostat.prototype.down = function() {
    if(this.temperature > 10) {
      return this.temperature -= 1;
    }
  };

  Thermostat.prototype.checkPS = function() {
    return this.powerSave;
  };

  Thermostat.prototype.togglePS = function() {
    if(this.powerSave == false) {
      return this.powerSave = true
    }
    else if(this.powerSave == true) {
      return this.powerSave = false
    }
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20
  };

  Thermostat.prototype.usage = function() {
    if(this.temperature < 18) {
      return "low-usage"
    }
    else if(this.temperature < 25) {
      return "medium-usage"
    }
    else{
      return "high-usage"
    }
  };
};
