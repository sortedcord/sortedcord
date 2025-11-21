        // Loading Screen Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000);
            }, 2200);
        });

        // Horizontal Scroll Logic using Mouse Wheel (Only on Desktop)
        const scrollContainer = document.getElementById('scroll-container');

        scrollContainer.addEventListener('wheel', (evt) => {
            // Check if we are on desktop (width >= 768px)
            if (window.innerWidth >= 768) {
                evt.preventDefault();
                // Convert vertical scroll delta to horizontal scroll
                // Reverted to raw input (no multiplier) for 1:1 control
                scrollContainer.scrollLeft += evt.deltaY;
            }
            // Else: let native vertical scroll happen
        });

        // Clock Logic
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Little extra: Parallax effect on mouse move for the grid
        document.addEventListener('mousemove', (e) => {
            const grid = document.querySelector('.retro-grid');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            grid.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg) translateZ(0)`;
        });

        // PROJECT SCROLL BUTTON LOGIC
        const projectGrid = document.getElementById('project-grid');
        const btnUp = document.getElementById('scroll-up');
        const btnDown = document.getElementById('scroll-down');

        // Scroll amount (approx height of one card + gap)
        const SCROLL_AMOUNT = 340; 

        btnUp.addEventListener('click', () => {
            projectGrid.scrollBy({ top: -SCROLL_AMOUNT, behavior: 'smooth' });
        });

        btnDown.addEventListener('click', () => {
            projectGrid.scrollBy({ top: SCROLL_AMOUNT, behavior: 'smooth' });
        });

        // Identity Glitch Logic
        const heroH1 = document.querySelector('#hero h1');
        // Characters to use during the morph/scramble phase
        const glitchChars = '█▓▒░/<>-_\\[]{}—=+*^?#________!@#$%^&*';
        
        function morphIdentity(targetText) {
            let iteration = 0;
            const maxIterations = 10; // How many frames of scrambling
            const speed = 50; // ms per frame

            const interval = setInterval(() => {
                // Create a random string of the target length during transition
                const randomStr = targetText.split('')
                    .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
                    .join('');
                
                heroH1.innerText = randomStr;
                heroH1.setAttribute('data-text', randomStr);

                iteration++;

                if (iteration >= maxIterations) {
                    clearInterval(interval);
                    
                    // Set the final legible text
                    heroH1.innerText = targetText;
                    heroH1.setAttribute('data-text', targetText);

                    // Schedule the next switch based on current text
                    if (targetText === 'ADITYA') {
                        // Stay on ADITYA for 3 seconds
                        setTimeout(() => morphIdentity('sortedcord'), 3000);
                    } else {
                        // Stay on sortedcord for 1 second
                        setTimeout(() => morphIdentity('ADITYA'), 1000);
                    }
                }
            }, speed);
        }

        // Initial Start: Page loads with ADITYA, wait 3s then start the loop
        setTimeout(() => morphIdentity('sortedcord'), 3000);


