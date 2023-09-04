import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  project: any = {}

  constructor(
    private route:ActivatedRoute,
    private _projectsService:ProjectsService
  ){
    this.route.params.subscribe(params=>{
      this.project = this._projectsService.project(params['id'])
    })
  }
}
