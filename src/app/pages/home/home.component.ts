import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allProjects: any[] = [];
  
  constructor(private _projectsService: ProjectsService){}

  ngOnInit(): void {
    this.allProjects = this._projectsService.projects()
  }
}
