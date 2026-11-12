const nomeCurso = "Técnico em Informática";
const cargaHoraria = 1200;

let vagasRestantes = 22;
let turmaAberta = true;

vagasRestantes = 19;

console.log("Nome do Curso: " + nomeCurso, " - ", typeof(nomeCurso));
console.log("Carga Horária: " + cargaHoraria + " horas", " - ", typeof(cargaHoraria));
console.log("Vagas Restantes: " + vagasRestantes, " - ", typeof(vagasRestantes));
console.log("Turma Aberta: " + turmaAberta, " - ", typeof(turmaAberta));    

console.table({
    "Nome do Curso": nomeCurso,
    "Carga Horária": cargaHoraria + " horas",
    "Vagas Restantes": vagasRestantes,
    "Turma Aberta": turmaAberta
});

console.log(`Nome do Curso: ${nomeCurso} - Carga Horária: ${cargaHoraria} horas - Vagas Restantes: ${vagasRestantes} - Turma Aberta: ${turmaAberta}`);
console.log();
console.log(`Nome do Curso: ${nomeCurso} - Carga Horária: ${cargaHoraria + 100} horas - Vagas Restantes: ${vagasRestantes-5} - Turma Aberta: ${turmaAberta}`);


// const nomeCurso = "tecnico informática";
// const cargaHoraria = 1200;

// console.log(nomeCurso + " - Carga horária: " + cargaHoraria + " horas");
