import { Injectable } from '@angular/core';
import * as dataPortfolio from '../data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

   allProjects: Array<any> = []

  projects(){
    const { portfolio }: any = (dataPortfolio as any).default
    this.allProjects = portfolio;

    return this.allProjects
  }

  project(i: number){
    return this.allProjects[i];
  }
}
