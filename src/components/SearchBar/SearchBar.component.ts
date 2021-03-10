import { Component, OnInit ,Input} from '@angular/core';
import data from 'src/files/progs.json';
import { Iproject } from 'src/viewModels/Iproject';
@Component({
  selector: 'app-SearchBar',
  templateUrl: './SearchBar.component.html',
  styleUrls: ['./SearchBar.component.scss']
})
export class SearchBarComponent implements OnInit {
  listOfProgs: Iproject[] = data;
  listOfProgsfilterd = this.listOfProgs;
  Cities: string[] = [];
  CitiesWithoutDup: string[] = [];
  SelectedCity1: string ='';
  learningField:string=""
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.listOfProgs.length; i++) {
      this.Cities.push(this.listOfProgs[i].city);
    }
    for (let i = 0; i < this.Cities.length; i++) {
      if (this.CitiesWithoutDup.includes(this.Cities[i]) === false)
        this.CitiesWithoutDup.push(this.Cities[i]);
    }
  }
  Search(){
    
  }
}
