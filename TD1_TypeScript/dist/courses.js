"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveCourse = exports.VideoCourse = exports.Course = void 0;
class Course {
    constructor(title) {
        this.title = title;
    }
}
exports.Course = Course;
class VideoCourse extends Course {
    constructor(title, duration) {
        super(title);
        this.duration = duration;
    }
    getDescription() {
        return `${this.title} — Video course (${this.duration} minutes)`;
    }
}
exports.VideoCourse = VideoCourse;
class LiveCourse extends Course {
    constructor(title, date) {
        super(title);
        this.date = date;
    }
    getDescription() {
        return `${this.title} — Live session on ${this.date.toLocaleString()}`;
    }
}
exports.LiveCourse = LiveCourse;
