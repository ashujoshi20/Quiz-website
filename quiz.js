const form = document.getElementById('quiz-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = document.querySelector('input[name="answer"]:checked').value;
    if (answer === 'paris') {
        alert('Correct!');
    } else {
        alert('Incorrect. The correct answer is Paris.');
    }
    form.reset();
});