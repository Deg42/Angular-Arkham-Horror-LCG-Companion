import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService } from './service/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ClearStorageDialogComponent } from './clear-storage-dialog/clear-storage-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Arkham-Horror-LCG-Companion';

  constructor(private localStorageService: LocalStorageService, private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ClearStorageDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clearStorage();
      }
    });
  }

  clearStorage() {
    this.localStorageService.clear();
    location.reload();
  }
}
