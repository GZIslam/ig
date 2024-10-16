const skills = [
    {
        name: "JavaScript",
        level: "2",
    },
    {
        name: "TypeScript",
        level: "2",
    },
    {
        name: "Node.js",
        level: "2",
    },
    {
        name: "HTML5",
        level: "2",
    },
    {
        name: "CSS3",
        level: "2",
    },
    {
        name: "SASS",
        level: "2",
    },
    {
        name: "SCSS",
        level: "2",
    },
    {
        name: "React",
        level: "2",
    },
    {
        name: "Next",
        level: "2",
    },
    {
        name: "Vue",
        level: "2",
    },
    {
        name: "Nest",
        level: "2",
    },
    {
        name: "Redux",
        level: "2",
    },
    {
        name: "Zustand",
        level: "2",
    },
    {
        name: "MongoDB",
        level: "2",
    },
    {
        name: "Postgres",
        level: "2",
    },
    {
        name: "Express",
        level: "2",
    },
    {
        name: "Telegram",
        level: "2",
    },
    {
        name: "websockets",
        level: "2",
    },
    {
        name: "CI/CD",
        level: "2",
    },
    {
        name: "Docker",
        level: "2",
    },
    {
        name: "Git",
        level: "2",
    },
    {
        name: "Figma",
        level: "2",
    },
    {
        name: "VSCode",
        level: "2",
    },
    {
        name: "Jira",
        level: "2",
    },
]

function Profile() {
    return (
        <div className={"screen"}>
            <h2>Gaibullaev Islam</h2>
            <h3>Frontend/Fullstack JS/TS Developer</h3>
            <div className="links">
                <a href="">gaibullaeviz@gmail.com</a>
                <a href="">@greatree</a>
            </div>
            <p>
                Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
            </p>
            <h4>Skills</h4>
            <div className="skills">
                {skills.map((skill) => <span key={skill.name}>{skill.name}</span>)}
            </div>
        </div>
    )
}

export default Profile

