// Quiz Questions Database - Authentication and Security concepts
const quizQuestions = [
    {
        question: "What is the fundamental difference between Authentication and Authorization?",
        options: [
            "Authentication is for users, Authorization is for admins",
            "Authentication verifies identity, Authorization determines permissions",
            "Authentication is client-side, Authorization is server-side",
            "Authentication uses passwords, Authorization uses tokens"
        ],
        correct: 1,
        explanation: "Authentication answers 'Who are you?' by verifying identity, while Authorization answers 'What are you allowed to do?' by determining permissions for authenticated users.",
        importance: "high"
    },
    {
        question: "Which of the following is NOT a common authentication factor?",
        options: [
            "Something you know (password)",
            "Something you have (token)",
            "Who you are (biometrics)",
            "Something you bought (purchase history)"
        ],
        correct: 3,
        explanation: "The standard authentication factors are: something you know, something you have, who you are (biometrics), what you do (behavioral), and where you are (location). Purchase history is not an authentication factor.",
        importance: "medium"
    },
    {
        question: "What does 'n-factor authentication' (nFA) mean?",
        options: [
            "Using n different passwords",
            "Authentication that takes n seconds",
            "Using a combination of n authentication factors",
            "Authentication for n different users"
        ],
        correct: 2,
        explanation: "n-factor authentication means using a combination of n different authentication factors (like password + SMS code for 2FA) to increase security.",
        importance: "high"
    },
    {
        question: "In session management, what is the main challenge with HTTP being stateless?",
        options: [
            "HTTP requests are too slow",
            "Cannot remember user state between requests",
            "HTTP only supports GET requests",
            "Cannot send encrypted data"
        ],
        correct: 1,
        explanation: "HTTP is stateless, meaning each request is independent. This makes it challenging to maintain user state (like login status) across multiple requests, requiring session management solutions.",
        importance: "high"
    },
    {
        question: "Which of the following is commonly used for client-side session storage?",
        options: [
            "MySQL databases",
            "Server log files",
            "Cookies and HTML5 localStorage",
            "Email attachments"
        ],
        correct: 2,
        explanation: "Cookies and HTML5 localStorage are the primary methods for client-side session storage, allowing web applications to store session data in the user's browser.",
        importance: "high"
    },
    {
        question: "What is the most common authorization model mentioned in the lecture?",
        options: [
            "Time-based access control",
            "Role-based access control (RBAC)",
            "Location-based access control",
            "Device-based access control"
        ],
        correct: 1,
        explanation: "Role-based access control (RBAC) is the most common authorization model, where permissions are assigned to roles, and users are assigned to roles.",
        importance: "high"
    },
    {
        question: "In the context of 'something you have' authentication, what does 'xSiTe' likely refer to?",
        options: [
            "A website URL",
            "A hardware security token",
            "A type of encryption",
            "A programming language"
        ],
        correct: 1,
        explanation: "xSiTe appears to be a hardware security token or similar physical device used for authentication, representing the 'something you have' factor.",
        importance: "medium"
    },
    {
        question: "Which authentication factor involves 'the way you shake/tap smartphone'?",
        options: [
            "Something you know",
            "Something you have",
            "Who you are",
            "What you do"
        ],
        correct: 3,
        explanation: "Behavioral patterns like how you shake or tap your smartphone fall under 'what you do' - behavioral biometrics that analyze unique patterns in user behavior.",
        importance: "medium"
    },
    {
        question: "When Facebook checks if your country has changed, which authentication factor is being used?",
        options: [
            "Something you know",
            "Something you have",
            "Who you are",
            "Where you are"
        ],
        correct: 3,
        explanation: "Location-based verification (checking IP address, GPS, country changes) represents the 'where you are' authentication factor, used to detect potentially suspicious login attempts.",
        importance: "medium"
    },
    {
        question: "What is the primary purpose of session management in web applications?",
        options: [
            "To make websites load faster",
            "To transform HTTP from stateless to stateful",
            "To reduce server storage",
            "To improve website design"
        ],
        correct: 1,
        explanation: "Session management's primary purpose is to transform HTTP from stateless to stateful, allowing web applications to maintain user state and context across multiple requests.",
        importance: "high"
    },
    {
        question: "In role-based access control, what question does the system typically ask?",
        options: [
            "Is the password correct?",
            "Is user A allowed to do task T1?",
            "How fast is the internet connection?",
            "What browser is being used?"
        ],
        correct: 1,
        explanation: "In RBAC systems, the key authorization question is whether a specific user is allowed to perform a specific task, based on their assigned roles and permissions.",
        importance: "high"
    },
    {
        question: "Which of the following best describes server-side session storage?",
        options: [
            "Storing session data in the user's browser only",
            "Storing session data on the server with client holding session ID",
            "Never storing any session data",
            "Storing session data in email"
        ],
        correct: 1,
        explanation: "Server-side session storage involves keeping session data on the server while the client (browser) only holds a session identifier, providing better security and control.",
        importance: "high"
    },
    {
        question: "What type of attack might target authentication systems?",
        options: [
            "Only password guessing",
            "Only network sniffing",
            "Various authentication attacks including brute force, session hijacking, etc.",
            "Only physical theft"
        ],
        correct: 2,
        explanation: "Authentication systems face various types of attacks including brute force attacks, session hijacking, credential stuffing, man-in-the-middle attacks, and social engineering.",
        importance: "high"
    },
    {
        question: "Which method provides better security for session data?",
        options: [
            "Storing everything in browser cookies",
            "Server-side session storage with secure session IDs",
            "Storing in browser URL parameters",
            "Never using sessions at all"
        ],
        correct: 1,
        explanation: "Server-side session storage with secure session IDs provides better security because sensitive session data remains on the server, and only a session identifier is sent to the client.",
        importance: "high"
    },
    {
        question: "In the context of authentication using forms and cookies, what is the typical flow?",
        options: [
            "User submits credentials → Server validates → Sets session cookie",
            "User downloads certificate → Installs locally → Automatic login",
            "User provides biometric → Server scans → Immediate access",
            "User types URL → Server grants access → No validation needed"
        ],
        correct: 0,
        explanation: "The typical flow for form-based authentication with cookies is: user submits credentials through a form, server validates them, and if successful, sets a session cookie for subsequent requests.",
        importance: "high"
    }
];

