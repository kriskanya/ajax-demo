'use strict';

exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Get Sum'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);
  res.send({sum: answer});    //res.send sends objects
};

exports.pow = (req, res)=>{
  res.render('calc/power', {title: 'Get Power'});
};

exports.getPower = (req, res)=>{
  var answer = Math.pow((req.body.num1 * 1),(req.body.num2 * 1));
  res.send({power: answer});
};

exports.sumList = (req, res)=>{
  res.render('calc/sumlist', {title: 'Get Sum List'});
};

exports.getSumList = (req, res)=>{
  var answer = (req.body.nums).split(',').reduce(function(previousValue, currentValue){
    return (previousValue * 1) + (currentValue * 1);
  });
  console.log(answer);
  res.send({sumList: answer});
};
