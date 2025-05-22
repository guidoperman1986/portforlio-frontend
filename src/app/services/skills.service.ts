import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { SoftSkill } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  httpClient = inject(HttpClient);


  getSoftSkills() {
    return this.httpClient.get<SoftSkill[]>(environment.localApiUrl + '/soft-skill');
  }
}
