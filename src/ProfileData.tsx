type LinkType = {
    link: string,
    label: string,
}

export type ProjectType = {
    link: string,
    title: string,
    description: string,
}

export type ExperienceType = {
    title: string;
    company: string;
    duration: string;
    data: string[];
}
export const mobileNumber = "+91 8076564611";
export const personName = "Bhavyam Kr Goyal";
export const location = "New Delhi";
export const email = "bhavyam.kr.goyal@gmail.com";
export const github: LinkType = {
    link: "https://github.com/BhavyamGoyal",
    label: "Github"
};
export const linkedIn: LinkType = {
    link: "https://www.linkedin.com/in/bhavyam-goyal-3ab948143/",
    label: "LinkedIn"
};

export const description = `<b>Senior Fullstack Developer</b> with 4+ years of experience and significant
contributions to teams of various sizes and scopes in my organisation.
Experienced in driving & facilitating projects from concept to launch as
a development leader. Dedicated to going the extra mile to ensure the
end consumer is unquestionably satisfied with the product or service
provided. I look forward to working in an environment that will
challenge me further; while allowing me to contribute to the continued
growth and success of the organisation.`

export const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "MongoDB",
    "DynamoDB",
    "Express.js",
    "Unity3D",
    "Web3",
    "Blockchain",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind",
    "SCSS",
    "React Native",
    "Flask",
    "MySQL",
];

export const projectsData: ProjectType[] = [
    {
        link: "",
        title: "Hospital VR Simulation",
        description: "A hospital Simulation demonstrating GRAF concept used for treating cancer. Displayed in Dr Reddy's International Medical Conference in Hyderabad.",
    },
    {
        link: "",
        title: "Buzzmed App",
        description: " A mobile application developed in React Native for medical news, with latest updates in medicine and medical research.",
    },
    {
        link: "https://play.google.com/store/apps/details?id=com.impracticalLabs.fruitBlock&hl=ar&gl=US",
        title: "FruitBlocks",
        description: "A casual block game with the right mix of tetris and match 3.",
    },
    {
        link: "https://play.google.com/store/apps/details?id=com.piyushsatija.pollutionmonitor&hl=ar&gl=US",
        title: "Air Pollution Monitor - AQI ",
        description: " 17k+ Installs, 4.2 Rating. Open-source Android Application that consumes a JSON API to show the Air Quality Index (AQI), based on GPS Location or Network Location.",
    }
];

export const experienceData: ExperienceType[] = [
    {
        title: "Fullstack Web3 Developer",
        company: "Xooa",
        duration: "Aug 2022 - Present",
        data: [
            "Create custumizable plugins for NFT market place.",
            "Implement web2/blockchain features swap and bid for NFTs.",
            "Redesign the websites look and feel using low-code/no-code.",
        ],
    },
    {
        title: "Software Endineer-3",
        company: "Odico A/S",
        duration: "May 2020 - July 2022",
        data: [
            "Worked on an Ipad application that allows the user to design 3D geometry and cammand a robot to cut it.",
            "Developed end to end web application to monitor the robotic arms working across Europe.",
            "Responsible for setting up the CI/CD on AWS service and using github actions",
        ],
    },
    {
        title: "Game Programmer",
        company: "Gameshastra",
        duration: "June 2019 - May 2020",
        data: [
            "Develop Song Beats, a multiplayer quiz game on song made in unity.",
            "Manage and train a small team(3-6) of interns and junior programmers.",
            "Worked on javascript based apps/games for some client projects."
        ],
    },

    {
        title: "Fullstack Game Developer",
        company: "Outscal",
        duration: "Jan 2019 - May 2019",
        data: [
            "Design Bow-Master, a multiplayer mobile game using unity 3d and photon.",
            "Develop a multiplayer mobile rummy game in unity with a backend developed in node.js and deployed on AWS.",
        ],
    },
];


export const educationData: {
    school: string;
    degree: string;
    passingYear: string;
}[] = [{
    school: "Jaypee Institute Of Information Technology",
    degree: "Masters ",
    passingYear: "2019",
}, {
    school: "ST. Mary’s School",
    degree: "Senior Secondary",
    passingYear: "2014",
}]