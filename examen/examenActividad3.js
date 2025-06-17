
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
            if (exercise === '3table') {
                checkTruthTable3();
            } else if (exercise === '4karnaugh') {
                checkKarnaughMap();
            } else if (exercise === '4table') {
                checkTruthTable4();
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
                if (attempts[exercise]) {
                    attempts[exercise]--;
                    if (attemptsElement) attemptsElement.textContent = attempts[exercise];
                }
                
                if (!attempts[exercise] || attempts[exercise] <= 0) {
                    feedbackElement.innerHTML = `<div class="feedback incorrect">❌ Sin intentos restantes.<br>
                        <strong>Expresión correcta:</strong> ${correctOptions[0]}<br>
                        <strong>Descripción correcta:</strong> Opción ${correctCircuitAnswers[exercise] || 'N/A'}</div>`;
                    inputElement.disabled = true;
                } else {
                    feedbackElement.innerHTML = '<div class="feedback incorrect">❌ Incorrecto. Intente nuevamente.</div>';
                }
                inputElement.style.borderColor = '#dc3545';
            }
        }

        function checkTruthTable3() {
            const correct = correctTruthTables.ex3;
            let allCorrect = true;
            let answeredCount = 0;
            
            for (let i = 0; i < 8; i++) {
                const select = document.getElementById(`tt3_${i}`);
                if (select) {
                    const userValue = select.value;
                    if (userValue === '') {
                        // No ha seleccionado nada
                        select.style.borderColor = '#ffc107';
                        allCorrect = false;
                    } else {
                        answeredCount++;
                        if (parseInt(userValue) !== correct[i]) {
                            allCorrect = false;
                            select.style.borderColor = '#dc3545';
                        } else {
                            select.style.borderColor = '#28a745';
                        }
                    }
                }
            }
            
            const feedback = document.getElementById('feedback3table');
            if (answeredCount === 0) {
                feedback.innerHTML = '<div class="feedback incorrect">⚠️ Por favor complete al menos una respuesta antes de validar.</div>';
            } else if (answeredCount < 8) {
                feedback.innerHTML = `<div class="feedback incorrect">⚠️ Complete todas las filas. Faltan ${8 - answeredCount} respuestas.</div>`;
            } else if (allCorrect) {
                feedback.innerHTML = '<div class="feedback correct">✅ ¡Excelente! Tabla de verdad completamente correcta!</div>';
            } else {
                feedback.innerHTML = '<div class="feedback incorrect">❌ Algunas respuestas son incorrectas. Revise las filas marcadas en rojo.</div>';
            }
        }

        function checkKarnaughMap() {
            const correctMap = correctTruthTables.ex4;
            const mapOrder = [0,1,3,2,4,5,7,6,12,13,15,14,8,9,11,10];
            let allCorrect = true;
            let answeredCount = 0;
            
            mapOrder.forEach((truthIndex, mapIndex) => {
                const select = document.getElementById(`k_${String(mapIndex).padStart(2, '0')}`);
                if (select) {
                    const userValue = select.value;
                    if (userValue === '') {
                        select.style.borderColor = '#ffc107';
                        allCorrect = false;
                    } else {
                        answeredCount++;
                        if (parseInt(userValue) !== correctMap[truthIndex]) {
                            allCorrect = false;
                            select.style.borderColor = '#dc3545';
                        } else {
                            select.style.borderColor = '#28a745';
                        }
                    }
                }
            });
            
            const feedback = document.getElementById('feedback4karnaugh');
            if (answeredCount === 0) {
                feedback.innerHTML = '<div class="feedback incorrect">⚠️ Por favor complete al menos una celda antes de validar.</div>';
            } else if (answeredCount < 16) {
                feedback.innerHTML = `<div class="feedback incorrect">⚠️ Complete todas las celdas del mapa K. Faltan ${16 - answeredCount} valores.</div>`;
            } else if (allCorrect) {
                feedback.innerHTML = '<div class="feedback correct">✅ ¡Excelente! Mapa de Karnaugh completamente correcto!</div>';
            } else {
                feedback.innerHTML = '<div class="feedback incorrect">❌ Algunos valores son incorrectos. Revise las celdas marcadas en rojo.</div>';
            }
        }

        function finishExam() {
            if (!currentStudent) {
                alert('Error: No hay estudiante seleccionado');
                return;
            }

            const score = calculateTotalScore();
            displayResults(score);
            switchTab('results');
        }

        function calculateTotalScore() {
            let score = 0;
            
            // Ejercicio 1 (2.5 puntos)
            if (circuitAnswers['1a'] === correctCircuitAnswers['1a']) score += 0.25;
            if (checkAnswerCorrect('1a_simplified')) score += 0.25;
            if (circuitAnswers['1b'] === correctCircuitAnswers['1b']) score += 0.25;
            if (checkAnswerCorrect('1b_simplified')) score += 0.25;
            
            // Ejercicio 2 (2.5 puntos)
            if (checkAnswerCorrect('2a_expression')) score += 1.0;
            if (checkAnswerCorrect('2b_simplified')) score += 1.5;
            
            // Ejercicio 3 (2.5 puntos)
            let correctTT3 = 0;
            for (let i = 0; i < 8; i++) {
                const select = document.getElementById(`tt3_${i}`);
                if (select && select.value !== '' && parseInt(select.value) === correctTruthTables.ex3[i]) {
                    correctTT3++;
                }
            }
            score += (correctTT3 / 8) * 1.0;
            if (checkAnswerCorrect('3simplified')) score += 1.5;
            
            // Ejercicio 4 (2.5 puntos)
            let correctTT4 = 0;
            for (let i = 0; i < 16; i++) {
                const input = document.getElementById(`tt4_${i}`);
                if (input && input.value !== '' && parseInt(input.value) === correctTruthTables.ex4[i]) {
                    correctTT4++;
                }
            }
            score += (correctTT4 / 16) * 1.0;

            let correctK = 0;
            const correctMap = correctTruthTables.ex4;
            const mapOrder = [0,1,3,2,4,5,7,6,12,13,15,14,8,9,11,10];
            mapOrder.forEach((truthIndex, mapIndex) => {
                const input = document.getElementById(`k_${String(mapIndex).padStart(2, '0')}`);
                if (input && input.value !== '' && parseInt(input.value) === correctMap[truthIndex]) {
                    correctK++;
                }
            });
            score += (correctK / 16) * 1.0;
            
            if (checkAnswerCorrect('4simplified')) score += 0.5;
            
            return Math.round(score * 10) / 10;
        }

        function checkAnswerCorrect(answerKey) {
            const inputElement = document.getElementById(`ex${answerKey}`) || 
                                document.getElementById(`ex${answerKey.replace('_', '')}`) ||
                                document.getElementById(answerKey.replace('_', ''));
            
            if (!inputElement) return false;
            
            const userAnswer = inputElement.value.trim().toLowerCase();
            const correctOptions = correctAnswers[answerKey];
            
            if (!correctOptions) return false;
            
            return correctOptions.some(answer => 
                userAnswer.replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '') === 
                answer.toLowerCase().replace(/\s/g, '').replace(/'/g, '').replace(/̅/g, '').replace(/~/g, '')
            );
        }

        function displayResults(score) {
            const percentage = Math.round((score / 10) * 100);
            let grade = 'F';
            if (percentage >= 90) grade = 'A';
            else if (percentage >= 80) grade = 'B';
            else if (percentage >= 70) grade = 'C';
            else if (percentage >= 60) grade = 'D';

            const resultsArea = document.getElementById('resultsArea');
            resultsArea.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; border-radius: 15px; margin: 20px 0;">
                        <h2>🎉 Examen Completado</h2>
                        <div style="font-size: 3em; margin: 20px 0; font-weight: bold;">${score}/10</div>
                        <p style="font-size: 1.5em;">Calificación: ${percentage}% (${grade})</p>
                        <p><strong>Estudiante:</strong> ${currentStudent.name}</p>
                        <p><strong>Matrícula:</strong> ${currentStudent.id}</p>
                        <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
                    </div>

                    <div style="margin-top: 30px;">
                        <button class="btn btn-success" onclick="finishExam()">🔄 Finalizar Examen</button>
                        <button class="btn" onclick="resetExam()">🔄 Nuevo Examen</button>
                    </div>
                </div>
            `;
        }

        function resetExam() {
            if (confirm('¿Reiniciar el examen? Se perderán todas las respuestas.')) {
                currentStudent = null;
                examAnswers = {};
                circuitAnswers = {};
                attempts = {
                    '1a': 5, '1b': 5, '1c': 5, '1d': 5, '1e': 5,
                    '2a': 5, '2b': 5,
                    '3simplified': 5,
                    '4simplified': 5
                };
                
                document.getElementById('studentSelect').value = '';
                document.getElementById('studentName').value = '';
                document.getElementById('studentCareer').value = '';
                document.getElementById('startBtn').disabled = true;
                
                document.getElementById('resultsArea').innerHTML = '<div class="loading">Los resultados aparecerán aquí al completar el examen</div>';
                
                switchTab('student');
            }
        }

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
            console.log('🚀 Sistema de Examen Cargado Correctamente');
            
            // Verificar que todas las funciones estén definidas
            const requiredFunctions = [
                'updateStudentInfo', 'switchTab', 'startExam', 'checkAnswer',
                'selectCircuitOption', 'finishExam', 'resetExam'
            ];
            
            const missingFunctions = requiredFunctions.filter(funcName => 
                typeof window[funcName] !== 'function'
            );
            
            if (missingFunctions.length > 0) {
                console.error('❌ Funciones faltantes:', missingFunctions);
            } else {
                console.log('✅ Todas las funciones están correctamente definidas');
            }
        });
    
document.getElementById('startExamButton').addEventListener('click', function() {
    var studentName = document.getElementById('studentName').value;
    var studentId = document.getElementById('studentId').value;
    if (!studentName || !studentId) {
        alert('Please fill in all required fields.');
        return false;
    }
    // Continue with starting the exam
});
