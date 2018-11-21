import React, {Component} from'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {Robots} from './Robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			Robots: Robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filteredRobots);
	}

	render() {
		return(
			<div className='tc'>
				<h1> RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList Robots={this.state.Robots} />
			</div>
		);
	}
}

export default App;