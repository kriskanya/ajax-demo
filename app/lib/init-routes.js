'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var dice = traceur.require(__dirname + '/../routes/dice.js');
  var cards = traceur.require(__dirname + '/../routes/cards.js');

  app.get('/', dbg, home.index);
  app.get('/help', dbg, home.help);

  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);

  app.get('/power', dbg, calc.pow);
  app.post('/power', dbg, calc.getPower);

  app.get('/sumlist', dbg, calc.sumList);
  app.post('/sumlist', dbg, calc.getSumList);

  app.get('/rollOne', dbg, dice.rollDie);
  app.get('/rollOne/roll', dbg, dice.getDie);

  app.get('/rollTwo', dbg, dice.rollDice);
  app.get('/rollTwo/roll', dbg, dice.getDice);

  app.get('/cards', dbg, cards.getCardPage);
  app.get('/cards/getCard', dbg, cards.getCard);

  console.log('Routes Loaded');
  fn();
}
