const [current, images] = [document.querySelector('#active'), document.querySelectorAll('.images img')]
images.forEach(img => img.addEventListener('click', (e) => (current.src = e.target.src)))

