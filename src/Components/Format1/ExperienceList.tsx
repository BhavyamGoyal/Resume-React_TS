import { experienceData } from "../../ProfileData";
import Experience from "./Experience";
const ExperienceList = () => {
    return (
        <>
            <div className="flex flex-col  w-full my-4">
                <div className="text-blue-500 border-b pb-1 mb-2">
                    Professional Experience
                </div>
                {experienceData.map((data, index) => (
                    <Experience
                        key={index}
                        experience={data}
                        hideBorder={index === experienceData.length - 1}
                    />
                ))}
            </div>
        </>);
}

export default ExperienceList;