import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-tableblock',
  templateUrl: './tableblock.component.html',
  styleUrls: ['./tableblock.component.css']
})
export class TableblockComponent implements OnInit {
  showProvince: boolean = false;
  showDistrict: boolean = false;
  selectedProvince: string = '';
  selectedDistrict: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }


  selectProvince(data) {
    this.selectedProvince = data;
    this.showProvince = false;
  }

  selectDistrict(data) {
    this.selectedDistrict = data;
    this.showDistrict = false;

  }
}
