
document.addEventListener('DOMContentLoaded', function () {
    const accordionQuestions = document.querySelectorAll('.accordion-question');
  
    accordionQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.accordion-toggle');
  
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          icon.textContent = '+';
        } else {
          answer.style.display = 'block';
          icon.textContent = '-';
        }
      });
    });
});
  
    // Footer 
    const currentYear = new Date().getFullYear();
    const footerYear = document.getElementById('current-year');
    footerYear.textContent = currentYear;
  