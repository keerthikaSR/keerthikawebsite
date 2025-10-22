document.addEventListener('DOMContentLoaded', () => {
    const downloadTrigger = document.getElementById('downloadTrigger');
    const passwordInput = document.getElementById('passwordInput');
    
    // --- CONFIGURATION ---
    const SECRET_PASSWORD = "Raadhimik"; 
    const FILE_PATH = "img/img/KEERTIKA_RESUME.pdf"; 
    // ---------------------
    
    // --- Stage 1: Initial Click (Shows the Input) ---
    downloadTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        if (passwordInput.style.display === 'none' || passwordInput.style.display === '') {
            passwordInput.style.display = 'block';
            passwordInput.focus(); 
            downloadTrigger.textContent = 'CONFIRM DOWNLOAD (Enter Key)'; 
        }
    });
    
    // --- Stage 2: Password Check (on Enter Keypress) ---
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            
            // Success check: Use trim() to remove any accidental spaces
            if (passwordInput.value.trim() === SECRET_PASSWORD) {
                
                // Success: Update the UI
                passwordInput.style.display = 'none';
                downloadTrigger.textContent = 'Download Starting...';
                
                // MOST RELIABLE DOWNLOAD METHOD: Forces the browser to the file path
                window.location.href = FILE_PATH; 
                
            } else {
                // Failure
                alert("Incorrect password. Please try again.");
                passwordInput.value = ""; 
                passwordInput.focus();
            }
        }
    });
});


