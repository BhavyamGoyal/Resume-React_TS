import { projectsData, ProjectType } from "../ProfileData";


const PersonalProjects = () => {
    return (
        <>
            <div className="flex flex-col  w-full mb-4">
                <div className="text-blue-500 border-b pb-1 mb-2">
                    Personal/Freelance projects
                </div>
                <ul>
                    {
                        projectsData.map((data, index) => {
                            return (
                                <li className="ml-4 list-disc text-xs ">
                                    <a
                                        href={data.link}
                                        className="text-blue-500 underline"
                                    >
                                        <b>
                                            {data.title}
                                        </b>
                                    </a>
                                    - {data.description}
                                </li>
                            );
                        })
                    }

                </ul>
            </div>
        </>
    );
};
export default PersonalProjects;