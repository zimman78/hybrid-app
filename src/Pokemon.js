import React from 'react';
import { View, Text, Image } from 'react-native';
import pokemon from './pokemonStore';

const Pokemon = props => {
	const examplePokemon = pokemon[0];
	return (
		<View>
			<View>
				<View>
					<Text>{`#${examplePokemon.number}`}</Text>
				</View>
				<View>
					<Text>{`Name: ${examplePokemon.name}`}</Text>
				</View>
				<View>
					<Text>{`Type: ${examplePokemon.type}`}</Text>
				
	)
}