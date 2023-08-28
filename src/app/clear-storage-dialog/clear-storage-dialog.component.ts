import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-clear-storage-dialog',
  templateUrl: './clear-storage-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ClearStorageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ClearStorageDialogComponent>) {}
  
  closeToClearStorage(){
    this.dialogRef.close(true);
  }
}
