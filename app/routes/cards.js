'use strict';

exports.getCardPage = (req, res)=>{
  res.render('cards/card', {title: 'Pick a Card'});
};

exports.getCard = (req, res)=>{
  var suitsArray = ['hearts','diamonds','clubs','spades'];
  var suit = Math.floor(Math.random() * suitsArray.length);  //selects a random suit from the array
  // var suit = suitsArray[Math.floor(Math.random() * suitsArray.length)];
  var card = Math.floor(Math.random() * 13);
  res.send({cardNumber: card, suitValue: suit});
};
