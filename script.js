// Add any interactivity or dynamic behavior here
// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add this to your script.js file
document.querySelectorAll('.step-header').forEach(header => {
  header.addEventListener('click', () => {
    const step = header.parentElement;
    const content = header.nextElementSibling;
    
    // Close all other open steps
    document.querySelectorAll('.setup-step').forEach(s => {
      if (s !== step) {
        s.classList.remove('active');
        s.querySelector('.step-content').style.maxHeight = null;
      }
    });
    
    // Toggle current step
    step.classList.toggle('active');
    if (step.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
  
  // Open first step by default
  document.querySelector('.setup-step').classList.add('active');
  document.querySelector('.step-content').style.maxHeight = 
    document.querySelector('.step-content').scrollHeight + 'px';
});