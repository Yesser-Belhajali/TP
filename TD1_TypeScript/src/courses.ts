export abstract class Course {
  constructor(public title: string) {}
  abstract getDescription(): string;
}

export class VideoCourse extends Course {
  constructor(title: string, public duration: number) {
    super(title);
  }

  getDescription(): string {
    return `${this.title} — Video course (${this.duration} minutes)`;
  }
}

export class LiveCourse extends Course {
  constructor(title: string, public date: Date) {
    super(title);
  }

  getDescription(): string {
    return `${this.title} — Live session on ${this.date.toLocaleString()}`;
  }
}
