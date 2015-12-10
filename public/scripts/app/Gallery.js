/*Gallery component for photos*/

define(function (require) {
  var React = require('react');
  var Photo = require('jsx!app/Photo');
  var Gallery = React.createClass({
    
    render: function () {
      var thisgallery = this.props;
      var gallery = this.props.photos.map(function (photo) {
        var index = Math.floor(Math.random() * 3);
        //choose random cat photo
        return <Photo src={photo.url} catphoto={thisgallery.cats[index]} 
        caption={photo.caption} ref='photo'/>
      });

      return (
        <div className="gallery">
          {gallery}
        </div>
      );
    }
  });

  return (Gallery);
});