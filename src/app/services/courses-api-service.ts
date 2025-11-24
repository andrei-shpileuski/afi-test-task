import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  progress: number;
  duration: number;
  rating: number;
  publishDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/courses/${id}`);
  }

  getCoursesWithPagination(limit: number, offset: number): Observable<Course[]> {
    return this.http.get<Course[]>(
      `${this.apiUrl}/courses?_limit=${limit}&_start=${offset}`
    );
  }

  searchCourses(query: string): Observable<Course[]> {
    return this.http.get<Course[]>(
      `${this.apiUrl}/courses?q=${query}`
    );
  }

  getCoursesSortedByRating(): Observable<Course[]> {
    return this.http.get<Course[]>(
      `${this.apiUrl}/courses?_sort=rating&_order=desc`
    );
  }
}
