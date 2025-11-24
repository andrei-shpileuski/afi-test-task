import { Component } from '@angular/core';
import {Header} from './header/header';
import {HttpClient} from '@angular/common/http';
import {Course, CoursesApiService} from './services/courses-api-service';
import {BehaviorSubject} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {Card} from './card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, AsyncPipe, Card],
  styleUrl: './app.scss'
})
export class App {
  limit = 3;
  offset = 0;

  courses = new BehaviorSubject<Course[]>([]);

  constructor(private coursesApi: CoursesApiService) {
    this.coursesApi.getCoursesWithPagination(this.limit, this.offset).subscribe(courses => {
      this.courses.next(courses)
      this.offset = this.offset + 3
      // this.limit = this.limit + 3
    })
  }

  loadMore() {
    const currCourses = this.courses.value
    this.coursesApi.getCoursesWithPagination(this.limit, this.offset).subscribe(courses => {
      this.courses.next([...currCourses, ...courses])
      this.offset = this.offset + 3
      // this.limit = this.limit + 3
    })
  }
}
