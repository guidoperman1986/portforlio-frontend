import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { TimelineItem } from "../interfaces/resume.interface";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    http = inject(HttpClient);
    baseUrl = environment.localApiUrl;

    getResume() {
        return this.http.get<{ content: string }>(this.baseUrl + '/resume');
    }

    getEducation() {
        return this.http.get<TimelineItem[]>(this.baseUrl + '/education');
    }

    getExperience() {
        return this.http.get<TimelineItem[]>(this.baseUrl + '/experience');
    }

    getLanguage() {
        return this.http.get<{ content: string }>(this.baseUrl + '/language');
    }

    getSkill() {
        return this.http.get<{ content: string }>(this.baseUrl + '/skill');
    }
}