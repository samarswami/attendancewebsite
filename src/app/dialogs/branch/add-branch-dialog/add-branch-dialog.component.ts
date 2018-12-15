import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {FormControl, Validators} from '@angular/forms';
import {Branch} from '../../../models/branch';

@Component({
  selector: 'app-add-branch-dialog',
  templateUrl: './add-branch-dialog.component.html',
  styleUrls: ['./add-branch-dialog.component.css']
})

export class AddBranchDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddBranchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Branch,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addBranch(this.data);
  }
}

