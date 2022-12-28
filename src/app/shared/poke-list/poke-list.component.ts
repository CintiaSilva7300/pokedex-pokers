import { Component, OnInit } from '@angular/core';
import { PokeAapiService } from 'src/app/service/pokeapi.service';


@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  getAllPokemons: any;

  constructor(private pokeAapiService: PokeAapiService){}

  ngOnInit(): void {
    this.pokeAapiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    )
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter(( res:any )=> {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter;
  }
}
