import { type } from "os";

type LinkType = {
    link: string,
    label:string,
}

export type ExperienceType ={
    title: string;
    company: string;
    duration: string;
    data: string[];
}
export const mobileNumber = "+91 8076564611";
export const personName="Bhavyam Kr Goyal";
export const location="New Delhi";
export const email="bhavyam.kr.goyal@gmail.com";
export const github:LinkType={
    link: "https://github.com/BhavyamGoyal",
    label: "Github"
};
export const linkedIn:LinkType={
    link: "https://www.linkedin.com/in/bhavyam-goyal-3ab948143/",
    label: "LinkedIn"
};

export const description = `Senior Frontend Developer with 3+ years of experience and significant
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
    "Next.js",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind",
    "Styled Components",
    "SCSS",
    "React Native",
    "Android (Kotlin)",
    "Firebase",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Figma",
    "Adobe XD",
    "Service Worker",
];

export const experienceData: ExperienceType[] = [
        {
            title: "Senior Frontend Developer",
            company: "Amaha (formerly InnerHour)",
            duration: "Jan 2022 - Present",
            data: [
                "Lead a team of 8 junior developers accross multiple projects",
                "Responsible for the entire feature lifecycle including development, code reviews, deployment and maintenance",
                "Worked closely with the product team to indentify and set OKRs for each quarter",
                "Implemented CI/CD pipeline to automate deployments and JIRA for the project management and bug tracking",
                "Introduced best practices such as code-splitting, unit testing and ESLint",
            ],
        },

        {
            title: "React/React Native Developer",
            company: "Amaha (formerly InnerHour)",
            duration: "Aug 2020 - Jan 2022",
            data: [
                "Worked on In-App purchases for our paid offerings",
                "Implemented Network Test for video calls using the OpenTok Network Stats API",
                "Integrated Moengage library to drive engagement",
                "Implemented unit tests using jest and react-test-renderer",
                "Responsible for the entire release cycle including publishing on App Store Connect",
            ],
        },
        {
            title: "Android Developer",
            company: "Amaha (formerly InnerHour)",
            duration: "Sep 2019 - Aug 2020",
            data: [
                "Transformed wireframes into reusable components conforming to Material Design guidelines",
                "Migrated codebase from Monolith Activity Architecture to MVVM",
                "Refactored modules using AsyncTask to make use of Kotlin coroutines",
                "Worked on reminder notifications using AlarmManager",
                "Implemented audio downloads using WorkManager",
                "Implemented unit tests using JUnit, Mockito and Robolectric",
            ],
        },

        {
            title: "Android Developer Intern",
            company: "Fotonicia",
            duration: "Mar 2019 - Sep 2019",
            data: [
                "Redesigned the Android app with improved onboarding experience and navigation structure",
                "Designed & implemented “Refer & Earn” rewards program using Firebase Dynamic Links",
                "Improved image editing experience and added features",
            ],
        },
    ];


export const educationData: {
    school: string;
    degree: string;
    passingYear: string;
}[] = [{
    school: "",
    degree: "",
    passingYear: "",
}, {
    school: "",
    degree: "",
    passingYear: "",
}]