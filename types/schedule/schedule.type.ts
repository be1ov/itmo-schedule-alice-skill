import { LessonType } from './lesson.type';

export class Day {
  date: number;
  lessons: LessonType[];
}

export type ScheduleType = Day[];
