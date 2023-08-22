import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {
  private apiUrl = 'http://your-api-uri/projects';


  constructor(private http: HttpClient) { }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project)
  }
}
