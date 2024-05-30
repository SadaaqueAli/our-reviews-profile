const profiles = [
    {
        img: 'img4.png',
        Name: 'Sadaqat Ali',
        Dezignation: 'Web developer',
        skils: 'Skilled in HTML, CSS, and JavaScript to create responsive and interactive user interfaces',
    },
    {
        img: 'img3.png',
        Name: 'Umar',
        Dezignation: 'Web designer',
        skils: 'Experienced in Adobe Photoshop, Illustrator, and InDesign for creating stunning graphics',
    },
    {
        img: 'img5.png',
        Name: 'Ahmed Ali',
        Dezignation: 'UX/UI Designer',
        skils: 'Passionate about creating intuitive and user-friendly designs for web and mobile applications',
    },
    {
        img: 'img2.png',
        Name: 'Uzair',
        Dezignation: 'Web Dezigner',
        skils: 'application; this includes buttons, menus, icons, and other visual components that users interact with to navigate and use the website.',
    },
];

let usercounter = 0;

const previousHandler = () => {
    usercounter--;
    if (usercounter < 0) usercounter = profiles.length - 1;
    updateProfile();
};

const nextHandler = () => {
    usercounter++;
    if (usercounter >= profiles.length) usercounter = 0;
    updateProfile();
};

const updateProfile = () => {
    document.querySelector('#img').src = profiles[usercounter].img;
    document.querySelector('#myName').textContent = profiles[usercounter].Name;
    document.querySelector('#mydez').textContent = profiles[usercounter].Dezignation;
    document.querySelector('#myskils').textContent = profiles[usercounter].skils;
};


updateProfile();


document.getElementById('btnPrevious').addEventListener('click', previousHandler);
document.getElementById('btnNext').addEventListener('click', nextHandler);
