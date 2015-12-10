/* Photo component */
define(function (require) {
  var React = require('react');
  var $ = require('jquery');
  var catStyle;

  var Photo = React.createClass({
    getInitialState: function () {
      return {
        cat: false //initially cat is not displayed 
      };
    },

    toggleCat: function (e) {
      catStyle = { //for positioning cat image
        top: 30,
        left: 150
      };
      this.setState({cat: !this.state.cat});
    },

    render: function () {
      var selected = this.state.cat ? 'selected' : '';
      var flyingcat = 'flyingcat ' + selected;
      return (
        <div onClick={this.toggleCat} className="photo">
         <img id="image" src={this.props.src}/> 
         <img className={flyingcat} style={catStyle} src={this.props.catphoto}/>
         <div className="overbox" >
          <div className="tagline overtext">{this.props.caption}</div>
         </div>
        </div>
      );
    }
  });

  return Photo;
});