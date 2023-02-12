import { email, github, personName, linkedIn, location, mobileNumber } from "../../ProfileData";

function Header() {
    return (
        <>
            <div className="flex  w-full items-center justify-between text-xs">
                <div>
                    <div>{location}</div>
                    <div>
                        <a
                            href={github.link}
                            className="text-blue-500 underline"
                        >
                            {github.label}
                        </a>{" "}
                        |{" "}
                        <a
                            href={linkedIn.link}
                            className="text-blue-500 underline"
                        >
                            {linkedIn.label}
                        </a>
                    </div>
                </div>

                <div className="text-3xl">{personName}</div>

                <div className="flex-col flex items-end">
                    <div>{mobileNumber}</div>
                    <div>
                        <a
                            href={"mailto:" + email}
                            className="text-blue-500 underline"
                        >
                            {email}
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-xs text-justify">
                Senior Frontend Developer with 3+ years of experience and significant
                contributions to teams of various sizes and scopes in my organisation.
                Experienced in driving & facilitating projects from concept to launch as
                a development leader. Dedicated to going the extra mile to ensure the
                end consumer is unquestionably satisfied with the product or service
                provided. I look forward to working in an environment that will
                challenge me further; while allowing me to contribute to the continued
                growth and success of the organisation.
            </div></>
    );
}

export default Header;