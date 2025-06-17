// ===== VARIABLES GLOBALES =====
const studentsDatabase = {
    // ... (base de datos de estudiantes se mantiene igual) ...
};

let currentStudent = null;
let examAnswers = {};
let circuitAnswers = {};
let attempts = {
    '1asimplified': 5, '1bsimplified': 5,
    '2aexpression': 5, '2bsimplified': 5,
    '3simplified': 5, '4simplified': 5
};

// ===== VARIACIONES DE EJERCICIOS =====
const exerciseVariants = {
    // ... (variantes de ejercicios se mantienen igual) ...
};

// ===== RESPUESTAS CORRECTAS =====
let correctAnswers = {
    '1asimplified': ['A\'', 'A̅', '~A'],
    '1bsimplified': ['A + B', 'B + A'],
    '2aexpression': ['A\'B + BC\'', 'A̅B + BC̅', '~AB + BC\''],
    '2bsimplified': ['B', 'B(A\' + C\')', 'B(A̅ + C̅)'],
    '3simplified': ['AB + AC + BC', 'AB + BC + AC', 'BC + AB + AC'],
    '4simplified': ['C̅ + D̅', 'D̅ + C̅', '~C + ~D']
};

const correctCircuitAnswers = {
    '1a': 'B',
    '1b': 'A'
};

let correctTruthTables = {
    ex3: [0, 0, 0, 1, 0, 1, 1, 1],
    ex4: [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
};

// ===== FUNCIONES PRINCIPALES CORREGIDAS =====
function checkRegularAnswer(exercise) {
    const inputElement = document.getElementById(`ex${exercise}`);
    
    if (!inputElement) {
        console.error(`Elemento no encontrado: ex${exercise}`);
        return;
    }
    
    const userAnswer = inputElement.value.trim().toLowerCase();
    const feedbackElement = document.getElementById(`feedback${exercise}`);
    const attemptsElement = document.getElementById(`attempts${exercise}`);
    
    // Verificar expresión simplificada
    let isExpressionCorrect = false;
    const correctOptions = correctAnswers[exercise];
    
    if (correctOptions) {
        isExpressionCorrect = correctOptions.some(answer => 
            userAnswer.replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '') === 
            answer.toLowerCase().replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '')
        );
    }

    // Verificar descripción del circuito (si aplica)
    let isCircuitCorrect = true;
    if (exercise.startsWith('1a') && correctCircuitAnswers['1a']) {
        isCircuitCorrect = circuitAnswers['1a'] === correctCircuitAnswers['1a'];
    }
    if (exercise.startsWith('1b') && correctCircuitAnswers['1b']) {
        isCircuitCorrect = circuitAnswers['1b'] === correctCircuitAnswers['1b'];
    }

    const isFullyCorrect = isExpressionCorrect && isCircuitCorrect;
    
    if (isFullyCorrect) {
        feedbackElement.innerHTML = '<div class="feedback correct">✅ ¡Correcto! Excelente trabajo.</div>';
        inputElement.style.borderColor = '#28a745';
    } else if (isExpressionCorrect && !isCircuitCorrect) {
        feedbackElement.innerHTML = '<div class="feedback incorrect">⚠️ Expresión simplificada correcta, pero revise la descripción del circuito.</div>';
        inputElement.style.borderColor = '#ffc107';
    } else if (!isExpressionCorrect && isCircuitCorrect) {
        feedbackElement.innerHTML = '<div class="feedback incorrect">⚠️ Descripción del circuito correcta, pero revise la expresión simplificada.</div>';
        inputElement.style.borderColor = '#ffc107';
    } else {
        if (attempts[exercise] > 0) {
            attempts[exercise]--;
            if (attemptsElement) attemptsElement.textContent = attempts[exercise];
        }
        
        if (attempts[exercise] <= 0) {
            feedbackElement.innerHTML = `<div class="feedback incorrect">❌ Sin intentos restantes.<br>
                <strong>Expresión correcta:</strong> ${correctOptions[0]}<br>
                <strong>Descripción correcta:</strong> Opción ${correctCircuitAnswers[exercise.replace('simplified', '').replace('expression', '')] || 'N/A'}</div>`;
            inputElement.disabled = true;
        } else {
            feedbackElement.innerHTML = '<div class="feedback incorrect">❌ Incorrecto. Intente nuevamente.</div>';
        }
        inputElement.style.borderColor = '#dc3545';
    }
}

function checkAnswerCorrect(answerKey) {
    const inputElement = document.getElementById(`ex${answerKey}`);
    
    if (!inputElement) return false;
    
    const userAnswer = inputElement.value.trim().toLowerCase();
    const correctOptions = correctAnswers[answerKey];
    
    if (!correctOptions) return false;
    
    return correctOptions.some(answer => 
        userAnswer.replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '') === 
        answer.toLowerCase().replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '')
    );
}

// ===== FUNCIONES COMPLEMENTARIAS =====
// (Todas las demás funciones se mantienen igual que antes)

// ===== ASIGNAR FUNCIONES AL SCOPE GLOBAL =====
window.updateStudentInfo = updateStudentInfo;
window.switchTab = switchTab;
window.startExam = startExam;
window.selectCircuitOption = selectCircuitOption;
window.checkAnswer = checkAnswer;
window.finishExam = finishExam;
window.resetExam = resetExam;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de Examen Cargado Correctamente (Versión Corregida)');
});
