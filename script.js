// Store current user and quiz state
let currentUser = null;
let currentQuiz = {
    subject: '',
    difficulty: '',
    currentQuestion: 0,
    score: 0,
    questions: []
};

// Sample questions (in a real app, these would come from a backend)
const quizQuestions = {
    biology: {
        easy: [
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
                correctAnswer: 1
            },
            {
                question: "Which of these is not a type of blood cell?",
                options: ["Red blood cells", "White blood cells", "Platelets", "Stem cells"],
                correctAnswer: 3
            }
            ,
                       {
                            question: "What is the powerhouse of the cell?",
                            options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
                            correctAnswer: 1
                        },
                        {
                            question: "Which of these is not a type of blood cell?",
                            options: ["Red blood cells", "White blood cells", "Platelets", "Stem cells"],
                            correctAnswer: 3
                        },
                        {
                            question: "What is the basic unit of life?",
                            options: ["Tissue", "Organ", "Cell", "Organ System"],
                            correctAnswer: 2
                        },
                        {
                            question: "Where does photosynthesis occur?",
                            options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
                            correctAnswer: 1
                        },
                        {
                            question: "What is the main component of the cell membrane?",
                            options: ["Proteins", "Lipids", "Carbohydrates", "Nucleic acids"],
                            correctAnswer: 1
                        },
                        {
                            question: "Which part of the cell contains genetic material?",
                            options: ["Nucleus", "Cytoplasm", "Golgi Apparatus", "Mitochondria"],
                            correctAnswer: 0
                        },
                        {
                            question: "What organelle is responsible for protein synthesis?",
                            options: ["Mitochondria", "Ribosome", "Nucleus", "Lysosome"],
                            correctAnswer: 1
                        },
                        {
                            question: "What structure controls the movement of substances in and out of the cell?",
                            options: ["Cell membrane", "Cell wall", "Cytoplasm", "Nucleus"],
                            correctAnswer: 0
                        },
                        {
                            question: "Which is the process by which plants make their own food?",
                            options: ["Respiration", "Photosynthesis", "Digestion", "Osmosis"],
                            correctAnswer: 1
                        },
                        {
                            question: "What do ribosomes make?",
                            options: ["Proteins", "Lipids", "Carbohydrates", "DNA"],
                            correctAnswer: 0
                        },
                        {
                            question: "Which of these is not an organelle?",
                            options: ["Nucleus", "Cytoplasm", "Mitochondria", "Chlorophyll"],
                            correctAnswer: 3
                        },
                        {
                            question: "What is the fluid inside the cell called?",
                            options: ["Nucleus", "Cytoplasm", "Plasma membrane", "Mitochondria"],
                            correctAnswer: 1
                        }
                        
                        
                    ]
                
                

                , medium: [
                    {
                        question: "What is the process by which cells divide to create two identical daughter cells?",
                        options: ["Meiosis", "Mitosis", "Binary fission", "Fermentation"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which molecule carries genetic information from DNA to the ribosome?",
                        options: ["tRNA", "mRNA", "rRNA", "DNA"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the primary function of the Golgi apparatus?",
                        options: ["Energy production", "Protein synthesis", "Packaging and transport", "Photosynthesis"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which phase of the cell cycle involves DNA replication?",
                        options: ["G1 phase", "S phase", "G2 phase", "M phase"],
                        correctAnswer: 1
                    },
                    {
                        question: "What are the building blocks of proteins?",
                        options: ["Monosaccharides", "Amino acids", "Fatty acids", "Nucleotides"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which organelle is often called the 'suicide sac' due to its role in breaking down cellular waste?",
                        options: ["Mitochondria", "Lysosome", "Ribosome", "Golgi Apparatus"],
                        correctAnswer: 1
                    },
                    {
                        question: "What type of bond holds the two strands of DNA together?",
                        options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Peptide bond"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the main function of red blood cells?",
                        options: ["To fight infections", "To carry oxygen", "To produce antibodies", "To clot blood"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which organelle is responsible for cellular respiration?",
                        options: ["Chloroplast", "Nucleus", "Mitochondria", "Endoplasmic Reticulum"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which process involves the movement of water molecules across a semipermeable membrane?",
                        options: ["Diffusion", "Osmosis", "Active transport", "Phagocytosis"],
                        correctAnswer: 1
                    }
                ] 
                , hard: [
                    {
                        question: "Which enzyme is responsible for unwinding DNA during replication?",
                        options: ["DNA polymerase", "Helicase", "Ligase", "Topoisomerase"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the main function of the smooth endoplasmic reticulum?",
                        options: ["Protein synthesis", "Lipid synthesis", "DNA replication", "ATP production"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which process converts pyruvate into lactate in the absence of oxygen?",
                        options: ["Glycolysis", "Fermentation", "Krebs cycle", "Oxidative phosphorylation"],
                        correctAnswer: 1
                    },
                    {
                        question: "What type of RNA carries amino acids to the ribosome during translation?",
                        options: ["mRNA", "tRNA", "rRNA", "snRNA"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which organelle is associated with the modification, sorting, and packaging of proteins?",
                        options: ["Endoplasmic Reticulum", "Golgi Apparatus", "Nucleus", "Ribosome"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the term for programmed cell death?",
                        options: ["Necrosis", "Autolysis", "Apoptosis", "Autophagy"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which structure on the chromosome shortens with each cell division, limiting cellular lifespan?",
                        options: ["Centromere", "Telomere", "Histone", "Chromatid"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the role of NADH in cellular respiration?",
                        options: ["To carry oxygen", "To carry electrons", "To break down glucose", "To synthesize ATP"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which process occurs in the thylakoid membrane of chloroplasts?",
                        options: ["Calvin cycle", "Glycolysis", "Electron transport chain", "Photorespiration"],
                        correctAnswer: 2
                    },
                    {
                        question: "What molecule acts as the final electron acceptor in the electron transport chain?",
                        options: ["Carbon dioxide", "Water", "NAD+", "Oxygen"],
                        correctAnswer: 3
                    }
                ]
            }
            
                 
       
        
         
            , physics: {
    easy: [
        {
            question: "What is the SI unit of force?",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            correctAnswer: 0
        },{
            question: "What is the force that pulls objects toward the center of the Earth?",
            options: ["Magnetism", "Friction", "Gravity", "Electricity"],
            correctAnswer: 2
        },
        {
            question: "What is the unit of electric current?",
            options: ["Volt", "Newton", "Ampere", "Joule"],
            correctAnswer: 2
        },
        {
            question: "What type of energy does a moving object have?",
            options: ["Potential energy", "Kinetic energy", "Thermal energy", "Nuclear energy"],
            correctAnswer: 1
        },
        {
            question: "Which device is used to measure temperature?",
            options: ["Thermometer", "Barometer", "Ammeter", "Galvanometer"],
            correctAnswer: 0
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 m/s", "3,000 km/s", "300,000 km/s", "30,000 km/s"],
            correctAnswer: 2
        },
        {
            question: "Which of these is a non-renewable energy source?",
            options: ["Wind", "Solar", "Coal", "Hydroelectric"],
            correctAnswer: 2
        },
        {
            question: "What kind of lens is used to magnify objects?",
            options: ["Concave lens", "Convex lens", "Flat lens", "Prism"],
            correctAnswer: 1
        },
        {
            question: "What is Newton's first law of motion also known as?",
            options: ["Law of Gravity", "Law of Inertia", "Law of Acceleration", "Law of Action-Reaction"],
            correctAnswer: 1
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["50°C", "100°C", "150°C", "200°C"],
            correctAnswer: 1
        },
        {
            question: "Which planet in our solar system has the strongest gravitational pull?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: 2
        }

    ],
    medium: [
        {
            question: "What is the unit of force in the International System of Units (SI)?",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            correctAnswer: 2
        },
        {
            question: "Which of these describes the rate of change of velocity?",
            options: ["Speed", "Displacement", "Acceleration", "Force"],
            correctAnswer: 2
        },
        {
            question: "What is the phenomenon where light bends as it passes from one medium to another?",
            options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
            correctAnswer: 1
        },
        {
            question: "Which law states that the current through a conductor is directly proportional to the voltage across it, provided temperature is constant?",
            options: ["Newton's Third Law", "Faraday's Law", "Ohm's Law", "Hooke's Law"],
            correctAnswer: 2
        },
        {
            question: "What is the resistance of a conductor if a voltage of 10 V across it causes a current of 2 A to flow?",
            options: ["5 Ohms", "10 Ohms", "15 Ohms", "20 Ohms"],
            correctAnswer: 0
        },
        {
            question: "Which type of wave has vibrations that are parallel to the direction of the wave's travel?",
            options: ["Transverse wave", "Longitudinal wave", "Surface wave", "Electromagnetic wave"],
            correctAnswer: 1
        },
        {
            question: "What type of mirror is used in car side mirrors to give a wider field of view?",
            options: ["Concave mirror", "Convex mirror", "Flat mirror", "Parabolic mirror"],
            correctAnswer: 1
        },
        {
            question: "What quantity is conserved in an isolated system during an elastic collision?",
            options: ["Velocity", "Momentum", "Acceleration", "Force"],
            correctAnswer: 1
        },
        {
            question: "If a person pushes a wall with a force of 100 N but the wall does not move, what is the work done?",
            options: ["0 Joules", "10 Joules", "100 Joules", "1000 Joules"],
            correctAnswer: 0
        },
        {
            question: "Which scientist developed the theory of electromagnetism?",
            options: ["Isaac Newton", "Albert Einstein", "James Clerk Maxwell", "Galileo Galilei"],
            correctAnswer: 2
        }
    ],
    hard: [
        {
            question: "What is the Heisenberg Uncertainty Principle primarily concerned with?",
            options: ["Energy and time", "Position and momentum", "Charge and current", "Mass and velocity"],
            correctAnswer: 1
        },
        {
            question: "What is the term for the bending of spacetime around a massive object?",
            options: ["Quantum entanglement", "Relativity", "Gravitational lensing", "Inertia"],
            correctAnswer: 2
        },
        {
            question: "What is the primary purpose of a Michelson interferometer?",
            options: ["Measure gravitational waves", "Detect speed of light variations", "Observe subatomic particles", "Detect electromagnetic waves"],
            correctAnswer: 1
        },
        {
            question: "Which law of thermodynamics states that entropy in an isolated system always increases over time?",
            options: ["First Law", "Second Law", "Third Law", "Zeroth Law"],
            correctAnswer: 1
        },
        {
            question: "In quantum mechanics, what does the Schrödinger equation describe?",
            options: ["The position of a particle", "The wave function of a particle", "The speed of light", "The energy of a system"],
            correctAnswer: 1
        },
        {
            question: "What is the force between two charged particles in a vacuum proportional to?",
            options: ["Their masses", "Their charges", "The square of the distance between them", "The product of their charges and the inverse square of the distance between them"],
            correctAnswer: 3
        },
        {
            question: "Which of these particles is responsible for mediating the electromagnetic force?",
            options: ["Photon", "Electron", "Neutron", "Graviton"],
            correctAnswer: 0
        },
        {
            question: "What principle suggests that all physical laws are the same in all inertial frames?",
            options: ["Pauli Exclusion Principle", "Principle of Relativity", "Heisenberg Uncertainty Principle", "Bernoulli's Principle"],
            correctAnswer: 1
        },
        {
            question: "What is the escape velocity from Earth's surface?",
            options: ["7 km/s", "9.8 km/s", "11.2 km/s", "15 km/s"],
            correctAnswer: 2
        },
        {
            question: "Which experiment demonstrated the wave-particle duality of electrons?",
            options: ["Rutherford's Gold Foil Experiment", "Double-slit Experiment", "Millikan Oil Drop Experiment", "Michelson-Morley Experiment"],
            correctAnswer: 1
        }
    ]
},

    chemistry: {
        easy: [
            {
                question: "What is the chemical symbol for water?",
                options: ["O2", "H2O", "CO2", "NaCl"],
                correctAnswer: 1
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 1
            },
            {
                question: "Which element is known as the 'building block of life'?",
                options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
                correctAnswer: 2
            },
            {
                question: "What is the chemical symbol for sodium?",
                options: ["S", "Na", "So", "N"],
                correctAnswer: 1
            },
            {
                question: "What type of bond involves the sharing of electrons?",
                options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
                correctAnswer: 1
            },
            {
                question: "What is the pH level of pure water?",
                options: ["0", "7", "14", "1"],
                correctAnswer: 1
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
                correctAnswer: 2
            },
            {
                question: "What is the formula for table salt?",
                options: ["NaCl", "H2O", "CO2", "KCl"],
                correctAnswer: 0
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Pb", "Fe"],
                correctAnswer: 0
            },
            {
                question: "Which gas is essential for human respiration?",
                options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Argon"],
                correctAnswer: 2
            }
        ],
        medium: [
            {
                question: "What is the pH range of an acidic solution?",
                options: ["0-6", "7", "8-14", "6-14"],
                correctAnswer: 0
            },
            {
                question: "Which type of chemical reaction involves the breaking down of a compound into simpler substances?",
                options: ["Synthesis reaction", "Decomposition reaction", "Single displacement", "Double displacement"],
                correctAnswer: 1
            },
            {
                question: "What is Avogadro's number?",
                options: ["6.02 x 10^22", "6.02 x 10^23", "6.02 x 10^24", "6.02 x 10^25"],
                correctAnswer: 1
            },
            {
                question: "What is the molar mass of water (H2O)?",
                options: ["10 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
                correctAnswer: 1
            },
            {
                question: "Which substance is an example of a strong acid?",
                options: ["NaCl", "H2O", "HCl", "NH3"],
                correctAnswer: 2
            },
            {
                question: "In a redox reaction, what happens to the oxidizing agent?",
                options: ["It gains electrons", "It loses electrons", "It gains protons", "It loses protons"],
                correctAnswer: 0
            },
            {
                question: "What term describes the amount of energy required to remove an electron from an atom?",
                options: ["Electron affinity", "Electronegativity", "Ionization energy", "Bond energy"],
                correctAnswer: 2
            },
            {
                question: "Which group in the periodic table is known as the 'noble gases'?",
                options: ["Group 1", "Group 2", "Group 17", "Group 18"],
                correctAnswer: 3
            },
            {
                question: "Which element is a halogen?",
                options: ["Helium", "Chlorine", "Sodium", "Calcium"],
                correctAnswer: 1
            },
            {
                question: "What type of bonding occurs in sodium chloride (NaCl)?",
                options: ["Covalent bonding", "Ionic bonding", "Metallic bonding", "Hydrogen bonding"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                question: "Which gas law states that pressure and volume of a gas are inversely proportional at constant temperature?",
                options: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Ideal Gas Law"],
                correctAnswer: 1
            },
            {
                question: "What is the electron configuration of a chloride ion (Cl-)?",
                options: ["1s2 2s2 2p6 3s2 3p5", "1s2 2s2 2p6 3s2 3p6", "1s2 2s2 2p6 3s2 3p4", "1s2 2s2 2p6 3s2 3p3"],
                correctAnswer: 1
            },
            {
                question: "Which scientist developed the first periodic table?",
                options: ["Albert Einstein", "Dmitri Mendeleev", "Niels Bohr", "Marie Curie"],
                correctAnswer: 1
            },
            {
                question: "What is the name of the process in which a solid turns directly into a gas?",
                options: ["Condensation", "Sublimation", "Evaporation", "Melting"],
                correctAnswer: 1
            },
            {
                question: "What is the coordination number of each ion in a face-centered cubic (FCC) crystal structure?",
                options: ["4", "6", "8", "12"],
                correctAnswer: 3
            },
            {
                question: "Which principle explains why no two electrons in an atom can have the same set of quantum numbers?",
                options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Aufbau Principle", "Hund's Rule"],
                correctAnswer: 1
            },
            {
                question: "What is the hybridization of carbon in ethene (C2H4)?",
                options: ["sp", "sp2", "sp3", "sp3d"],
                correctAnswer: 1
            },
            {
                question: "Which acid is commonly used in car batteries?",
                options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
                correctAnswer: 1
            },
            {
                question: "What is the term for the energy change that occurs when an electron is added to a neutral atom?",
                options: ["Electron affinity", "Ionization energy", "Electronegativity", "Bond energy"],
                correctAnswer: 0
            },
            {
                question: "What is the primary component of natural gas?",
                options: ["Methane", "Ethane", "Propane", "Butane"],
                correctAnswer: 0
            }
        ]
    },
    math :{
    easy: [
        {
            question: "What is 5 + 3?",
            options: ["5", "6", "7", "8"],
            correctAnswer: 3
        },
        {
            question: "What is 10 - 4?",
            options: ["5", "6", "7", "8"],
            correctAnswer: 1
        },
        {
            question: "What is 7 + 6?",
            options: ["11", "12", "13", "14"],
            correctAnswer: 2
        },
        {
            question: "What is 9 - 3?",
            options: ["5", "6", "7", "8"],
            correctAnswer: 1
        },
        {
            question: "What is 6 * 2?",
            options: ["10", "12", "14", "16"],
            correctAnswer: 1
        },
        {
            question: "What is 15 / 3?",
            options: ["3", "4", "5", "6"],
            correctAnswer: 2
        },
        {
            question: "What is 4 + 4?",
            options: ["6", "7", "8", "9"],
            correctAnswer: 2
        },
        {
            question: "What is 20 - 10?",
            options: ["5", "8", "10", "15"],
            correctAnswer: 2
        },
        {
            question: "What is 3 * 3?",
            options: ["6", "7", "8", "9"],
            correctAnswer: 3
        },
        {
            question: "What is 12 / 4?",
            options: ["2", "3", "4", "5"],
            correctAnswer: 1
        }
    ],
    medium: [
        {
            question: "What is 12 * 12?",
            options: ["122", "132", "144", "156"],
            correctAnswer: 2
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            correctAnswer: 2
        },
        {
            question: "What is 15 * 3?",
            options: ["35", "45", "55", "65"],
            correctAnswer: 1
        },
        {
            question: "What is 81 / 9?",
            options: ["7", "8", "9", "10"],
            correctAnswer: 2
        },
        {
            question: "What is 18 + 24?",
            options: ["32", "42", "52", "62"],
            correctAnswer: 1
        },
        {
            question: "What is 144 / 12?",
            options: ["10", "11", "12", "13"],
            correctAnswer: 2
        },
        {
            question: "What is 11 * 11?",
            options: ["111", "121", "131", "141"],
            correctAnswer: 1
        },
        {
            question: "What is the square root of 100?",
            options: ["8", "9", "10", "11"],
            correctAnswer: 2
        },
        {
            question: "What is 9 * 8?",
            options: ["63", "72", "81", "90"],
            correctAnswer: 1
        },
        {
            question: "What is 56 / 7?",
            options: ["6", "7", "8", "9"],
            correctAnswer: 2
        }
    ],
    hard: [
        {
            question: "What is the value of π (pi) rounded to 3 decimal places?",
            options: ["3.14", "3.141", "3.142", "3.143"],
            correctAnswer: 1
        },
        {
            question: "What is 15! (factorial of 15) approximately?",
            options: ["1.3 trillion", "2.4 billion", "3.5 million", "4.6 thousand"],
            correctAnswer: 0
        },
        {
            question: "What is the cube root of 729?",
            options: ["7", "8", "9", "10"],
            correctAnswer: 2
        },
        {
            question: "What is the derivative of x^2?",
            options: ["x", "2x", "x^2", "2x^2"],
            correctAnswer: 1
        },
        {
            question: "What is the integral of 2x dx?",
            options: ["x^2", "2x^2", "x^2 + C", "2x + C"],
            correctAnswer: 2
        },
        {
            question: "Solve for x: 2x + 3 = 11.",
            options: ["3", "4", "5", "6"],
            correctAnswer: 1
        },
        {
            question: "What is the limit of (x^2 - 1) / (x - 1) as x approaches 1?",
            options: ["0", "1", "2", "undefined"],
            correctAnswer: 2
        },
        {
            question: "What is the value of cos(90°)?",
            options: ["0", "1", "-1", "undefined"],
            correctAnswer: 0
        },
        {
            question: "What is the square root of 1024?",
            options: ["30", "31", "32", "33"],
            correctAnswer: 2
        },
        {
            question: "What is the value of e (Euler's number) rounded to 3 decimal places?",
            options: ["2.718", "2.719", "3.142", "3.143"],
            correctAnswer: 0
        }
    ]
}



};

    // Add more subjects and difficulties as needed


// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Signup Form
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    currentUser = { username, email };
    document.getElementById('user-name').textContent = username;
    showPage('quiz-selection');
});

// Login Form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    currentUser = { username: 'User', email };
    document.getElementById('user-name').textContent = currentUser.username;
    showPage('quiz-selection');
});

// Navigation Links
document.getElementById('login-link').addEventListener('click', () => showPage('login-page'));
document.getElementById('signup-link').addEventListener('click', () => showPage('signup-page'));

// Quiz Selection
document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentQuiz.subject = btn.dataset.subject;
    });
});

document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentQuiz.difficulty = btn.dataset.difficulty;
    });
});

// Start Quiz
document.getElementById('start-quiz').addEventListener('click', () => {
    if (!currentQuiz.subject || !currentQuiz.difficulty) {
        alert('Please select both subject and difficulty!');
        return;
    }

    currentQuiz.questions = quizQuestions[currentQuiz.subject][currentQuiz.difficulty];
    currentQuiz.currentQuestion = 0;
    currentQuiz.score = 0;
    loadQuestion();
    showPage('questions-page');
});

// Load Question
function loadQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    document.getElementById('question-number').textContent = 
        `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`;
    document.getElementById('score-display').textContent = `Score: ${currentQuiz.score}`;
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// Select Option
function selectOption(index) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.option')[index].classList.add('selected');
}

// Next Question
document.getElementById('next-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const selectedIndex = Array.from(document.querySelectorAll('.option')).indexOf(selectedOption);
    if (selectedIndex === currentQuiz.questions[currentQuiz.currentQuestion].correctAnswer) {
        currentQuiz.score++;
    }

    if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
        currentQuiz.currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById('final-score').textContent = currentQuiz.score;
        showPage('score-page');
    }
});

