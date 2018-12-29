
const PAGE = document.querySelector('.fun-page');

const createOneSnow = () => {
    const snow = document.createElement('img');
    snow.setAttribute('src', './img/snowflake-.svg');
    snow.classList.add('snow-svg');
    return snow;
};

const setupStyle = (snow) => {
    const randomPositionX = Math.round(Math.random() * 100);
    const randomAnimationTime = Math.round(Math.random() * 10);
    const styles = {
        left: `${randomPositionX}vw`,
        top: `-5vh`,
        transition: `all ${randomAnimationTime}s`,
        transform: 'translateY(0)',
        fill: `${getRandomColor()}`,
    };
    for (const style in styles) {
        snow.style[style] = styles[style];
    }
    return randomAnimationTime;
};

const beginAnimation = (snow) => {
    snow.style.transform = `translateY(110vh) rotate(180deg)`;
};

const insertIntoPage = (snow, index) => {
    PAGE.appendChild(snow);
    return setTimeout(() => beginAnimation(snow), index * 150);
};

const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createSnows = () => {
    Array.from({ length: 1000 }, () => createOneSnow()).forEach((snow, index) => {
        const time = setupStyle(snow);
        const id = insertIntoPage(snow, index);
        setTimeout(() => clearTimeout(id), time * 1000);
    });
    setTimeout(() => createSnows(), 150000);
};

createSnows();
