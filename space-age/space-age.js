var SpaceAge = function(seconds){
  console.log("running!");
  this.seconds = seconds;
  this.onEarth = function(){
    return Math.round( this.seconds / 31557600 * 100) / 100;
  };
  this.onMercury = function(){
    return Math.round( this.seconds / 7600543.81992 * 100) / 100;
  };
  this.onVenus = function(){
    return Math.round( this.seconds / 19414149.052176 * 100) / 100;
  };
  this.onMars = function(){
    return Math.round( this.seconds / 59354032.690079994 * 100) / 100;
  };
  this.onJupiter = function(){
    return Math.round( this.seconds / 374355659.124 * 100) / 100;
  };
  this.onSaturn = function(){
    return Math.round( this.seconds / 929292362.8848 * 100) / 100;
  };
  this.onUranus = function(){
    return Math.round( this.seconds / 2651370019.3296 * 100) / 100;
  };
  this.onNeptune = function(){
    return Math.round( this.seconds / 5200418560.032001 * 100) / 100;
  };
}

module.exports = SpaceAge;