import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { MatDialog } from '@angular/material/dialog';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  
  historicItems: any[] = []; // Replace any[] with your actual data type

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    // Fetch historic items data from service or wherever you are getting it
    this.historicItems = [
      { referenceId: '1', dateTime: '2024-06-21 10:30:00' },
      { referenceId: '2', dateTime: '2024-06-20 15:45:00' },
      // Add more items as needed
    ];
  }

  showDetails(item: any) {
    // Logic to show details for the selected item
    console.log('Showing details for:', item);
   
      const dialogRef = this.dialog.open(InvoiceComponent, {
        width: '600px', // Adjust as needed
        position: {
          top: '50px', // Adjust to center vertically
        }
      });
    // Implement your details display logic here, e.g., open a modal
  }

}
