import { experienceData, ExperienceType } from "../../ProfileData";

type PropsType = {
    experience: ExperienceType;
    hideBorder: boolean;
}

const Experience = ({ experience, hideBorder }: PropsType) => {
    const { title, company, duration, data } = experience;

    return (
        <>
            <div className="grid grid-cols-3  font-bold text-sm items-center">
                <div className="flex items-center text-start">
                    <div className="circle" />
                    <div>{title}</div>
                </div>
                <div className="text-center">{company}</div>
                <div className="text-end">{duration}</div>
            </div>
            <div
                className={`px-4 my-2 ml-3.5 ${hideBorder
                    ? "border-[#00000000] border-l-2"
                    : "border-blue-600 border-l-2"
                    }`}
            >
                <ul className="ml-4 list-disc text-xs ">
                    {data.map((item: any) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default Experience;