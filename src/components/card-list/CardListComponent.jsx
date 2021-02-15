import React from "react"

// Components
import { Card } from "../card/CardComponent"

// Assets
import "./CardListStyle.css"

export const CardList = props => (
	<div className="card-list">
		{
			props.monsters.map(
				monster => (
					<Card key={ monster.id } monster={ monster } />
				)
			)
		}
	</div>
)
