import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.localApiUrl;

  getActivities(): import("rxjs").Observable<Activity[]> {
    return this.http.get<Activity[]>(this.baseUrl + '/activity');
  }

}
