import {skills} from "../../ProfileData";

const Skills = () => {
    return (
        <>
            <div className="flex flex-col  w-full my-4">
                <div className="text-blue-500 border-b pb-1">Skills</div>
                <div className="flex gap-4 flex-wrap mt-4">
                    {skills.map(skill => (
                        <div className="rounded bg-blue-100 text-blue-800 py-1 px-4 text-xs">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </>);
}

export default Skills;