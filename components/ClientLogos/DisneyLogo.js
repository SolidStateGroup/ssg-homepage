import React from "react"

function DisneyLogo({width, height, fill, className}) {
    return (
        <svg width={width || "100%"} className={className} height={height || "auto"} viewBox="0 0 93 38">
            <title>{"Disney"}</title>
            <g fill={fill || "#FFF"} fillRule="nonzero">
                <path d="M8.483.022C4.888.123 1.978.57 1.326 1.264.753 1.879.034 2.394.01 3.22c-.022.816.933.884 1.517.884.584 0 1.113-.045 1.101-.392 0-.47-.764-.38-.764-.85 0-.548 2.978-.682 4.461-.682 12.776-.045 27.462 8.757 27.484 16.217.022 5.804-7.562 7.102-11.753 7.113-1.483.01-2.933-.157-4.304-.403-.056-1.856-.168-5.726-.224-8.175.483-.012.932-.012 1.326-.012 3.09-.01 7.157 1.074 7.168 1.79 0 .615-1.078 1.04-1.078 1.633.01.436 1 .369 1.865.425.157.01 1.91-.962 1.899-2.494 0-2.036-2.55-4.44-10.866-4.418-.112 0-.236.011-.36.011-.078-2.281-.415-5.883-1.718-5.883-1.08.012-1.394 3.97-1.495 6.163-4.663.693-8.81 2.583-8.798 4.44 0 1.52 3.337 5.357 8.73 7.683.09 1.723.428 2.908 1.956 2.897 1.123 0 1.494-.817 1.618-1.678 1.741.448 3.64.694 5.64.694 7.832-.023 14.113-4.183 14.09-9.887C37.485 10.647 21.968-.358 8.473.011l.011.011zm-2.1 19.036c0-1.331 4.078-1.835 7.842-2.025-.034 2.092-.056 5.1-.056 7.102-4.63-1.622-7.787-4.205-7.787-5.077zM40.316 14.058c-1.326.011-1.36 5.313-1.393 7.248-.09 4.428.561 4.954 1.741 4.943 1.056 0 1.427-.123 1.326-3.825-.157-7.001-.64-8.355-1.674-8.355v-.01zM41.001 12.045c2.933-.011 7.596-3.321 7.585-6.062 0-1.241-.64-1.867-2.248-2.102-.674-.638-1.662-1.353-3.134-1.353-4.562.01-7.518 3.623-7.518 5.592 0 .727.236 1.621.888 2.37.023 1.566.405 1.98.922 1.98.573 0 .91-.324 1.134-.727.652.202 1.439.313 2.371.302zm.304-2.225c-.686 0-1.248-.079-1.73-.224C40.865 8.142 44 5.39 45.54 5.39c1.011-.011 1.18.794 1.18 1.096 0 1.845-3.787 3.344-5.416 3.344V9.82zm.213-4.888c-1.404.828-2.843 1.969-3.798 3.12a1.588 1.588 0 01-.067-.436c-.011-.883 1.292-2.248 3.865-2.684zM56.17 15.009c-.011-1.22-3.18-1.208-4.955-1.197-1.337 0-8.124.157-8.113 3.926.012 2.55 3.798 1.935 6.315 2.18 2.056.202 4.55.862 4.55 1.533.012 1.487-5.426 2.091-6.55 2.103-2.303 0-2.36-.66-2.36-1.007 0-.336.383-.906 1.248-.906s2.64 1.096 3.865 1.096c1.225-.011 2.259-.548 2.247-1.096 0-.995-4.067-1.487-5.326-1.476-1.314.011-3.213.548-3.213 2.516.011 1.018 1.685 3.445 6.416 3.422 4.663-.01 5.843-2.65 5.831-4.003-.01-3.31-3.146-3.68-5.888-3.915-2.045-.168-4.27-.268-4.258-.716.022-1.51 10.191-.391 10.18-2.449l.011-.011zM63.912 12.213c-.382 0-.45.403-.45.839.012 1.286 1.798 5.793 1.798 7.504 0 .358-.033.996-.303 1.074-.427.123-4.18-6.688-5.73-6.789-1.607-.112-2.461 6.677-2.45 8.355.011 1.677.303 2.796 1.54 2.796 1.853-.012.887-6.8 1.64-6.8.55 0 3.573 6.207 5.247 6.207 1.82-.011 2.9-2.662 2.888-4.384-.011-3.948-2.652-8.79-4.18-8.79v-.012zM76.497 22.726c-.652 0-4.281.805-4.517.581-.236-.223.202-2.303.663-2.449.46-.145 3.292-.1 3.753-.134 1.314-.067 1.067-1.845.258-1.912-.416-.034-2.989-.045-3.124-.28-.135-.235.034-1.41.326-1.532.584-.235 4.483-.347 4.776-.425.483-.112.842-.37.955-.783.123-.414-1.349-2.103-3.18-1.913-3.124.347-7.18.325-7.18 1.342 0 .951 1.899 1.331 1.944 1.6.056.257-.247 1.252-.349 1.554-.112.336-1.472.437-1.561 1.365-.023.212.337.548.258.805-.214.794-.854 2.393-.854 3.064.011 1.03.764 3.333 2.899 3.266 3.348-.112 6.36-2.438 6.405-2.852.078-.615-.854-1.33-1.495-1.33l.023.033zM89.486 14.819c-1.832.1-5.337 3.959-7.394 6.565-.123-.269-.202-.526-.202-.76 0-1.097 2.09-4.396 2.472-5.224.405-.86-.056-1.99-.55-1.588-.99.794-4.113 4.418-4.102 7.796 0 .771.203 1.722.64 2.583-.707 2.26-2.404 7.303-2.348 10.356.023 1.577 1.63 3.132 2.585 2.93.37-.078.45-2.147.932-3.556.675-2.013 1.753-5.704 2.135-7.28.169.01.349.033.54.033 3.82-.011 8.056-4.06 8.045-7.56-.011-3.49-2.09-4.329-2.753-4.284v-.011zm-4.394 8.634c1.529-2.65 3.765-6.163 4.596-6.151.573.01.798.581.798 1.442.011 2.595-3.146 4.742-5.394 4.709z" />
            </g>
        </svg>
    )
}

export default DisneyLogo