// Quiz Application Class
class QuizApp {
    constructor() {
        this.questions = [...quizQuestions];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedOption = null;
        this.isAnswered = false;
        
        this.initializeElements();
        this.setupEventListeners();
        this.displayQuestion();
    }

    initializeElements() {
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.progressBar = document.getElementById('progress');
        this.questionNumber = document.getElementById('question-number');
        this.totalQuestions = document.getElementById('total-questions');
        this.scoreContainer = document.getElementById('score-container');
        this.explanationContainer = document.getElementById('explanation-container');
        this.explanationText = document.getElementById('explanation-text');
        this.finalScore = document.getElementById('final-score');
        this.totalScore = document.getElementById('total-score');
        this.scorePercentage = document.getElementById('score-percentage');
        this.scoreMessage = document.getElementById('score-message');
        
        this.totalQuestions.textContent = this.questions.length;
    }

    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Reset state
        this.selectedOption = null;
        this.isAnswered = false;
        this.nextBtn.disabled = true;
        this.explanationContainer.style.display = 'none';
        
        // Show/hide importance badge
        const importanceBadge = document.getElementById('importance-badge');
        if (question.importance === 'high') {
            importanceBadge.style.display = 'block';
        } else {
            importanceBadge.style.display = 'none';
        }
        
        // Update progress
        const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.questionNumber.textContent = this.currentQuestionIndex + 1;
        
        // Display question
        this.questionText.textContent = question.question;
        
        // Clear and create options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index, optionElement));
            this.optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(selectedIndex, optionElement) {
        if (this.isAnswered) return;

        // Remove previous selections
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Mark as selected
        optionElement.classList.add('selected');
        this.selectedOption = selectedIndex;
        
        // Enable next button
        this.nextBtn.disabled = false;
    }

