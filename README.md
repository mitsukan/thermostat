# Thermostat challenge

### Setting up the foundations

I first started by creating the describe function in the spec file. From there, I also set up the `beforeEach` function that instantiates the instance variable `thermostat` to be used throughout the spec file.

### Temperature functions

The tests checks for the default value as well as the basic `thermostat.up` and `thermostat.down` functions. It also ensures that it has a minimum cap of 10 degrees.

### Power saving mode

This adds more functionality to the thermostat. I have `this.powerSave` that keeps track of the `true` or `false` status. Using this, I have written tests to fulfil the requirements that the challenge has set out.