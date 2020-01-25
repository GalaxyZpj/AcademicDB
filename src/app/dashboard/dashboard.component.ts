import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataFetchService } from '../shared/data-fetch.service';

// declare var terms: { term: string, maxMarks: string }[];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  schoolcode: string = 's1001';

  // Class Box Variables
  addStandard: string;
  addSection: string;

  // Subject Box Variables
  choosedStandard: string;
  addSubject: string;
  // addSubjectTerms: any[];
  addSubjectTerms: any[] = [{
    term: '',
    maxMarks: ''
  }]


  constructor(private router: Router, private dialog: MatDialog, private data: DataFetchService) { }
  
  onClickTile(operation: string, listType: string, chooser: string) {
    let goToPage: string; 
    switch(operation) {
      case 'schoolProfile':
        goToPage = 'schoolProfile';
        break;
      default:
        goToPage = listType;
    }
    this.router.navigate([goToPage], { queryParams: { 'schoolcode': this.schoolcode, 'operation': operation, 'chooser': chooser } });
  }

  openClassBox() {
    const dialogRef = this.dialog.open(AddClassBox, {
      width: '350px',
      data: { standard: this.addStandard, section: this.addSection, terms: this.addSubjectTerms }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          console.log(result);
          console.log('Now this will run.');
          this.data.cloudantHttp([this.schoolcode, 'root:class_list']).subscribe(
            response => {
              let classList: string[] = response['class_list'];
              let revID = response['_rev'];
              console.log(classList);
              let standard = result['standard'];
              classList.push('class_'+standard);
              console.log(classList);
              let updatedData = {
                "class_list": classList,
                "_rev": revID,
              }
              let subjectData = {
                "_id": 'subjects:class_'+standard,
                "subjects": []
              }
              this.data.cloudantHttpPut([this.schoolcode, 'root:class_list'], updatedData).subscribe(
                request => {
                  console.log(request);
                }
              );

              this.data.cloudantHttpPost([this.schoolcode], subjectData).subscribe(
                response => {
                  console.log(response);
                }
              );

            }
          );
          console.log('This is closed.');
        }
        console.log('The dialog was closed.')
      }
    );

  }

  openSubjectBox() {
    const dialogRef = this.dialog.open(AddSubjectBox, {
      width: '350px',
      data: { standard: this.choosedStandard, subjectName: this.addSubject }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          console.log(result);
          let terms = {
              "FA1": "30",
              "FA2": "30",
              "FA3": "30",
              "FA4": "30",
              "SA1": "60",
              "SA2": "60"
            }
            let subject = result['subjectName'];
            let standard = result['standard'];
          
          this.data.cloudantHttp([this.schoolcode, 'subjects:'+standard]).subscribe(
            result => {
              
              let revID = result['_rev'];
              console.log(revID);
              let updatedData = {
               'name': subject,
                'maxMarks': terms
              }
              let subjects: any[] = result['subjects'];
              subjects.push(updatedData);

              let newDoc = {
                '_rev': revID,
                'subjects': subjects
              }
              this.data.cloudantHttpPut([this.schoolcode, 'subjects:'+standard], newDoc).subscribe(
                response => {
                  console.log(response);
                }
              );
            }
          );


          // this.data.cloudantHttpPut([this.schoolcode, 'subjects:class_'+standard], updatedData).subscribe(
          //   response => {
          //     console.log(response);
          //   }
          // );
          



        }
        console.log('The dialog was closed.')
      }
    );
  }
}


// Add Class Box
export interface DialogData {
  standard: string;
  section: string;
}

@Component({
  selector: 'add-class-box',
  templateUrl: './add-class-box.html',
})
export class AddClassBox {
  constructor( public dialogRef: MatDialogRef<AddClassBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


// Add Subject
export interface SubjectData {
  standard: string,
  subjectName: string,
  terms: any[]
}



@Component({
  selector: 'add-subject-box',
  templateUrl: './add-subject-box.html',
})
export class AddSubjectBox implements OnInit{
  schoolcode: string = 's1001';
  standardData: string[];
  standard: string;

  terms: any[] = [{
    term: '',
    maxMarks: ''
  }]
  // xdata = {
  //     standard: '',
  //     subjectName: '',
  //     terms: []
  //   }

  constructor( public dialogRef: MatDialogRef<AddSubjectBox>,
    @Inject(MAT_DIALOG_DATA) public data: SubjectData, private cloudant: DataFetchService) {
      // terms.push({
      //   term: '',
      //   maxMarks: ''
      // });
    }

  ngOnInit() {
    this.cloudant.cloudantHttp([this.schoolcode, 'root:class_list']).subscribe(
      doc => {
        this.standardData = doc['class_list'];
        console.log(this.standardData);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTerm() {
    this.terms.push({
      term: '',
      maxMarks: ''
    })
  }

  removeTerm(i: number) {
    this.terms.splice(i, 1);
  }


}
