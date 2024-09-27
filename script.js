$(document).ready(function() {
    const skills = [
        { id: 'skill1', name: 'HTML', icon: 'images/html5-icon-12117.png' },
        { id: 'skill2', name: 'CSS', icon: 'images/CSS3.png' },
        { id: 'skill3', name: 'JavaScript', icon: 'images/JavaScript.png' },
        { id: 'skill4', name: 'Visual Studio Code', icon: 'images/Visual Studio Code (VS Code).png' },
        { id: 'skill5', name: 'BootStrap', icon: 'images/Bootstrap.png' },
        { id: 'skill6', name: 'Microsoft Office 365', icon: 'images/Microsoft_365_29.png' },
        { id: 'skill7', name: 'Microsoft Excel', icon: 'images/xls-icon-3392.png' },
        { id: 'skill8', name: 'MySQL', icon: 'images/MySQL.png' },
        { id: 'skill9', name: 'Tableau', icon: 'images/Tableau-Icon.png' },
        { id: 'skill10', name: 'PowerBI', icon: 'images/power-bi-icon.png' },
        { id: 'skill11', name: 'GitHub', icon: 'images/github-6980894_1280.png' },
        { id: 'skill12', name: 'Azure', icon: 'images/Microsoft_Azure.svg.png' },
        // Add more skills as needed
    ];

    const experiences = [
        { id: 'job1', title: 'IT Support Engineer', company: 'Alpha Global', description: '03/2024 – 09/2024' },
        { id: 'job2', title: 'Data Analyst Trainee', company: 'Just IT Skills Bootcamp', description: '12/2023 – 03/2024' },
        { id: 'job3', title: 'IT Support Officer: User Access Team Leader', company: 'Shared Technology Services', description: '07/2022 - 12/2023' },
        { id: 'job4', title: 'IT Support Officer', company: 'Shared Technology Services', description: '12/2020 – 07/2022' },
        { id: 'job5', title: 'IT Deployment Officer', company: 'Shared Technology Services', description: '12/2019 – 12/2020' },
        { id: 'job6', title: 'Project Support Officer', company: 'Lewisham Council', description: '08/2018 – 12/2019' },
        // Add more experiences as needed
    ];

    skills.forEach(skill => {
        $(`#${skill.id} img`).attr('src', skill.icon);
        $(`#${skill.id} span`).text(skill.name);
    });

  experiences.forEach(experience => {
        $(`#${experience.id}`).html(`
            <h3>${experience.title}</h3>
            <p>${experience.company}</p>
            <p>${experience.description}</p>
        `);
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
    
});
