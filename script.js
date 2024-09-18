$(document).ready(function() {
    const skills = [
        { id: 'skill1', name: 'HTML', icon: 'images/html5.png' },
        { id: 'skill2', name: 'Skill 2', icon: 'https://github.com/RaevenCowell/RaevenCowell.github.io/blob/06489d937e971f0974f8dae39f4d1b263f2d7b7e/images/bootstrap.pnghttps://github.com/RaevenCowell/RaevenCowell.github.io/blob/06489d937e971f0974f8dae39f4d1b263f2d7b7e/images/bootstrap.png?raw=true' },
        { id: 'skill3', name: 'Skill 3', icon: 'path/to/icon3.png' },
        // Add more skills as needed
    ];

    const experiences = [
        { title: 'IT Support Engineer', company: 'Alpha Global', description: 'Description of job 1' },
        { title: 'Data Analyst Trainee', company: 'Just IT Skills Bootcamp', description: 'Description of job 2' },
        { title: 'IT Support Officer: User Access Team Leader', company: 'Shared Technology Services', description: 'Description of job 3' },
        // Add more experiences as needed
    ];

    skills.forEach(skill => {
        $(`#${skill.id} img`).attr('src', skill.icon);
        $(`#${skill.id} span`).text(skill.name);
    });

    experiences.forEach(experience => {
        $('.experience-container').append(`
            <div class="experience">
                <h3>${experience.title}</h3>
                <p>${experience.company}</p>
                <p>${experience.description}</p>
            </div>
        `);
    });
    
});
