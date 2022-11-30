import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  titles = [ 
    {id: 1, name: 'Replicarea imaginii folosind angular'},
    {id: 2, name: 'Folosirea a minim 2 componente'},
    {id: 3, name: 'Minim 6 carduri cu titlu, descriere si buton'},
    {id: 4, name: 'Folosirea directivei *ngFor'},
    {id: 5, name: 'Folosirea elementelor <h1>, <a>, <img>, etc.'},
    {id: 6, name: 'Culorile, textul si imaginea'},
    {id: 7, name: 'Fara librarii de UI'},
  ];

  checked = [ false, false, false, false, false, false, false ]

  check(id: number) {
    document.getElementById(id + "")!.innerHTML = "Checked";
    this.checked[id] = true;
  }
}
