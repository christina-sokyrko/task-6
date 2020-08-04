const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }


// Task 1

/*function getSubjects (obj) {
  const bigLetter = (string) => string.charAt(0).toUpperCase() + string.splice(1);
  const space = (string) => string.replace("_", " ");
  const subjectsList = Object.keys(obj.subjects).map((subject) => {
    bigLetter(subject);
    space(subject);
  })
  return (obj.name + ": " + subjectsList);
}
document.write (getSubjects(students[0]) + "<br/>");
document.write (getSubjects(students[1]) + "<br/>");
document.write (getSubjects(students[2]) + "<br/>");

// Task 2

/*function getAverageMark (obj) {
  const marksList = Object.values(obj.subjects).split('').join('');
  const marksSum = marksList.reduce((acc, elem) => acc += elem);
  const average = marksSum / marksList.length;
  return (obj.name + ": " + average);
}
document.write (getAverageMark(students[0]) + "<br/>");
document.write (getAverageMark(students[1]) + "<br/>");
document.write (getAverageMark(students[2]) + "<br/>");*/

//Task 3

/*function getStudentInfo (obj) {
  const avMark = getAverageMark(obj);
  return (obj.name + "," + obj.course + "," + avMark);
}
document.write (getStudentInfo(students[0]) + "<br/>");
document.write (getStudentInfo(students[1]) + "<br/>");
document.write (getStudentInfo(students[2]) + "<br/>");

// Task 4

function getStudentsNames (arr) {
  const names = arr.map((obj) => obj.name);
  return (names.sort());
}
document.write (getStudentsNames(students));

// Task 5

function getBestStudent (arr) {
  const marks = arr.map((obj) => getAverageMark (obj));
  const bestStudent = arr[marks.indexOf(Math.max(...marks))];
  return bestStudent;
}
document.write (students);*/

// Task 6

function calculateWordLetters (word) {
  const wordObj = {};
  for (elem of word) {
    if wordObj[elem] {
      wordObj[elem]++;
    }
    else {
      wordObj[elem] = 1;
    }
  }
  return wordObj;
}
document.write (calculateWordLetters (antananarivo));
