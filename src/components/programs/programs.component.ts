import { Component, OnInit } from '@angular/core';
import data from 'src/files/progs.json';
import { Iproject } from 'src/viewModels/Iproject';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  listOfProgs: Iproject[] = data;
  listOfProgsfilterd = this.listOfProgs;
  Cities: string[] = [];
  CitiesWithoutDup: string[] = [];
  Schools: string[] = [];
  SchoolsWithoutDup: string[] = [];
  Fields: string[] = [];
  FieldsWithoutDup: string[] = [];
  SelectedCity: string = '';
  SelectedSchool: string = '';
  SelectedField: string = '';
  language:string="";
  Program:string='';
  sort:string="";
  learningField:string=""
  SelectedCity1: string = '';

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.listOfProgs.length; i++) {
      this.Cities.push(this.listOfProgs[i].city);
      this.Schools.push(this.listOfProgs[i].school);
      this.Fields.push(this.listOfProgs[i].type);

    }
    for (let i = 0; i < this.Cities.length; i++) {
      if (this.CitiesWithoutDup.includes(this.Cities[i]) === false)
        this.CitiesWithoutDup.push(this.Cities[i]);
    }
    for (let i = 0; i < this.Schools.length; i++) {
      if (this.SchoolsWithoutDup.includes(this.Schools[i]) === false)
        this.SchoolsWithoutDup.push(this.Schools[i]);
    }
    for (let i = 0; i < this.Fields.length; i++) {
      if (this.FieldsWithoutDup.includes(this.Fields[i]) === false)
        this.FieldsWithoutDup.push(this.Fields[i]);
    }

  }
  radioforLanguageChange(event: any) {
    if( event.target.value=='All')
    this.language="";
    else
    this.language = event.target.value;
  }
  radioforProgramChange(event: any) {
    this.Program = event.target.value;
  }
  radioforSortingChange(event: any) {
    this.sort = event.target.value;
  }
  Search() {
    this.listOfProgsfilterd = this.listOfProgs.filter(item =>
      item.Name.includes(this.learningField)
      && item.city.includes(this.SelectedCity1) 
    )
  }
  Search2() {
    this.listOfProgsfilterd = this.listOfProgs.filter(item =>
      item.school.includes(this.SelectedSchool)
      && item.city.includes(this.SelectedCity)
      && item.level.includes(this.Program)
      && item.type.includes(this.SelectedField)
      && item.Language.includes(this.language)
    )

    if(this.sort="lowtohigh")
    this.listOfProgsfilterd.sort((a,b) =>(Number(a.fee.replace(",",""))) > (Number(b.fee.replace(",","")))?1:-1)
    
    else if(this.sort="hightolow")
    this.listOfProgsfilterd.sort((a,b) =>(Number(b.fee.replace(",","")))-(Number(a.fee.replace(",",""))))



    console.log(this.SelectedCity)
    console.log(this.listOfProgsfilterd);
  }



}
