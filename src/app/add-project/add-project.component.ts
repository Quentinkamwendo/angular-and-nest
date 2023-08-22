import { Component, OnInit } from '@angular/core';
import { AddProjectService } from './add-project.service';
import { Project } from './project.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  ngOnInit(): void {

  }
  projectForm!: FormGroup;
  constructor(private fb: FormBuilder, private projectService: AddProjectService) {
    this.myForm();
  }

  myForm() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
      documentation: ['', Validators.required]
    })
  }
  selectedFile: File | null = null;

  onSubmit() {
    const project: Project = {
      name: this.projectForm.value.name,
      duration: this.projectForm.value.duration,
      description: this.projectForm.value.description,
      documentation: this.projectForm.value.documentation,
    };

    this.projectService.addProject(project).pipe(first()).subscribe({
      next: () => {
        (response: any) => {
          console.log('Added project: ', response);
          // reset the form
          this.projectForm.reset();
        }

      },
      error: (error) => {
        console.log('Error adding project:', error);

      }
    })
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
  }
}
