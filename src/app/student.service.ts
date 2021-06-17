import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudent } from './i-student';
const URL_BACKEND = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAllStudent(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(URL_BACKEND + "student");
  }

  getStudenttById(id: any): Observable<IStudent> {
    return this.http.get<IStudent>(URL_BACKEND + 'student' + `${id}`);
  }

  createStudent(student : IStudent): Observable<IStudent>{
    return this.http.post<IStudent>(URL_BACKEND+ "student/create",student);
  }

  updateStudent(id: any , student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(URL_BACKEND +'student/' +id , student);
  }

  deleteStudent(id : any): Observable<IStudent[]>{
    return this.http.delete<IStudent[]>(URL_BACKEND + 'student/' + id);
  }

  constructor(private http : HttpClient) { }
}
