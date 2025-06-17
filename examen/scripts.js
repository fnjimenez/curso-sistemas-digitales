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
    "U2303057N0086": { name: "MEJIA CANO PERLA DEL CARMEN", career: "Licenciatura en Ingeniería Industrial" },
    "U230极
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

// ===== FUNCIONES PRINCIPALES =====
function updateStudentInfo() {
    const selectedId = document.getElementById('studentSelect').value;
    const nameField = document.getElementById('studentName');
    const careerField = document.getElementById('studentCareer');
    const startBtn = document.getElementById('startBtn');

    console.log('Selected ID:', selectedId); // Para depuración
    
    if (selectedId && studentsDatabase[selectedId]) {
        const student = studentsDatabase[selectedId];
        nameField.value = student.name;
        careerField.value = student.career;
        startBtn.disabled = false;
        startBtn.classList.remove('disabled');
    } else {
        nameField.value = '';
        careerField.value = '';
        startBtn.disabled = true;
        startBtn.classList.add('disabled');
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

    console.log('Examen iniciado para:', currentStudent.name);
    switchTab('ex1');
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de Examen Inicializado');
    
    // Registrar el event listener correctamente
    const studentSelect = document.getElementById('studentSelect');
    if (studentSelect) {
        studentSelect.addEventListener('change', updateStudentInfo);
    } else {
        console.error('No se encontró el elemento studentSelect');
    }
    
    // Inicializar estado del botón
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.classList.add('disabled');
    }
});
