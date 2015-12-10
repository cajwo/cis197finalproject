/* Navigation bar component */

define(function (require) {

	var React = require('react');
	var Navbaritem = require('jsx!app/Navbaritem');
	
	var Navbar = React.createClass({

		render: function () {
			var items = this.props.items.map(function (item) {
				return <Navbaritem text={item.text} url={item.url}/>
			});

			return (
				<ul className="navbar">
					{items}
				</ul>
			);
		}
	});
	return Navbar;
});