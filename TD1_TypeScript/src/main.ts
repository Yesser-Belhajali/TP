import { User } from "./models";
import { UserRepository } from "./repositories";
import { VideoCourse, LiveCourse } from "./courses";
import { ApiResponse } from "./models";

const student: User = { id: 1, name: "Amina", role: "student", email: "amina@example.com" };
const teacher: User = { id: 2, name: "Mohamed", role: "teacher", email: "mohamed@example.com" };

const userRepo = new UserRepository();
userRepo.add(student);
userRepo.add(teacher);

const vCourse = new VideoCourse("TypeScript Basics", 90);
const lCourse = new LiveCourse("Algèbre linéaire — Q&A", new Date("2025-12-01T18:00:00"));

console.log("Courses descriptions:");
console.log(" -", vCourse.getDescription());
console.log(" -", lCourse.getDescription());

console.log("\nUsers:");
console.table(userRepo.getAll());

export function fetchUser(id: number): ApiResponse<User> {
  const u = userRepo.getById(id);
  if (!u) {
    return { error: `User with id ${id} not found.` };
  }
  return { data: u };
}

console.log("\nfetchUser(1):", fetchUser(1));
console.log("fetchUser(999):", fetchUser(999));