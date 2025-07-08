# Authentication & Security Study App

## Overview
This is an interactive web-based study application focused on essential web security concepts from Peter YAU's CSC1106 Web Programming lecture, specifically covering:
- **Session Management**: From stateless HTTP to stateful applications
- **Authentication vs Authorization**: Understanding the fundamental differences
- **Authentication Factors**: Multi-factor authentication concepts
- **Session Storage**: Cookies, localStorage, and server-side storage
- **Security Attacks**: Understanding authentication vulnerabilities

## Features
### 📝 Quiz Mode
- **15 Comprehensive Questions**: Covering all major security concepts
- **Security-Themed Interface**: Professional design with security color scheme
- **Progress Tracking**: Visual progress bar and question counter
- **Immediate Feedback**: Detailed explanations for each security concept
- **Importance Indicators**: Critical security concepts marked with 🔐 badges
- **Attack Awareness**: Focus on understanding security vulnerabilities

### 🃏 Flashcard Mode
- **Interactive 3D Flashcards**: Flip cards to reveal answers and explanations
- **Smart Navigation**: Previous/Next controls with keyboard support
- **Security Focus Filtering**: Concentrate on high-importance security concepts
- **Shuffle Feature**: Randomize study order for better retention
- **Visual Security Indicators**: Critical concepts highlighted with glowing badges

### 🔐 Security-Specific Features
- **Authentication Focus**: Deep dive into authentication vs authorization
- **Session Management**: Understanding stateless to stateful transitions
- **Attack Prevention**: Knowledge of common security vulnerabilities
- **Best Practices**: Industry-standard security implementations
- **Multi-Factor Concepts**: Comprehensive understanding of nFA

## Technologies Used
- **HTML5**: Semantic structure with security-focused accessibility
- **CSS3**: Security-themed styling with professional blue/purple gradients
- **JavaScript (ES6+)**: Interactive functionality and secure state management
- **Pure Implementation**: No external dependencies for security isolation

## Study Content
The application covers **15 essential questions** focusing on web security fundamentals:

### 🔥 High Importance Topics (11 questions)
1. **Authentication vs Authorization**: Core security concepts
2. **Multi-Factor Authentication**: Understanding nFA implementations
3. **Session Management**: HTTP stateless to stateful transformation
4. **Client-Side Storage**: Cookies and HTML5 localStorage security
5. **Role-Based Access Control**: RBAC implementation concepts
6. **Server-Side Sessions**: Secure session storage strategies
7. **Authentication Attacks**: Understanding common vulnerabilities
8. **Session Security**: Best practices for session management
9. **Form-Based Authentication**: Cookie-based authentication flows

### 📚 Medium Importance Topics (4 questions)
1. **Authentication Factors**: Specific examples of factor types
2. **Hardware Tokens**: Understanding physical authentication devices
3. **Behavioral Biometrics**: Pattern-based authentication methods
4. **Location-Based Security**: Geographic authentication factors

## How to Run
1. Navigate to the directory:
   ```
   cd "e:\Rust_Quiz\Week_3\auth_security_quiz"
   ```

2. **Simple Method**: Open `index.html` directly in any modern web browser

3. **Server Method** (recommended for security testing):
   ```
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. Access at `http://localhost:8000` (if using server)

## Learning Objectives
After completing this study app, you should understand:
- The fundamental difference between authentication and authorization
- How session management transforms HTTP from stateless to stateful
- Various authentication factors and multi-factor authentication
- Security implications of client-side vs server-side session storage
- Common authentication attacks and prevention strategies
- Role-based access control implementation
- Best practices for secure web application development

## Keyboard Shortcuts
### Quiz Mode
- **Enter**: Proceed to next question/check answer
- **1-4**: Select answer options
- **Ctrl/Cmd + 1**: Switch to Quiz mode
- **Ctrl/Cmd + 2**: Switch to Flashcard mode

### Flashcard Mode  
- **Left Arrow**: Previous card
- **Right Arrow**: Next card
- **Space/Enter**: Flip card
- **Ctrl/Cmd + 1**: Switch to Quiz mode
- **Ctrl/Cmd + 2**: Switch to Flashcard mode

## Performance Levels
- **80%+**: Excellent understanding of web security concepts 🔐✨
- **60-79%**: Good foundation, review authentication factors and session management 👍
- **Below 60%**: Study authentication vs authorization fundamentals 📚

**Security Focus**: High-importance questions track your understanding of concepts critical for building secure web applications.

## File Structure
```
auth_security_quiz/
├── index.html           # Main HTML with security-themed interface
├── styles.css          # Security-focused styling with professional design
├── quiz.js             # Quiz logic emphasizing security concepts
├── flashcards.js       # Interactive security study cards
├── navigation.js       # Tab switching and keyboard shortcuts
└── README.md          # This comprehensive documentation
```

## Study Tips
1. **Master the Basics**: Clearly understand authentication vs authorization
2. **Focus on Session Management**: Understand how HTTP becomes stateful
3. **Learn Authentication Factors**: Know all five factor types
4. **Practice Security Thinking**: Consider attack vectors for each concept
5. **Use Important Filter**: Focus on high-importance security concepts first

## Key Security Concepts
- **Authentication**: "Who are you?" - Identity verification
- **Authorization**: "What can you do?" - Permission verification
- **Session Management**: Maintaining state across HTTP requests
- **Multi-Factor Authentication**: Combining multiple authentication factors
- **Secure Session Storage**: Server-side vs client-side considerations
- **Attack Prevention**: Understanding and mitigating security vulnerabilities

## Real-World Applications
- **Web Application Security**: Implementing secure login systems
- **API Security**: Token-based authentication and authorization
- **Session Management**: Secure session handling in web frameworks
- **Enterprise Security**: Role-based access control implementation
- **Security Auditing**: Identifying authentication vulnerabilities
- **Compliance**: Meeting security standards and regulations

## Security Best Practices Covered
- Never store sensitive session data client-side
- Implement proper session timeout mechanisms
- Use secure session ID generation
- Understand and prevent session hijacking
- Implement proper role-based access controls
- Use multi-factor authentication where appropriate

## Author
Content based on CSC1106 Web Programming Lecture 06 by Peter YAU  
Interactive security study application designed to reinforce secure web development practices and authentication system understanding.
