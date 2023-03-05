import { email, github, personName, linkedIn, location, mobileNumber,description } from "../ProfileData";

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
            <div dangerouslySetInnerHTML={{__html: description}} className="mt-4 text-xs text-justify">
            </div></>
    );
}

export default Header;