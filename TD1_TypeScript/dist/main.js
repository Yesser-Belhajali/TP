"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
const repositories_1 = require("./repositories");
const courses_1 = require("./courses");
const student = { id: 1, name: "Amina", role: "student", email: "amina@example.com" };
const teacher = { id: 2, name: "Mohamed", role: "teacher", email: "mohamed@example.com" };
const userRepo = new repositories_1.UserRepository();
userRepo.add(student);
userRepo.add(teacher);
const vCourse = new courses_1.VideoCourse("TypeScript Basics", 90);
const lCourse = new courses_1.LiveCourse("Algèbre linéaire — Q&A", new Date("2025-12-01T18:00:00"));
console.log("Courses descriptions:");
console.log(" -", vCourse.getDescription());
console.log(" -", lCourse.getDescription());
console.log("\nUsers:");
console.table(userRepo.getAll());
function fetchUser(id) {
    const u = userRepo.getById(id);
    if (!u) {
        return { error: `User with id ${id} not found.` };
    }
    return { data: u };
}
console.log("\nfetchUser(1):", fetchUser(1));
console.log("fetchUser(999):", fetchUser(999));
