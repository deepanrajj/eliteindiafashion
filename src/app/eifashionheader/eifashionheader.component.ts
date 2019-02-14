import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eifashionheader',
  templateUrl: './eifashionheader.component.html',
  styleUrls: ['./eifashionheader.component.scss']
})
export class EifashionheaderComponent implements OnInit {
  selectedItem:string = 'home';

  constructor() { }

  ngOnInit() {

    console.log(this.selectedItem);
  }

  listClick(newValue: string): void {
      console.log(newValue);
      this.selectedItem = newValue;
  }


}