    checkAnswer() {
        const question = this.questions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // Mark correct answer
        options[question.correct].classList.add('correct');
        
        // Mark incorrect answer if user selected wrong
        if (this.selectedOption !== question.correct) {
            options[this.selectedOption].classList.add('incorrect');
        } else {
            this.score++;
        }
        
        // Disable all options
        options.forEach(option => {
            option.classList.add('disabled');
            option.style.pointerEvents = 'none';
        });
        
        // Show explanation
        this.explanationText.textContent = question.explanation;
        this.explanationContainer.style.display = 'block';
        
        this.isAnswered = true;
        this.nextBtn.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'View Results' : 'Next Question';
    }

    nextQuestion() {
        if (!this.isAnswered) {
            this.checkAnswer();
            return;
        }

        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }

    showResults() {
        // Hide quiz container
        document.querySelector('.question-container').style.display = 'none';
        document.querySelector('.quiz-controls').style.display = 'none';
        this.explanationContainer.style.display = 'none';
        
        // Update progress to 100%
        this.progressBar.style.width = '100%';
        
        // Show score
        this.scoreContainer.style.display = 'block';
        this.finalScore.textContent = this.score;
        this.totalScore.textContent = this.questions.length;
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        this.scorePercentage.textContent = `${percentage}%`;
        
        // Calculate high importance questions performance
        const highImportanceQuestions = this.questions.filter(q => q.importance === 'high');
        const highImportanceCount = highImportanceQuestions.length;
        const highImportanceCorrect = this.calculateHighImportanceScore();
        
        // Show message based on performance
        let message, messageClass;
        if (percentage >= 80) {
            message = "Excellent! You have a strong understanding of authentication and security concepts. 🔐✨";
            messageClass = "excellent";
        } else if (percentage >= 60) {
            message = "Good job! You understand the basics, but review authentication factors and session management. 👍";
            messageClass = "good";
        } else {
            message = "Keep studying! Focus on the differences between authentication and authorization, and session management concepts. 📚";
            messageClass = "needs-improvement";
        }
        
        this.scoreMessage.textContent = message;
        this.scoreMessage.className = `score-message ${messageClass}`;
        
        // Show high importance summary
        const highImportanceSummary = document.getElementById('high-importance-summary');
        highImportanceSummary.innerHTML = `
            <h4>🔐 High Importance Security Concepts</h4>
            <p>You got ${highImportanceCorrect} out of ${highImportanceCount} critical security concepts correct (${Math.round((highImportanceCorrect/highImportanceCount)*100)}%). 
            These are essential for building secure web applications and understanding authentication systems.</p>
        `;
        
        // Show restart button
        this.restartBtn.style.display = 'inline-block';
    }

    calculateHighImportanceScore() {
        const highImportanceQuestions = this.questions.filter(q => q.importance === 'high');
        const totalHighImportance = highImportanceQuestions.length;
        const overallPercentage = this.score / this.questions.length;
        
        // Estimate high importance score based on overall performance
        return Math.round(overallPercentage * totalHighImportance);
    }

    restartQuiz() {
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedOption = null;
        this.isAnswered = false;
        
        // Reset UI
        this.scoreContainer.style.display = 'none';
        this.explanationContainer.style.display = 'none';
        this.restartBtn.style.display = 'none';
        this.nextBtn.textContent = 'Next Question';
        
        document.querySelector('.question-container').style.display = 'block';
        document.querySelector('.quiz-controls').style.display = 'block';
        
        // Shuffle questions for variety
        this.shuffleQuestions();
        
        // Start over
        this.displayQuestion();
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// Add some interactive feedback
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('option') && !e.target.classList.contains('disabled')) {
        // Add a subtle click animation
        e.target.style.transform = 'scale(0.98)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const nextBtn = document.getElementById('next-btn');
        if (!nextBtn.disabled) {
            nextBtn.click();
        }
    }
    
    // Number keys for option selection
    if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option:not(.disabled)');
        if (options[optionIndex]) {
            options[optionIndex].click();
        }
    }
});
