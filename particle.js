'use strict';
var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');

var Point = function(x, y) {
  var point = {
    position: {
      x: x,
      y: y
    },

    velocity: {
      x: 0.0,
      y: 0.0
    },

    forces: [],

    drawPoint: function() {
      context.fillStyle = '#fff';
      context.fillRect(this.position.x, this.position.y, 2, 2);
    },

    updatePoint: function() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      for(var i = 0; i < this.forces.length; i++) {
        this.velocity.x += this.forces[i].x;
        this.velocity.y += this.forces[i].y;
        this.foces[i].duration -= 1;

        if(this.forces[i].duration <= 0) {
          this.forces.splice(i, 1);
        }
      }
    }
  };
  return point;
};

var Force = function(x, y, d) {
  var force = {
    x: x,
    y: y,
    duration: d
  };

  return force;
};

var points = [];

points.push(new Point(50,50));
points.push(new Point(100,100));

function drawScreen() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < points.length; i++) {
    points[i].drawPoint();
    points[i].updatePoint();
  }
};

setInterval(drawScreen, 33);

/*
Two or three sets of x-y coordinates
  1. position
  2. velocity
  3. acceleration 
  4. mass
  5. forces acting on point
*/
