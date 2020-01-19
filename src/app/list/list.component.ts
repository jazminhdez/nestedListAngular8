import { Component, Input } from '@angular/core';
import { Element } from '../models/Element';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{
  @Input() childs;

  constructor(private countryService: CountryService) { 
    
  }

  save(name,item){
    item.text=name;
    this.countryService.updateElement(item);
    item.editFlag=false;
  }
  addElement(name,item){
    let element = new Element();
    if(item.child.length>0){
      element.id=item.child[item.child.length-1].id+1;
    }
    else{
      element.id=1;
    }
    element.text= name;
    element.category= item.text;
    element.child=[];
    item.child.push(element);
    this.countryService.updateElement(item);
    item.saveFlag=false;
  }
  cancel(item){
    if(item && item.editFlag){
      item.editFlag=false;
    }
    if(item && item.saveFlag){
      item.saveFlag=false;
    }
  }
  add(item){
    item.saveFlag=true;
  }
  
  edit(item){
    item.editFlag=true;
  }
  delete(item,childs){
    let index= childs.indexOf(item);
    childs.splice(index,1);
  }

}
