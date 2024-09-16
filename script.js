$(document).ready(function() {
    const skills = [
        { id: 'skill1', name: 'Skill 1', icon: 'path/to/icon1.png' },
        { id: 'skill2', name: 'Skill 2', icon: 'path/to/icon2.png' },
        { id: 'skill3', name: 'Skill 3', icon: 'path/to/icon3.png' },
        // Add more skills as needed
    ];

    skills.forEach(skill => {
        $(`#${skill.id} img`).attr('src', skill.icon);
        $(`#${skill.id} span`).text(skill.name);
    });
});
