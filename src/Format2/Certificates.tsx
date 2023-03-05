import { certificates } from "../ProfileData";

const Skills = () => {
    return (
        <>
            <div className="flex flex-col  w-full my-4">
                <div className="text-blue-500 border-b pb-1">Certificates</div>
                <div className="flex gap-2 flex-wrap mt-4">
                    <ul className="ml-4 list-disc text-xs ">
                        {certificates.map(certificate => (
                            <li>
                                <div className="flex text-xs">
                                    <a
                                        href={certificate.title.link}
                                        dangerouslySetInnerHTML={{ __html: certificate.title.label }}
                                        className="text-blue-300  underline"
                                    >
                                    </a>
                                    <div className="ml-1 mr-1">-</div>
                                    <div dangerouslySetInnerHTML={{ __html: certificate.description }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>);
}

export default Skills;