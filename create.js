const fs = require('fs');
const path = require('path');

// Define the structure as an object
const structure = {
  'backend': {
    'server.js': '// Main Node.js server file',
    'models': {
      'User.js': '// User schema',
      'Expense.js': '// Expense schema',
    },
    'routes': {
      'auth.js': '// Authentication routes (Signup/Login)',
      'expenses.js': '// Expense management routes',
    },
  },
  'frontend': {
    'index.html': '<!-- Main HTML file -->',
    'signup.html': '<!-- Signup page -->',
    'login.html': '<!-- Login page -->',
    'style.css': '/* CSS file */',
    'scripts': {
      'app.js': '// JavaScript file',
    },
  },
};

// Function to create files and directories recursively
function createStructure(basePath, structure) {
  Object.keys(structure).forEach(item => {
    const itemPath = path.join(basePath, item);

    if (typeof structure[item] === 'string') {
      // Create file with initial content
      fs.writeFileSync(itemPath, structure[item]);
      console.log(`File created: ${itemPath}`);
    } else {
      // Create directory
      fs.mkdirSync(itemPath, { recursive: true });
      console.log(`Directory created: ${itemPath}`);
      createStructure(itemPath, structure[item]);
    }
  });
}

// Start creating structure in the current directory
createStructure(__dirname, structure);
