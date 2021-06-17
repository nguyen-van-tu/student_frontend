import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from '../i-student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  sub: Subscription = new Subscription; 
  students : IStudent = {
    id : "",
    studentCode : "",
    name : "",
    gender : "",
    address: ""

  }


  constructor(private router: Router,
    private studentService: StudentService,
    private activatedRouter: ActivatedRoute,
    ){
      this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) =>{
        this.students.id = Number(paraMap.get('id'));
        this.getStudentById(this.students.id)
        }
      );
    }

  ngOnInit(): void {
  }
  private getStudentById(id:any){
    this.studentService.getStudenttById(id).subscribe(a=>{
      this.students = a;
    })
  }

  updateStudent(id:any){
    this.studentService.updateStudent(id,this.students).subscribe(() =>{
      console.log("test3")
      this.router.navigate(['/'])
    });
  }
}
