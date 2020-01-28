import React from "react"

function HertzLogo({width, height, fill, className}) {
    return (
        <svg width={width || 86} height={height ||24} className={className} viewBox="0 0 86 24">
            <title>{"Hertz"}</title>
            <g fill={fill || "#FFF"} fillRule="nonzero">
                <path d="M9.991.163C9.21 3.81 8.441 7.349 7.658 10.969h8.564c.275-1.206.563-2.454.824-3.701.467-2.183.92-4.366 1.4-6.55.041-.203.288-.528.453-.528 1.523-.054 3.06-.04 4.693-.04-.274 1.26-.521 2.44-.782 3.62-1.359 6.277-2.717 12.569-4.076 18.847-.22 1.003-.206 1.003-1.263 1.003h-3.088c-.247 0-.494-.027-.864-.04.576-2.726 1.139-5.356 1.715-8.055H6.67c-.467 2.156-.933 4.285-1.386 6.428-.357 1.667-.357 1.667-2.1 1.667-.96 0-1.921 0-2.882-.013-.069 0-.124-.027-.302-.082.069-.42.124-.854.206-1.288 1.51-7.105 3.02-14.21 4.502-21.315.123-.57.301-.827.96-.8 1.428.081 2.827.04 4.323.04zM36.81 18.129c.658 1.098 1.303 2.183 2.003 3.349-.7.393-1.331.814-2.004 1.125-2.539 1.22-5.229 1.6-8.001 1.153-3.335-.529-5.23-2.468-5.682-5.858-.48-3.62.384-6.97 2.635-9.884 2.525-3.282 6.835-4.57 10.801-3.336 2.924.908 4.625 3.091 4.653 6.224.014 1.342-.261 2.684-.398 4.027-.055.474-.302.61-.782.61-3.775-.014-7.549-.014-11.31-.014h-.796c-.713 2.251.508 4.028 2.814 4.177 1.949.122 3.76-.326 5.462-1.234.179-.109.357-.204.604-.34zm-.207-6.74c.261-1.22-.164-2.21-1.207-2.792-.934-.53-1.95-.597-2.992-.394-1.537.299-3.157 1.817-3.377 3.187h7.576zM73.481 19.16h8.88c-.316 1.437-.618 2.82-.947 4.19-.027.121-.302.27-.467.27-4.913.014-9.826 0-14.74 0-.041 0-.082-.027-.22-.095.11-.556.261-1.139.33-1.735.192-1.654.92-2.929 2.223-4.068 2.979-2.603 5.806-5.37 8.702-8.068.178-.162.411-.27.617-.407-.055-.08-.096-.162-.15-.23h-8.62c.33-1.56.632-2.997.947-4.475h15.482c-.289 1.41-.563 2.78-.879 4.136-.055.217-.302.38-.48.556-3.349 3.119-6.698 6.224-10.033 9.342-.178.136-.33.285-.645.583zM61.706 9.017c-.412 1.952-.824 3.864-1.236 5.79-.164.746-.343 1.491-.466 2.25-.261 1.533.411 2.387 2.003 2.482.865.054 1.73.014 2.677.014-.288 1.328-.535 2.59-.837 3.823-.028.136-.289.285-.453.312-2.128.475-4.186.312-6.08-.813-2.018-1.194-2.54-3.12-2.251-5.22.343-2.55.892-5.058 1.4-7.58.631-3.12 1.345-6.21 1.99-9.33.096-.474.274-.623.755-.61 1.44.028 2.868.014 4.392.014-.302 1.465-.577 2.861-.879 4.34h5.174c-.315 1.477-.59 2.847-.92 4.203-.04.149-.397.298-.617.311-1.523.028-3.033.014-4.652.014zM55.557 4.57c-.302 1.41-.576 2.78-.906 4.135-.027.122-.384.203-.59.244-1.07.163-2.168.204-3.212.461a2.207 2.207 0 00-1.633 1.614c-.521 1.87-1.03 3.742-1.468 5.627-.508 2.156-.934 4.325-1.414 6.481-.041.204-.302.488-.48.502-1.51.04-3.006.027-4.64.027.193-.908.371-1.736.55-2.55.782-3.457 1.455-6.928 2.374-10.358 1.441-5.424 6.396-7.078 10.664-6.346.22 0 .453.081.755.162z" />
            </g>
        </svg>
    )
}

export default HertzLogo
