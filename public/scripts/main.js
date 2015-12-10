/* Main file for rendering */

define(function (require) {
  var React = require('react');
  var Gallery = require('jsx!app/Gallery');
  var $ = require('jquery');
  var Navbar = require('jsx!app/Navbar');

  var container = document.getElementById('container');
  var main_navbar = document.getElementById('main-navbar');

  var data = [
    {
      url: 'lib/chicago.jpg',
      caption: 'Chicago skyline by Navy Pier'
    }, 
    {
    	url: 'lib/biking.jpg',
      caption: 'Biking in Dublin, Ireland'
    },
    {
    	url: 'lib/nightchicago.jpg',
      caption: 'Night view of Chicago'
    },
    {
    	url: 'lib/dublin.jpg',
      caption: 'Streets of Dublin'
    },
    {
    	url: 'lib/griffith.jpg',
      caption: 'Griffith Observatory'
    },
    {
    	url: 'lib/hm.jpg',
      caption: 'Streets of Dublin Part 2'
    }
  ];

  var flyingcats = ['lib/flyingcat.png', 'lib/flyingcat2.png', 'lib/flyingcat3.png',
                    'lib/flyingcat4.png'];

  var navlinks = [
    {
      text: "Facebook",
      url: "https://www.facebook.com/camille.jwo"
    }, 
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/camille-jwo-27750494"
    },
    {
      text: "Twitter",
      url: "https://www.twitter.com/Warwick207"
    }
  ];

  React.renderComponent(<Gallery photos={data} cats={flyingcats}/>, container);
  React.renderComponent(<Navbar items={navlinks}/>, main_navbar);
});