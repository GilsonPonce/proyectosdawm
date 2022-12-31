import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from '../servicios/get-pokemon.service';

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.css']
})
export class EspecificacionesComponent {
  pokemonid: number = 0;
  altura: string = "";
  peso: string = "";
  name: string = "";
  habilidad: string[] = [];
  categoria: string = "";
  tipo: string[] = [];
  debilidad: string[] = [];
  color = '#9ADEF8';
  constructor(private route: ActivatedRoute, private servicePokemon:GetPokemonService){
    this.route.params.subscribe(params => {
      this.pokemonid = params['id'];
    });
  }

  ngOnInit(): void{
    let habilidades:string[] = [];
    let tipos:string[] = [];
    this.servicePokemon.getPokemonId(this.pokemonid).subscribe(data =>{
      this.altura = (data.height/10)+" m";
      this.peso = (data.weight/10)+" kg";
      this.name = data.name.toUpperCase();
      data.abilities.map(hab => {
        habilidades.push(hab.ability.url);
      });
      data.types.map(ty => {
        tipos.push(ty.type.url);
      });
      this.cargarCategoria();
      this.cargarHabilidades(habilidades);
      this.cargarTipo(tipos);
    });
  }

  cargarHabilidades(habilidades:string[]): void{
    habilidades.map(habi => {
      this.servicePokemon.getPokemonAbility(habi).subscribe(data => {
        data.names.map(na => {
          if(na.language.name == "es"){
            this.habilidad.push(na.name);
          }
        })
      });
    });
  }

  cargarTipo(tipos:string[]):void {
    let daños:string[] = [];
    tipos.map(ty => {
      this.servicePokemon.getPokemonType(ty).subscribe(data => {
        data.names.map( leg => {
          if(leg.language.name == "es"){
            this.tipo.push(leg.name);
          }
        })
        data.damage_relations.double_damage_from.map(dag => {
          daños.push(dag.url);
        })
        this.cargarDebilidad(daños);
      });
    })
  }

  cargarDebilidad(danos:string[]): void{
    danos.map(da => {
      this.servicePokemon.getPokemonType(da).subscribe(data => {
        data.names.map(nem => {
          if(nem.language.name == "es"){
            if(!this.debilidad.includes(nem.name)) this.debilidad.push(nem.name);
          }
        });
      });
    });
  }

  cargarCategoria(): void{
    this.servicePokemon.getPokemonSpecies(this.pokemonid).subscribe(data =>{
      data.genera.map(obj => {
        if(obj.language.name == "es"){
          this.categoria = obj.genus.split(' ')[1];
        }
      });
      localStorage.setItem("urlevolution",data.evolution_chain.url);
      switch(data.color.name){
        case "blue":
          this.color = '#7DB4C9';
          break;
        case "pink":
        case "red":
          this.color = '#BF4D73';
          break;
        case "yellow":
          this.color = '#E6B917';
          break;
        case "green":
          this.color = '#51A642';
          break;
        case "brown":
          this.color = '#968A56';
          break;
        case "black":
        case "white":
          this.color = 'gray';
          break;
        case "purple":
          this.color = '#3708D1';
          break;
        default:
          this.color = '#4DBF86'
      }
    })
  }

}
