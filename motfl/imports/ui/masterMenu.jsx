import React, { Component } from 'react';

/* TODO

Set up onClick goodies.

*/

export default class MasterMenu extends Component {
	/*
	constructor(){
		this.state = {
			icons:[ 
				{src:'img/menu/icon-gear.png', id:'Overview'},
				{src:'img/menu/icon-map.png', id:'Map'},
				{src:'img/menu/icon-ring.png', id:'Clan Ring'},
				{src:'img/menu/icon-structures.png', id:'Structures'},
				{src:'img/menu/icon-magicrituals.png', id:'Magic and Rituals'},
				{src:'img/menu/icon-treasure.png', id:'Treasure'},
				{src:'img/menu/icon-quill.png', id:'Statistics'}
			],
			width = "66",
			height = "66"
		};
	}
	
	
		
	getIcon() {
		return this.state.icons.map((item) => (
			<li className='master-menu-li'><img src={item.src} alt={item.id} width={this.state.width} height={this.state.height} /></li>
		));
	}

	render() {
		return (
			<div className="master-menu-wrapper"> 
				<ul className="master-menu-ul">
					<li className='master-menu-li'><img src="img/menu/icon-gear.png" alt="Main Menu" width="66" height="66" ></img></li>
					<hr></hr>
					{getIcons()}
				</ul>
			</div>
		);
	}
	*/			
	
	getIcons() {
		const icons = [ 
			{src:'img/menu/icon-general.png', id:'Overview'},
			{src:'img/menu/icon-map.png', id:'Map'},
			{src:'img/menu/icon-ring.png', id:'Clan Ring'},
			{src:'img/menu/icon-structures.png', id:'Structures'},
			{src:'img/menu/icon-magicrituals.png', id:'Magic and Rituals'},
			{src:'img/menu/icon-treasure.png', id:'Treasure'},
			{src:'img/menu/icon-quill.png', id:'Statistics'}
		]
		
		const width = 66;
		const height = width;
		
		return icons.map((item) => (
			<li className='master-menu-li'><img src={item.src} alt={item.id} width={width} height={height} /></li>
		));
	}	
	
	render() {
		return (
			<div className="master-menu-wrapper"> 
				<ul className="master-menu-ul">
					<li className='master-menu-li'><img src="img/menu/icon-gear.png" alt="Main Menu" width="66" height="66" ></img></li>
					<hr></hr>
					<li className='master-menu-li'><img src="img/menu/icon-general.png" alt="Ovierview" width="66" height="66" ></img></li>
					<li className='master-menu-li'><img src="img/menu/icon-map.png" alt="Map" width="66" height="66" ></img></li>
					<li className='master-menu-li'><img src="img/menu/icon-ring.png" alt="Clan Ring" width="66" height="66" ></img></li>
					<li className='master-menu-li'><img src="img/menu/icon-structures.png" alt="Structures" width="66" height="66" ></img></li>
					<li className='master-menu-li'><img src="img/menu/icon-magicrituals.png" alt="Magic and Rituals" width="66" height="66" ></img></li>
					<li className='master-menu-li'><img src="img/menu/icon-treasure.png" alt="Treasure" width="66" height="66" ></img></li>
					<li className='master-menu-li'><img src="img/menu/icon-quill.png" alt="Statistics" width="66" height="66" ></img></li>
				</ul>
			</div>
		);
	}
	
}
