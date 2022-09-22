 const students = [
  {
    name: 'Diego',
    firstGrade: 5,
    secondGrade: 7,
  },
  {
    name: 'Paulo',
    firstGrade: 4,
    secondGrade: 8,
  },
  {
    name: 'Caio',
    firstGrade: 9,
    secondGrade: 6,
  },
  {
    name: 'Lucas',
    firstGrade: 7,
    secondGrade: 7,
  },
  {
    name: 'Ana',
    firstGrade: 6,
    secondGrade: 5,
  }
]

function average(firstGrade, secondGrade) {
  return (Number(firstGrade + secondGrade) / 2).toFixed(2)
};

function result(student) {
  return `Aluno(a) ${student.name}, sua média foi de: ${average(student.firstGrade, student.secondGrade)}`
}

students.map((student) => {
  if (average(student.firstGrade, student.secondGrade) >= 7) {
    console.log(`${result(student)}. Parabéns ${student.name}`)
  } else if (average(student.firstGrade, student.secondGrade) < 7) {
    console.log(`${result(student)}. Não foi dessa vez ${student.name}`)
  }
})