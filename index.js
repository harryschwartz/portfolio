// expand strength sections
document.addEventListener('DOMContentLoaded', () => {
    const strengthDivs = document.querySelectorAll('.strength');

    strengthDivs.forEach(strengthDiv => {
        strengthDiv.addEventListener('click', () => {
            const button = strengthDiv.querySelector('.arrow-button');
            const expandedDiv = strengthDiv.nextElementSibling;

            // Close any other expanded sections
            document.querySelectorAll('.strengthExpanded').forEach(div => {
                if (div !== expandedDiv) {
                    div.style.display = 'none';
                    div.previousElementSibling.querySelector('.arrow-button').classList.remove('clicked');
                }
            });

            if (expandedDiv.style.display === 'none' || expandedDiv.style.display === '') {
                expandedDiv.style.display = 'block';
                button.classList.add('clicked');
            } else {
                expandedDiv.style.display = 'none';
                button.classList.remove('clicked');
            }

            // Bring the .strength div to the top of the window
            strengthDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

// home refresh
const headerH1 = document.querySelector('header h1');
const anchor = document.createElement('a');
anchor.href = '#';
anchor.textContent = headerH1.textContent;

headerH1.textContent = '';
headerH1.appendChild(anchor);

anchor.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
});

// whole featured work as a button
document.addEventListener('DOMContentLoaded', () => {
    const featuredWorks = document.querySelectorAll('.work');

    featuredWorks.forEach(work => {
        const link = work.querySelector('a');
        const url = link.href;

        work.addEventListener('click', () => {
            window.location.href = url;
        });

        // Change cursor to pointer to indicate it's clickable
        work.style.cursor = 'pointer';
    });
});


// footer mailto link
document.addEventListener('DOMContentLoaded', () => {
    const hireMeButton = document.querySelector('footer button');
    hireMeButton.addEventListener('click', () => {
        window.location.href = 'mailto:harryschwartz@berkeley.edu';
    });
});


