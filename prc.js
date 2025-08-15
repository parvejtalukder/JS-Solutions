const MyDB = {
    universityName: "Example University",
    students: [
        {
            id: 1,
            name: "Alice",
            age: 20,
            courses: [
                { courseId: 101, courseName: "Math 101", professor: "Dr. Smith" },
                { courseId: 102, courseName: "History 201", professor: "Dr. Jones" }
            ]
        },
        {
            id: 2,
            name: "Bob",
            age: 22,
            courses: [
                { courseId: 103, courseName: "Programming Basics", professor: "Dr. Miller" }
            ]
        }
    ],
    professors: [
        { id: 1, name: "Dr. Smith", department: "Mathematics" },
        { id: 2, name: "Dr. Jones", department: "History" },
        { id: 3, name: "Dr. Miller", department: "Computer Science" }
    ],
    courses: [
        { id: 101, name: "Math 101", professorId: 1 },
        { id: 102, name: "History 201", professorId: 2 },
        { id: 103, name: "Programming Basics", professorId: 3 }
    ]
};

// Access data example:
console.log(MyDB.students[0].name); // Alice
console.log(MyDB.students.courses.professor); // Dr. Jones
