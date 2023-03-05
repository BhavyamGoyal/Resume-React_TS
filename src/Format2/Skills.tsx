import { skills } from "../ProfileData";

const Skills = () => {
    return (
        <>
            <div className="flex flex-col  w-full my-4">
                <div className="text-blue-500 border-b pb-1">Skills</div>
                <div className="flex gap-2 flex-wrap mt-4">
                    {skills.map(skill => (
                        <div className="flex text-xs rounded bg-blue-100 text-blue-800 py-1 px-4 text-xs ">
                            <div style={{ fontWeight: "bold" }} className="mr-1" dangerouslySetInnerHTML={{ __html: skill.category }}></div>:
                            {skill.skills.map((skillList, index) => (
                                <div className="flex">
                                    <div className="ml-1 " dangerouslySetInnerHTML={{ __html: skillList }}></div>
                                    {skill.skills.length - 1 !== index && <div>,</div>}
                                </div>))}
                        </div>
                    ))}

                </div>
            </div>
        </>);
}

export default Skills;