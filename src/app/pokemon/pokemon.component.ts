import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { POKEMON } from '../mockPokemon';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemon[] = POKEMON;

  constructor() { }

  ngOnInit(): void {
  }

}
