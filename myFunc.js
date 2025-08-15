const prompt = require('prompt-sync')({ sigint: true });

let MyDB = {
    students: [
        {
            id: 48002,
            name: "Md Parvej Husen Talukder",
            dept: "Computer Science and Engineering",
            uni: "Sylhet International Univetsity"
        },
        {
            id: 48003,
            name: "Emran Hussain",
            dept: "Law",
            uni: "SIU"
        },
        {
            id: 48012,
            name: "Reduan Hossen"
        }
    ]
};

const inp = prompt("Enter Roll: ");
for (const student of MyDB.students) {
    if (student.id == inp) {
        console.log(student.name);
        break; 
    }
}