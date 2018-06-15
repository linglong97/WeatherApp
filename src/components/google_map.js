import React from "react";

class GoogleMap extends React.Component{

	//lifecycle method, gets rendered automatically once u render to the screen, create an embedded google maps
	componentDidMount(){
		new google.maps.Map(this.refs.map,{
			zoom:12,
			center:{
				lat:this.props.lat,
				lng:this.props.lng
			}
		});
	}
	render(){
		return(
			<div ref = "map" />
		);
	}
};

export default GoogleMap;