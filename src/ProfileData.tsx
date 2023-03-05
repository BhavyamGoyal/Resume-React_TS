import { type } from "os"

type LinkType = {
    link: string,
    label: string,
}

export type ProjectType = {
    link: string,
    title: string,
    description: string,
}

export type Project = {
    description: string,
    responsibilities: string[],
    techUsed: string
}

export type ExperienceType = {
    title: string;
    project: Project[],
    company: string;
    duration: string;
}
export const mobileNumber = "+91 8076564611";
export const personName = "Bhavyam Kr Goyal";
export const location = "New Delhi";
export const email = "bhavyam.kr.goyal@gmail.com";
export const github: LinkType = {
    link: "https://github.com/BhavyamGoyal",
    label: "Github"
};
export type SkillType = {
    category: string,
    skills: string[],
}
export type Certificate = {
    title: LinkType,
    description: string
}
export const certificates: Certificate[] = [{
    title: {
        link: "https://www.linkedin.com/in/bhavyam-goyal-3ab948143/",
        label: "test certi "
    },
    description: " - i did this so many e=years ago."
}, {
    title: {
        link: "https://www.linkedin.com/in/bhavyam-goyal-3ab948143/",
        label: "test certi "
    },
    description: " - i did this so many e=years ago."
}];


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

export const skills: SkillType[] = [
    {
        category: "Tech",
        skills: ["MERN", "java", "test"]
    },
    {
        category: "Tech",
        skills: ["MERN", "java", "test"]
    },
    {
        category: "Tech",
        skills: ["MERN", "java", "test"]
    }
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
        project: [
            {
                description: "sdfs ds fdsfdsfds s d ds fdsf ds f sgfdsgs ",
                techUsed: "dfdfdfdfdf, dfdfdf, dfdfd",
                responsibilities: [
                    "Create custumizable plugins for NFT market place.",
                    "Implement web2/blockchain features swap and bid for NFTs.",
                    "Redesign the websites look and feel using low-code/no-code.",
                ],
            },
        ],
        duration: "Aug 2022 - Present",

    },
    {
        title: "Fullstack Web3 Developer",
        company: "Xooa",
        project: [
            {
                description: "sdfs ds <b>fdsfdsfds</b> s d ds fdsf ds f sgfdsgs Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.",
                techUsed: "dfdfdfdfdf, dfdfdf, dfdfd",
                responsibilities: [
                    "Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.Create custumizable plugins for NFT market place.",
                    "Implement web2/blockchain features swap and bid for NFTs.",
                    "Redesign the websites look and feel using low-code/no-code.",
                ],
            },
            {
                description: "sdfs ds fdsfdsfds s d ds fdsf ds f sgfdsgs ",
                techUsed: "dfdfdfdfdf, dfdfdf, dfdfd",
                responsibilities: [
                    "Create custumizable plugins for NFT market place.",
                    "Implement web2/blockchain features swap and bid for NFTs.",
                    "Redesign the websites look and feel using low-code/no-code.",
                ],
            },
        ],
        duration: "Aug 2022 - Present",
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