import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from '../models/issue';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { InstgridComponent } from '../instgrid/instgrid.component';
import { Router } from '@angular/router';
import { Branch } from '../models/branch';
const headerDict = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const requestOptions = {
  headers: new HttpHeaders(headerDict)
};
@Injectable()
export class DataService {
  private readonly API_URL = 'https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/getinstdetails';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) { }

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
      console.log(data);

      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addIssue(issue: Issue): void {
    console.log(issue);
    let params = {
      'instName': issue.instName,
      'instAddr': issue.instAddr,
      'spocName': issue.spocName,
      'spocContact': issue.spocContact,
      'InstContact': issue.InstContact

    }
    this.httpClient.put<Issue[]>(
      "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/addinst",
      params
    ).subscribe(res => {
      this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
        alert("Institute was added successfully.")
      },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        });
    }, err => {
      console.log(err);
    });

  }

  updateIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }

  //// Add Branch
addBranch(branch: Branch): void {
  console.log(branch);
  let params = {
    'instName': branch.instName,
    'Branch': branch.Branch,
    'BranchAdminContact': branch.BranchAdminContact,
    'BranchAdminEmail': branch.BranchAdminEmail

  };
  this.httpClient.put<Branch[]>(
    "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/addbranch",
    params
  ).subscribe(res => {
    this.httpClient.get<Branch[]>(this.API_URL).subscribe(data => {
      alert("Branch was added successfully.")
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }, err => {
    console.log(err);
  });

}
}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




