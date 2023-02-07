const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(53, 161, 125)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'pink';

const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksTitle.length; index += 1) {
    emergencyTasksTitle[index].style.backgroundColor = 'purple';
};

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].style.backgroundColor = 'rgb(236, 235, 134)';

const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksTitle.length; index += 1) {
    noEmergencyTasksTitle[index].style.backgroundColor = 'rgb(33, 35, 43)';
};

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(2, 33, 34)';





