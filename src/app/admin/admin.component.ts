import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message= [] as any;
 
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.message = this.shared.getMessage();
  }

  showMessage() {

  }

}
