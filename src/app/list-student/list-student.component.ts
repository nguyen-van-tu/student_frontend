import { Component, OnInit } from '@angular/core';
import { IStudent } from '../i-student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  listStudents : Array< IStudent> =[]

  constructor(private studentService : StudentService) { 
    this.getAllStudent();
  }

  ngOnInit(): void {
  }

  getAllStudent(){
    this.studentService.getAllStudent().subscribe(student =>{
      console.log("test")
      this.listStudents = student
      console.log("test2")
    });
  }


}
