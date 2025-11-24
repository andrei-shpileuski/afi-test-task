import {Component, Input} from '@angular/core';
import {Course} from '../services/courses-api-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() course!: Course;

  getProgressPercentage(): number {
    return this.course.duration > 0
      ? Math.round((this.course.progress / this.course.duration) * 100)
      : 0;
  }

  getFormattedDuration(): string {
    const minutes = Math.floor(this.course.duration / 60000);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours}ч ${remainingMinutes}м`;
    }
    return `${minutes}м`;
  }

  getFormattedDate(): string {
    return new Date(this.course.publishDate).toLocaleDateString('ru-RU');
  }

  getRatingStars(): number[] {
    return Array(5).fill(0).map((_, index) => index + 1);
  }
}
