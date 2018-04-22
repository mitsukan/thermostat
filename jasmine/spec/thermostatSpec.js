describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  describe('Temperature function', function() {
    it('has a default of 20degrees', function() {
      expect(thermostat.check()).toBe(20);
    });

    it('has as an up function that bumps up by 1degrees', function() {
      thermostat.up();
      expect(thermostat.check()).toBe(21);
    });

    it('has a down function that bumps down by 1degrees', function() {
      thermostat.down();
      expect(thermostat.check()).toBe(19);
    });

    it('has a minimum temperature of 10 degress', function() {

      for(var times = 0; times < 12; times++){
          thermostat.down();
      }
      expect(thermostat.check()).toBe(10);
    });
  });

  describe('Power Saving Mode', function() {

    it('has a power saving mode check', function() {
      expect(thermostat.checkPS()).toBe(true);
    });

    it('has a toggle to turn power saving mode off', function() {
      expect(thermostat.togglePS()).toBe(false);
    });

    it('can toggle power saving back on after toggling off', function() {
      thermostat.togglePS();
      expect(thermostat.togglePS()).toBe(true);
    });

    it('when on, max temp is 25degrees', function() {
      for(var times = 0; times < 8; times++) {
        thermostat.up();
      }
      expect(thermostat.check()).toBe(25);
    });

    it('when off, max temp is 32degrees', function() {
      thermostat.togglePS();
      for(var times = 0; times < 15; times++) {
        thermostat.up();
      }
      expect(thermostat.check()).toBe(32);
    });

  });

  describe('Reset button', function() {
    it('resets to default temperature 20', function() {
      for(var times = 0; times < 15; times++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.check()).toBe(20);
    });
  });

  describe('Usage checker', function() {
    it('returns low-usage if below 18', function() {
      for(var times = 0; times < 3; times++) {
        thermostat.down();
      }
      expect(thermostat.usage()).toBe("low-usage");
    });
  });

});
