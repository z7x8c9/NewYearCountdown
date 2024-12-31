function updateTime() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

function createForest() {
    const forest = document.querySelector('.forest');
    forest.innerHTML = '';
    const treeCount = Math.floor(window.innerWidth / 10); // Уменьшить интервал для плотного размещения

    for (let i = 0; i < treeCount; i++) {
        const tree = document.createElement('div');
        tree.className = 'tree';
        
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = '🎄'; 

        const snow = document.createElement('div');
        snow.className = 'snow';

        tree.appendChild(emoji);
        tree.appendChild(snow);

        const size = Math.random();
        if (size < 0.33) {
            tree.classList.add('small');
        } else if (size < 0.77) {
            tree.classList.add('medium');
        } else {
            tree.classList.add('large');
        }
        
        forest.appendChild(tree);
    }
}

function createSky() {
    const forest = document.querySelector('.sky');
    forest.innerHTML = '';
    const treeCount = Math.floor(window.innerWidth / 60); // Уменьшить интервал для плотного размещения

    for (let i = 0; i < treeCount; i++) {
        const tree = document.createElement('div');
        tree.className = 'cloud';
        
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = '☁️'; 

        const snow = document.createElement('div');
        snow.className = 'snow';

        tree.appendChild(emoji);
        tree.appendChild(snow);

        const size = Math.random();
        if (size < 0.33) {
            tree.classList.add('small');
        } else if (size < 0.77) {
            tree.classList.add('medium');
        } else {
            tree.classList.add('large');
        }
        
        forest.appendChild(tree);
    }
}

window.addEventListener('resize', createForest);

createForest();
setInterval(updateTime, 1000);
updateTime();

setInterval(createSnowflake, 200);
