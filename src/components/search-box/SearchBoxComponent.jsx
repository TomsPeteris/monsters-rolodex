import React from "react"

// Assets
import "./SearchBoxStyle.css"

export const SearchBox = props => (
	<input 
		type="search" 
		placeholder={ props.placeholder } 
		onChange={ props.handleChange  }
		className="search"
	/>
)
