// ===== VARIABLES GLOBALES =====
const studentsDatabase = {
    "U2303057N0071": { name: "GONZALEZ LARA MARTHA ESMERALDA", career: "Licenciatura en Ingeniería en Tecnologías de Información" },
    "U2303057N0141": { name: "JARAMILLO ROMERO IVAN", career: "Licenciatura en Ingeniería en Tecnologías de Información" },
    "U2303057N0111": { name: "JUAREZ JACINTO MARIO ADAN", career: "Licenciatura en Ingeniería en Tecnologías de Información" },
    "U2303057N0105": { name: "MERINO ZAPIAIN ANA MAGDALA", career: "Licenciatura en Ingeniería en Tecnologías de Información" },
    "U2303057N0068": { name: "PEREZ TAVERA GUADALUPE BERENICE", career: "Licenciatura en Ingeniería en Tecnologías de Información" },
    "U2303057N0116": { name: "RANGEL AGUAYO ANGEL", career: "Licenciatura en Ingeniería en Tecnologías de Información" },
    "U2303057N0155": { name: "DE HARO SEGURA DENIEL", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0020": { name: "GARCIA ROMERO CENOBIO", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0049": { name: "GUTIERREZ GUTIERREZ DANNA LIZBETH", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0080": { name: "HERNANDEZ VILLEGAS FATIMA", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0070": { name: "LUCIO RODRIGUEZ EYMI JOSELIN", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0012": { name: "MACHUCA HERNANDEZ JUAN SOLEDAD", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0021": { name: "MEDELLIN MARQUEZ MAYRA JAZMIN", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0046": { name: "MEJIA BANDA LUIS ERNESTO", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0086":极
    "U2303057N0064": { name: "MENDOZA FLORES SANDY", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0108": { name: "MORUA ZUÑIGA PATRICIA BIRIDIANA", career: "Licenciatura en Ingeniería Industrial" },
    "U2203057N0070": { name: "ORTIZ CHAVEZ JOSE MANUEL", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0001": { name: "ORTIZ ORTIZ LUIS ALEJANDRO", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0110": { name: "PEREZ RANGEL JORGE ARMANDO", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0039": { name: "ROCHA SALGADO JHONATAN ISAAC", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0066": { name: "RODRIGUEZ GARCIA DAISA GUADALUPE", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0092": { name: "RODRIGUEZ GARCIA MANUEL EDUARDO", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0014": { name: "RODRIGUEZ PADILLA JORGE ALBERTO", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0041": { name: "ROSALES MARQUEZ EDGAR", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0077": { name: "VEGA CORREA ROSA ISELA", career: "Licenciatura en Ingeniería Industrial" },
    "U2303057N0152": { name: "YAÑEZ BERNAL GEMMA", career: "Licenciatura en Ingeniería Industrial" }
};

let currentStudent = null;
let circuitAnswers = {};
let attempts = {
    '1a': 5, '1b': 5, '2a': 5, '2b': 5,
    '3simplified': 5, '3table': 5, 
    '4simplified': 5, '4table': 5, '4karnaugh': 5
};

// ===== VARIACIONES DE EJERCICIOS =====
const exerciseVariants = {
    ex1a: [
        {
            expression: "A̅B̅ + A̅B",
            answer: ["A'", "A̅", "~A"],
            circuit_correct: "B"
        },
        {
            expression: "XȲ + XY", 
            answer: ["X", "X"],
            circuit_correct: "A"
        },
        {
            expression: "P̅Q̅ + P̅Q",
            answer: ["P'", "P̅", "~P"],
            circuit_correct: "B"
        },
        {
            expression: "M̅N + MN",
            answer: ["N", "N"],
            circuit_correct: "A"
        },
        {
            expression: "AB̅ + AB",
            answer: ["A", "A"],
            circuit_correct: "B"
        }
    ],

    ex1b: [
        {
            expression: "AB + A̅B + A̅BC",
            answer: ["A + B", "B + A"],
            circuit_correct: "A"
        },
        {
            expression: "XY + X̅Y + XYZ",
            answer: ["Y", "Y"],
            circuit_correct: "B"
        },
        {
            expression: "PQ + P̅Q + PQR",
            answer: ["Q", "Q"],
            circuit_correct: "A"
        },
        {
            expression: "MN + M̅N + M̅NO",
            answer: ["N", "N"],
            circuit_correct: "B"
        },
        {
            expression: "ST + S̅T + S̅TU",
            answer: ["T", "T"],
            circuit_correct: "A"
        }
    ]
};

// ===== FUNCIÓN PARA GENERAR VERSIÓN ÚNICA =====
function generateStudentVersion(studentId) {
    const numericPart = studentId.replace(/\D/g, '');
    const hash = parseInt(numericPart.slice(-3)) || 0;
    return hash % 5;
}

// ===== FUNCIÓN PARA CARGAR EJERCICIOS POR VERSIÓN =====
function loadStudentExercises(version) {
    try {
        console.log(`🔄 Cargando ejercicios para versión ${version}...`);
        loadExercise1(version);
        console.log('🎉 Ejercicios cargados correctamente');
    } catch (error) {
        console.error('❌ Error al cargar ejercicios:', error);
    }
}

function loadExercise1(version) {
    const ex1a = exerciseVariants.ex1a[version];
    const ex1aTitle = document.querySelector('#ex1 .exercise-part h4');
    if (ex1aTitle) ex1aTitle.innerHTML = `a) ${ex1a.expression} (0.5 puntos)`;

    const ex1b = exerciseVariants.ex1b[version];
    const ex1bTitle = document.querySelectorAll('#ex1 .exercise-part h4')[1];
    if (ex1bTitle) ex1bTitle.innerHTML = `b) ${ex1b.expression} (0.5 puntos)`;
}

// ===== FUNCIONES PRINCIPALES =====
function updateStudentInfo() {
    const selectedId = document.getElementById('studentSelect').value;
    const nameField = document.getElementById('studentName');
    const careerField = document.getElementById('studentCareer');
    const startBtn = document.getElementById('startBtn');

    if (selectedId && studentsDatabase[selectedId]) {
        const student = studentsDatabase[selectedId];
        nameField.value = student.name;
        careerField.value = student.career;
        startBtn.disabled = false;
    } else {
        nameField.value = '';
        careerField.value = '';
        startBtn.disabled = true;
    }
}

function switchTab(tabName) {
    const allTabContents = document.querySelectorAll('.tab-content');
    allTabContents.forEach(tab => tab.classList.remove('active'));
    
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    const targetTab = document.getElementById(tabName);
    if (targetTab) targetTab.classList.add('active');
    
    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        if (button.getAttribute('onclick').includes(`'${tabName}'`)) {
            button.classList.add('active');
        }
    });
}

function startExam() {
    const selectedId = document.getElementById('studentSelect').value;
    
    if (!selectedId || !studentsDatabase[selectedId]) {
        alert('⚠️ Por favor selecciona una matrícula válida');
        return;
    }

    const studentData = studentsDatabase[selectedId];
    currentStudent = {
        id: selectedId,
        name: studentData.name,
        career: studentData.career,
        group: "5A"
    };

    const studentVersion = generateStudentVersion(selectedId);
    currentStudent.version = studentVersion;
    loadStudentExercises(studentVersion);

    console.log(`Estudiante: ${currentStudent.name} | Versión: ${studentVersion}`);
    switchTab('ex1');
}

function selectCircuitOption(exercise, option) {
    circuitAnswers[exercise] = option;
    const allRadios = document.querySelectorAll(`input[name="circuit${exercise}"]`);
    
    allRadios.forEach(radio => {
        const label = radio.nextElementSibling;
        if (radio.value === option) {
            label.style.color = '#1e3c72';
            label.style.fontWeight = 'bold';
            label.style.backgroundColor = '#e3f2fd';
            label.style.padding = '5px';
            label.style.borderRadius = '5px';
        } else {
            label.style.color = '#495057';
            label.style.fontWeight = 'normal';
            label.style.backgroundColor = 'transparent';
            label.style.padding = '0';
            label.style.borderRadius = '0';
        }
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de Examen Inicializado');
    document.getElementById('studentSelect').addEventListener('change', updateStudentInfo);
});
