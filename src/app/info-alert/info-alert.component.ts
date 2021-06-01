import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss']
})
export class InfoAlertComponent implements OnInit {

  modalTitle: string;
  modalMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
  }
  ngOnInit(): void {
  }

}
