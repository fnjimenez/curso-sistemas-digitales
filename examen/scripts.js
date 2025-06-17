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
        let examAnswers = {};
        let circuitAnswers = {};
        let attempts = {
            '1a': 5, '1b': 5, '1c': 5, '1d': 5, '1e': 5,
            '2a': 5, '2b': 5,
            '3simplified': 5,
            '4simplified': 5
        };

        // ===== VARIACIONES DE EJERCICIOS =====
        const exerciseVariants = {
            // Ejercicio 1a - 5 variantes
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

            // Ejercicio 1b - 5 variantes
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
            ],

            // Ejercicio 3 - 5 variantes
            ex3: [
                {
                    title: "Circuito de Mayoría",
                    description: "La salida es 1 cuando al menos 2 de las 3 entradas son 1",
                    rule: "Salida = 1 si (A + B + C ≥ 2)",
                    truthTable: [0, 0, 0, 1, 0, 1, 1, 1],
                    simplified: ["AB + AC + BC", "AB + BC + AC", "BC + AB + AC"]
                },
                {
                    title: "Circuito de Unanimidad",
                    description: "La salida es 1 solo cuando TODAS las entradas son 1",
                    rule: "Salida = 1 si (A = 1 AND B = 1 AND C = 1)",
                    truthTable: [0, 0, 0, 0, 0, 0, 0, 1],
                    simplified: ["ABC", "A*B*C", "A·B·C"]
                },
                {
                    title: "Circuito de Minoría",
                    description: "La salida es 1 cuando máximo 1 entrada es 1 (minoría)",
                    rule: "Salida = 1 si (A + B + C ≤ 1)",
                    truthTable: [1, 1, 1, 0, 1, 0, 0, 0],
                    simplified: ["A'B'C' + A'B'C + A'BC' + AB'C'", "A'B' + A'C' + B'C'"]
                },
                {
                    title: "Circuito Par",
                    description: "La salida es 1 cuando un número PAR de entradas son 1",
                    rule: "Salida = 1 si (A + B + C) es par",
                    truthTable: [1, 0, 0, 1, 0, 1, 1, 0],
                    simplified: ["A'B'C' + A'BC + AB'C + ABC'", "(A⊕B⊕C)'"]
                },
                {
                    title: "Circuito OR Exclusivo Triple",
                    description: "La salida es 1 cuando exactamente 1 o exactamente 3 entradas son 1",
                    rule: "Salida = 1 si (A + B + C = 1) OR (A + B + C = 3)",
                    truthTable: [0, 1, 1, 0, 1, 0, 0, 1],
                    simplified: ["A'B'C + A'BC' + AB'C' + ABC", "A⊕B⊕C"]
                }
            ],

            // Ejercicio 4 - 5 variantes
            ex4: [
                {
                    expression: "C̅(AB̅D̅ + D) + A̅BC + D̅",
                    truthTable: [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                    simplified: ["C̅ + D̅", "D̅ + C̅", "~C + ~D"]
                },
                {
                    expression: "A̅(BD̅ + C) + AB̅C̅ + C̅D̅",
                    truthTable: [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
                    simplified: ["A̅ + B̅C̅", "~A + ~B~C", "A' + B'C'"]
                },
                {
                    expression: "B̅(AC̅ + D̅) + ABC + CD",
                    truthTable: [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1],
                    simplified: ["B̅ + CD", "~B + CD", "B' + CD"]
                },
                {
                    expression: "D(A̅B + C̅) + A̅B̅C̅D̅ + BC̅D̅",
                    truthTable: [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
                    simplified: ["A̅B̅C̅ + BC̅", "~A~B~C + B~C", "A'B'C' + BC'"]
                },
                {
                    expression: "A(B̅D + C) + B̅C̅D̅ + ACD̅",
                    truthTable: [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
                    simplified: ["B̅C̅D̅ + AC", "~B~C~D + AC", "B'C'D' + AC"]
                }
            ]
        };

        // ===== RESPUESTAS CORRECTAS (se actualizan por versión) =====
        let correctAnswers = {
            '1a_simplified': ['A\'', 'A̅', '~A'],
            '1b_simplified': ['A + B', 'B + A'],
            '2a_expression': ['A\'B + BC\'', 'A̅B + BC̅', '~AB + BC\''],
            '2b_simplified': ['B', 'B(A\' + C\')', 'B(A̅ + C̅)'],
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

        // ===== FUNCIÓN PARA GENERAR VERSIÓN ÚNICA =====
        function generateStudentVersion(studentId) {
            const numericPart = studentId.replace(/\D/g, '');
            const hash = parseInt(numericPart.slice(-3)) || 0;
            const version = hash % 5;
            console.log(`Estudiante ${studentId} → Versión ${version}`);
            return version;
        }

        // ===== FUNCIÓN PARA CARGAR EJERCICIOS POR VERSIÓN =====
        function loadStudentExercises(version) {
            try {
                console.log(`🔄 Cargando ejercicios para versión ${version}...`);
                
                loadExercise1(version);
                loadExercise3(version);
                loadExercise4(version);
                updateCorrectAnswers(version);

                console.log('🎉 Todos los ejercicios cargados correctamente para versión:', version);
                
            } catch (error) {
                console.error('❌ Error crítico al cargar ejercicios:', error);
                console.log('🔄 Usando ejercicios por defecto (versión 0)');
                updateCorrectAnswers(0);
            }
        }

        function loadExercise1(version) {
            // Actualizar Ejercicio 1a
            const ex1a = exerciseVariants.ex1a[version];
            const ex1aTitle = document.querySelector('#ex1 .exercise-part h4');
            if (ex1aTitle) {
                ex1aTitle.innerHTML = `a) ${ex1a.expression} (0.5 puntos)`;
            }

            // Actualizar Ejercicio 1b
            const ex1b = exerciseVariants.ex1b[version];
            const allEx1Parts = document.querySelectorAll('#ex1 .exercise-part h4');
            if (allEx1Parts[1]) {
                allEx1Parts[1].innerHTML = `b) ${ex1b.expression} (0.5 puntos)`;
            }
        }

        function loadExercise3(version) {
            const ex3Data = exerciseVariants.ex3[version];
            
            // Actualizar título del ejercicio
            const ex3Header = document.querySelector('#ex3 .exercise-header h3');
            if (ex3Header) {
                ex3Header.innerHTML = `💡 Ejercicio 3: ${ex3Data.title} (2.5 puntos)`;
            }

            // Actualizar descripción del ejercicio
            const ex3HeaderDesc = document.querySelector('#ex3 .exercise-header p');
            if (ex3HeaderDesc) {
                ex3HeaderDesc.innerHTML = ex3Data.description;
            }

            // Actualizar la regla en la guía
            const ruleSection = document.querySelector('#ex3 .step-guide');
            if (ruleSection) {
                const ruleDiv = ruleSection.querySelector('.step-guide div:nth-child(2)');
                if (ruleDiv) {
                    ruleDiv.innerHTML = `
                        <h5 style="color: #1b5e20; margin-bottom: 10px;">🎯 Regla del ${ex3Data.title}:</h5>
                        <ul style="color: #1b5e20; margin-left: 20px;">
                            <li><strong>${ex3Data.rule}</strong></li>
                            <li><strong>Descripción:</strong> ${ex3Data.description}</li>
                        </ul>
                    `;
                }
            }

            // Actualizar instrucciones de la tabla
            const tableInstructions = document.querySelector('#ex3 .exercise-part p');
            if (tableInstructions) {
                tableInstructions.innerHTML = `<strong>Instrucciones:</strong> Complete la tabla aplicando la regla: <em>${ex3Data.description}</em>`;
            }
        }

        function loadExercise4(version) {
            const ex4Data = exerciseVariants.ex4[version];
            
            // Actualizar la expresión a simplificar
            const expressionDiv = document.querySelector('#ex4 .exercise-part div');
            if (expressionDiv) {
                expressionDiv.innerHTML = `Y = ${ex4Data.expression}`;
            }
        }

        function updateCorrectAnswers(version) {
            // Ejercicio 1
            correctAnswers['1a_simplified'] = exerciseVariants.ex1a[version].answer;
            correctAnswers['1b_simplified'] = exerciseVariants.ex1b[version].answer;

            // Ejercicio 3
            correctAnswers['3simplified'] = exerciseVariants.ex3[version].simplified;
            correctTruthTables.ex3 = exerciseVariants.ex3[version].truthTable;

            // Ejercicio 4
            correctAnswers['4simplified'] = exerciseVariants.ex4[version].simplified;
            correctTruthTables.ex4 = exerciseVariants.ex4[version].truthTable;

            // Circuitos
            correctCircuitAnswers['1a'] = exerciseVariants.ex1a[version].circuit_correct;
            correctCircuitAnswers['1b'] = exerciseVariants.ex1b[version].circuit_correct;

            console.log('✅ Respuestas correctas actualizadas para versión:', version);
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
            // Ocultar todos los contenidos
            const allTabContents = document.querySelectorAll('.tab-content');
            allTabContents.forEach(tab => tab.classList.remove('active'));
            
            // Remover clase active de todos los tabs
            const allTabs = document.querySelectorAll('.tab');
            allTabs.forEach(tab => tab.classList.remove('active'));

            // Mostrar el contenido seleccionado
            const targetTab = document.getElementById(tabName);
            if (targetTab) targetTab.classList.add('active');
            
            // Activar el tab correspondiente
            const tabButtons = document.querySelectorAll('.tab');
            tabButtons.forEach(button => {
                const onclickAttr = button.getAttribute('onclick');
                if (onclickAttr && onclickAttr.includes(`'${tabName}'`)) {
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

            // Generar versión única para este estudiante
            const studentVersion = generateStudentVersion(selectedId);
            currentStudent.version = studentVersion;
            
            // Cargar ejercicios específicos para esta versión
            loadStudentExercises(studentVersion);

            console.log(`Estudiante: ${currentStudent.name}`);
            console.log(`Matrícula: ${selectedId}`);
            console.log(`Versión asignada: ${studentVersion}`);

            switchTab('ex1');
        }

        function selectCircuitOption(exercise, option) {
            circuitAnswers[exercise] = option;
            
            // Actualizar feedback visual NEUTRAL (sin mostrar respuestas correctas)
            const allRadios = document.querySelectorAll(`input[name="circuit${exercise}"]`);
            
            allRadios.forEach(radio => {
                const label = radio.nextElementSibling;
                if (radio.value === option) {
                    // Resaltar la opción seleccionada en azul (neutral)
                    label.style.color = '#1e3c72';
                    label.style.fontWeight = 'bold';
                    label.style.backgroundColor = '#e3f2fd';
                    label.style.padding = '5px';
                    label.style.borderRadius = '5px';
                } else {
                    // Restaurar estilo normal para opciones no seleccionadas
                    label.style.color = '#495057';
                    label.style.fontWeight = 'normal';
                    label.style.backgroundColor = 'transparent';
                    label.style.padding = '0';
                    label.style.borderRadius = '0';
                }
            });
        }

        function checkAnswer(exercise) {
            console.log(`🔍 Verificando respuesta para ejercicio: ${exercise}`);
            
            if (exercise === '3table') {
                checkTruthTable3();
            } else if (exercise === '4karnaugh') {
                checkKarnaughMap();
            } else if (exercise === '4table') {
                checkTruthTable4();
            } else if (exercise === '3simplified') {
                checkExercise3Simplified();
            } else if (exercise === '4simplified') {
                checkExercise4Simplified();
            } else {
                checkRegularAnswer(exercise);
            }
        }

        function checkTruthTable4() {
            const correct = correctTruthTables.ex4;
            let allCorrect = true;
            let answeredCount = 0;
            
            for (let i = 0; i < 16; i++) {
                const input = document.getElementById(`tt4_${i}`);
                if (input) {
                    const userValue = input.value;
                    if (userValue === '') {
                        input.style.borderColor = '#ffc107';
                        allCorrect = false;
                    } else {
                        answeredCount++;
                        if (parseInt(userValue) !== correct[i]) {
                            allCorrect = false;
                            input.style.borderColor = '#dc3545';
                        } else {
                            input.style.borderColor = '#28a745';
                        }
                    }
                }
            }
            
            const feedback = document.getElementById('feedback4table');
            if (answeredCount === 0) {
                feedback.innerHTML = '<div class="feedback incorrect">⚠️ Por favor complete al menos una respuesta antes de validar.</div>';
            } else if (answeredCount < 16) {
                feedback.innerHTML = `<div class="feedback incorrect">⚠️ Complete todas las filas. Faltan ${16 - answeredCount} respuestas.</div>`;
            } else if (allCorrect) {
                feedback.innerHTML = '<div class="feedback correct">✅ ¡Excelente! Tabla de verdad completamente correcta!</div>';
            } else {
                feedback.innerHTML = '<div class="feedback incorrect">❌ Algunas respuestas son incorrectas. Revise las filas marcadas en rojo.</div>';
            }
        }

        function checkExercise3Simplified() {
            console.log('🔍 Verificando ejercicio 3 simplificado...');
            
            const inputElement = document.getElementById('ex3_simplified');
            const feedbackElement = document.getElementById('feedback3simplified');
            const attemptsElement = document.getElementById('attempts3simplified');
            
            if (!inputElement) {
                console.error('❌ No se encontró el campo de entrada ex3_simplified');
                return;
            }
            
            const userAnswer = inputElement.value.trim().toLowerCase();
            console.log(`📝 Respuesta del usuario: "${userAnswer}"`);
            
            const correctOptions = correctAnswers['3simplified'];
            console.log(`✅ Respuestas correctas: `, correctOptions);
            
            let isCorrect = false;
            if (correctOptions) {
                isCorrect = correctOptions.some(answer => {
                    const normalized = userAnswer.replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '');
                    const correctNormalized = answer.toLowerCase().replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '');
                    return normalized === correctNormalized;
                });
            }
            
            console.log(`🎯 ¿Es correcta? ${isCorrect}`);
            
            if (isCorrect) {
                feedbackElement.innerHTML = '<div class="feedback correct">✅ ¡Correcto! Excelente trabajo.</div>';
                inputElement.style.borderColor = '#28a745';
            } else {
                if (attempts['3simplified']) {
                    attempts['3simplified']--;
                    if (attemptsElement) attemptsElement.textContent = attempts['3simplified'];
                }
                
                if (!attempts['3simplified'] || attempts['3simplified'] <= 0) {
                    feedbackElement.innerHTML = `<div class="feedback incorrect">❌ Sin intentos restantes.<br>
                        <strong>Expresión correcta:</strong> ${correctOptions[0]}</div>`;
                    inputElement.disabled = true;
                } else {
                    feedbackElement.innerHTML = '<div class="feedback incorrect">❌ Incorrecto. Intente nuevamente.</div>';
                }
                inputElement.style.borderColor = '#dc3545';
            }
        }

        function checkExercise4Simplified() {
            console.log('🔍 Verificando ejercicio 4 simplificado...');
            
            const inputElement = document.getElementById('ex4_simplified');
            const feedbackElement = document.getElementById('feedback4simplified');
            const attemptsElement = document.getElementById('attempts4simplified');
            
            if (!inputElement) {
                console.error('❌ No se encontró el campo de entrada ex4_simplified');
                return;
            }
            
            const userAnswer = inputElement.value.trim().toLowerCase();
            console.log(`📝 Respuesta del usuario: "${userAnswer}"`);
            
            const correctOptions = correctAnswers['4simplified'];
            console.log(`✅ Respuestas correctas: `, correctOptions);
            
            let isCorrect = false;
            if (correctOptions) {
                isCorrect = correctOptions.some(answer => {
                    const normalized = userAnswer.replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '');
                    const correctNormalized = answer.toLowerCase().replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '');
                    return normalized === correctNormalized;
                });
            }
            
            console.log(`🎯 ¿Es correcta? ${isCorrect}`);
            
            if (isCorrect) {
                feedbackElement.innerHTML = '<div class="feedback correct">✅ ¡Correcto! Excelente trabajo.</div>';
                inputElement.style.borderColor = '#28a745';
            } else {
                if (attempts['4simplified']) {
                    attempts['4simplified']--;
                    if (attemptsElement) attemptsElement.textContent = attempts['4simplified'];
                }
                
                if (!attempts['4simplified'] || attempts['4simplified'] <= 0) {
                    feedbackElement.innerHTML = `<div class="feedback incorrect">❌ Sin intentos restantes.<br>
                        <strong>Expresión correcta:</strong> ${correctOptions[0]}</div>`;
                    inputElement.disabled = true;
                } else {
                    feedbackElement.innerHTML = '<div class="feedback incorrect">❌ Incorrecto. Intente nuevamente.</div>';
                }
                inputElement.style.borderColor = '#dc3545';
            }
        }

        function checkRegularAnswer(exercise) {
            const inputElement = document.getElementById(`ex${exercise}_simplified`) || 
                                document.getElementById(`ex${exercise}_expression`);
            
            if (!inputElement) return;
            
            const userAnswer = inputElement.value.trim().toLowerCase();
            const feedbackElement = document.getElementById(`feedback${exercise}`);
            const attemptsElement = document.getElementById(`attempts${exercise}`);
            
            // Verificar expresión simplificada
            let isExpressionCorrect = false;
            const correctOptions = correctAnswers[`${exercise}_simplified`] || 
                                 correctAnswers[`${exercise}_expression`];
            
            if (correctOptions) {
                isExpressionCorrect = correctOptions.some(answer => 
                    userAnswer.replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '') === 
                    answer.toLowerCase().replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '')
                );
            }

            // Verificar descripción del circuito (si aplica)
            let isCircuitCorrect = true;
            if (correctCircuitAnswers[exercise]) {
                isCircuitCorrect = circuitAnswers[exercise] === correctCircuitAnswers[exercise];
            }

            const isFullyCorrect = is
