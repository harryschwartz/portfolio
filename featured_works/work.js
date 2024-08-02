// header back button
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const link = document.createElement('a');
    link.href = '../index.html';

    // Move all header content inside the link
    while (header.firstChild) {
        link.appendChild(header.firstChild);
    }

    // Append the link to the header
    header.appendChild(link);
});

// footer resume link
document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.getElementById('resume');
    resumeButton.addEventListener('click', () => {
        window.open('../assets/resume.pdf', '_blank');
    });
});

// footer mailto link
document.addEventListener('DOMContentLoaded', () => {
    const hireMeButton = document.querySelector('footer button');
    hireMeButton.addEventListener('click', () => {
        window.location.href = 'mailto:harryschwartz@berkeley.edu';
    });
});





