/*Navigation Bar component*/

define(function (require) {
	var React = require('react');

	var Navbaritem = React.createClass({

		render: function () {
			return (
				<li>
					<a href={this.props.url}>{this.props.text}</a>
				</li>
			);
		}

	});
	return Navbaritem;
});