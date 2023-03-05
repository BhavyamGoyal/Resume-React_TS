import { educationData } from "../ProfileData";

function Education() {
    return (
        <>
            <div className="flex flex-col w-full my-4">
                <div className="text-blue-500 border-b pb-1 mb-2">Education</div>

                <ul className="text-sm">
                    {educationData.map((data, index) => {
                        return (
                            <li key={index}>
                                <div className="flex justify-between">
                                    <div>{data.degree} - {data.school}</div>
                                    <div>{data.passingYear}</div>
                                </div>
                            </li>
                        )
                    })

                    }
                </ul>
            </div></>
    );
}

export default Education;