import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartsComponent } from '../charts/charts.component';
import { Chart } from '../shared/chart';

@Component({
  selector: 'app-chart-details',
  templateUrl: './chart-details.component.html',
  styleUrls: ['./chart-details.component.scss']
})
export class ChartDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChartsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Chart) {
                console.log(data);
               }

  ngOnInit(): void {
  }

}
