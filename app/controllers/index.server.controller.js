/*
  index.server.controller.js
  Evan Robertson
  301291019
  October 5 2023
*/

exports.render = function (req, res) {
    res.render('index', {
    title: 'Hello World'
    })
};