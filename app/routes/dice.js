'use strict';

exports.rollDie = (req, res)=>{
  res.render('dice/rollOne', {title: 'Roll One Die'});
};

exports.getDie = (req, res)=>{
  var answer = Math.ceil((Math.random() * 6));
  console.log(answer);
  res.send({die: answer});
};

exports.rollDice = (req, res)=>{
  res.render('dice/rollTwo', {title: 'Roll Two Dice'});
};

exports.getDice = (req, res)=>{
  var answer1 = Math.ceil((Math.random() * 6));
  var answer2 = Math.ceil((Math.random() * 6));
  res.send({dice1: answer1, dice2: answer2});
};