// Encouragement
const encouragements = [
    "Amazing work! Your dedication to learning is inspiring!",
    "Every question you tackle makes you stronger and smarter!",
    "You're on a fantastic journey of growth and discovery!",
    "Keep pushing forward - you're capable of amazing things!",
    "Your curiosity and determination will take you far!"
];
const stars = document.querySelectorAll('.star');
const ratingValueDisplay = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        updateRating(rating);
    });

    star.addEventListener('mouseover', () => {
        resetStars();
        highlightStars(star.getAttribute('data-value'));
    });

    star.addEventListener('mouseleave', () => {
        resetStars();
        updateRatingDisplay();
    });
});

let currentRating = 0;

function updateRating(rating) {
    currentRating = rating;
    updateRatingDisplay();
    resetStars();
    highlightStars(rating);
}

function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        }
    });
}

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('selected');
    });
}

function updateRatingDisplay() {
    ratingValueDisplay.textContent = `Rating: ${currentRating}`;
}

document.getElementById('see-encouragement').addEventListener('click', () => {
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    document.getElementById('encouragement-text').textContent = randomEncouragement;
    showPage('encouragement-page');
});

// Try Again
document.getElementById('try-again').addEventListener('click', () => {
    showPage('quiz-selection');
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    currentUser = null;
    currentQuiz = {
        subject: '',
        difficulty: '',
        currentQuestion: 0,
        score: 0,
        questions: []
    };
    document.getElementById('signup-form').reset();
    document.getElementById('login-form').reset();
    showPage('signup-page');
});
