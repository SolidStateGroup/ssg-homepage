import React from "react";

function BaLogo({width, height, fill}) {
    return (
        <svg width={width || 150} height={height || 24} viewBox="0 0 150 24">
            <title>{"British Airways"}</title>
            <g fill={fill || "#FFF" } fillRule="nonzero">
                <path d="M145.1 5.713c-1.718 1.736-5.443 3.227-7.275 3.925-2.504.956-3.615 1.294-5.016 1.757a345.907 345.907 0 01-4.756 1.499c6.57 1.993 11.199 2.594 11.199 2.594s2.157-.677 5.574-2.534c1.85-.956 2.76-1.6 3.412-2.215.24-.22.86-.876 1.015-1.716.01-.06.04-.221.04-.379 0 0 0-.112-.01-.208-.004-.112-.024-.187-.024-.187s-.036-.198-.084-.338c-.05-.14-.262-.57-.605-.85-.23-.19-.624-.66-2.057-1.172-.488-.172-1.276-.331-1.276-.331l-.136.155z" />
                <path d="M149.292 8.598s-.01-.185-.054-.343a1.351 1.351 0 00-.19-.415 3.565 3.565 0 00-.485-.582 4.586 4.586 0 00-.576-.456c-.897-.597-2.053-.933-3.077-1.075-1.586-.215-3.406-.177-3.579-.183a402.5 402.5 0 00-5.339.04c-4.317.092-9.601.103-10.986.103-14.29.067-20.512-.246-27.435-1.657-5.89-1.189-9.158-2.318-9.158-2.318C93.608 1.529 123.92.25 129.45.102c3.622-.104 6.191-.126 8.248-.005 1.055.059 2.036.15 3.268.363 1.106.192 2.11.518 2.695.739 1.232.463 2.27 1.134 2.782 1.82 0 0 .152.158.357.44.231.325.499.727.59.877.749 1.153 1.106 1.878 1.229 2.131.134.265.252.541.366.811.113.268.16.43.196.544.078.283.098.543.101.6l.01.176zM52.295 23.197c.22-.1.454-.453.454-.915V18.46c-.54-.062-1.297-.089-2.145-.089-.86 0-1.622.027-2.177.089v3.822c0 .462.229.798.452.915h-2.996c.222-.1.46-.453.46-.915V13.85c0-.468-.238-.813-.46-.926h2.996c-.223.113-.452.458-.452.926v3.454c.555.06 1.303.089 2.177.089.848 0 1.604-.038 2.145-.089V13.85c0-.468-.234-.813-.454-.926h2.99c-.223.113-.445.458-.445.926v8.432c0 .462.222.798.445.915h-2.99zm-9.716-2.324c0-1.957-4.534-2.398-4.534-5.521 0-1.934 1.81-2.568 3.401-2.568.71 0 1.737.1 2.386.404l.113 1.92c-.399-.848-1.398-1.462-2.326-1.462-.733 0-1.502.369-1.502 1.221 0 2.03 4.611 2.526 4.611 5.483 0 2.148-1.845 3.037-3.709 3.037-.974 0-2.3-.19-3.122-.762a7.368 7.368 0 01-.073-1.053c0-.42.037-.84.098-1.254.513 1.188 1.574 2.117 2.9 2.117 1.007 0 1.757-.447 1.757-1.562zm-9.167 2.324c.248-.117.51-.453.51-.915V13.85c0-.468-.262-.8-.51-.926h3.111c-.265.127-.518.458-.518.926v8.432c0 .462.253.798.518.915h-3.111zm-6.96 0c.332-.155.495-.555.495-.915v-8.18h-2.233c-.516 0-1.13.064-1.573.332l.695-1.51h7.408c.601 0 1.215-.013 1.798-.14-.282.774-1.122 1.347-1.607 1.347-.588-.014-1.562-.053-2.4-.053v8.204c0 .36.175.76.502.915h-3.085zm-6.75 0c.25-.117.512-.453.512-.915V13.85c0-.468-.262-.8-.513-.926h3.111c-.268.127-.51.458-.51.926v8.432c0 .462.242.798.51.915h-3.11zm-2.074.06c-.389 0-.816.014-1.186-.097-.688-.207-1.637-1.782-2.016-2.4-.587-1.005-1.097-2.389-2.414-2.403v3.925c0 .343.153.76.48.915H9.455c.318-.17.47-.555.47-.915V13.85c0-.357-.152-.748-.47-.926h3.655c1.59 0 3.58.62 3.58 2.562 0 1.63-1.326 2.464-2.805 2.464 2.104.012 3.34 5.029 5.663 5.044a6.677 6.677 0 01-1.921.263zM12.53 13.81c-.181 0-.34.03-.52.055v3.553c.167.011.316.029.48.029 1.138 0 1.98-.638 1.98-1.895 0-1.284-.828-1.742-1.94-1.742zm-8.8 4.562c-.288 0-.548 0-.9.027v3.797c.439.087.913.115 1.35.115 1.014 0 2.046-.459 2.046-2.034 0-1.555-1.22-1.905-2.496-1.905zM3.48 13.81c-.184 0-.31 0-.648.041v3.596h.4c1.212 0 2.384-.38 2.384-1.808 0-1.416-.937-1.83-2.136-1.83zM.278 23.197c.325-.17.47-.572.47-.915V13.85c0-.357-.145-.748-.47-.926h3.954c1.764 0 3.484.734 3.484 2.768 0 1.079-.926 1.93-1.924 2.122 1.437-.014 2.827.879 2.827 2.49 0 2.305-2.378 2.893-4.05 2.893H.277zM116.647 20.873c0-1.957-4.535-2.398-4.535-5.521 0-1.934 1.805-2.568 3.397-2.568.713 0 1.734.1 2.387.403l.113 1.922c-.404-.849-1.399-1.463-2.327-1.463-.735 0-1.498.369-1.498 1.221 0 2.03 4.611 2.526 4.611 5.483 0 2.148-1.833 3.037-3.71 3.037-.975 0-2.303-.19-3.126-.762a6.883 6.883 0 01-.08-1.053c0-.42.04-.84.102-1.254.513 1.188 1.578 2.116 2.903 2.116 1.012 0 1.763-.447 1.763-1.561zm-5.605-6.87l-2.394 4.267v4.012c0 .327.132.76.451.915h-2.978c.304-.17.444-.6.444-.915v-4.025l-2.081-3.39c-.186-.316-1.054-1.794-2.112-1.794.287-.11 1.163-.28 1.75-.28.978 0 1.464.091 2.064 1.045l1.925 3.103c.162-.305 1.687-3 1.687-3 .184-.328.31-.559.31-.674 0-.148-.062-.244-.21-.343h2.146c-.422.205-.771.674-1.002 1.079zm-9.134 9.194c.105-.1.184-.176.184-.358 0-.061-.03-.163-.091-.355 0 0-.825-2.296-.926-2.563-.628-.078-1.278-.078-1.915-.078-.597 0-1.211.015-1.813.078-.086.23-.969 2.513-.969 2.513-.129.31-.163.415-.163.482 0 .153.123.226.232.281h-2.035c.301-.155.56-.473.686-.791l3.356-8.771a.505.505 0 00.019-.127.684.684 0 00-.377-.584h2.625l3.4 9.473c.141.38.44.658.689.8h-2.902zm-2.637-8.318l-1.533 4c.462.051.936.062 1.396.062.525 0 1.056 0 1.568-.062l-1.431-4zm-3.674-.952l-3.071 9.27c-.253 0-.502-.089-.643-.19-.303-.297-.78-1.539-.954-1.996l-1.387-3.565-2 5.751h-.952l-3.438-9.293c-.148-.396-.4-.775-.774-.98h2.987a.491.491 0 00-.212.428c0 .104.05.246.087.357l2.239 6.149 2.383-6.934 2.626 6.685 1.988-6.051c.05-.164.08-.225.08-.329 0-.127-.055-.206-.18-.305h1.978c-.366.195-.63.62-.757 1.003zm-12.61 9.33c-.388 0-.806.014-1.185-.097-.689-.207-1.637-1.782-2.015-2.4-.585-1.005-1.347-2.403-2.656-2.403v3.925c0 .343.148.76.469.915h-3.033c.325-.17.477-.555.477-.915V13.85c0-.357-.152-.748-.477-.926h3.663c1.586 0 3.572.62 3.572 2.562 0 1.63-1.45 2.464-2.545 2.464 2.18.127 3.496 5.044 5.66 5.044a6.732 6.732 0 01-1.93.263zm-5.351-9.448c-.169 0-.33.03-.505.055v3.553c.163.011.311.029.469.029 1.14 0 1.98-.638 1.98-1.895 0-1.284-.83-1.742-1.944-1.742zM69.8 23.197c.25-.117.51-.453.51-.915V13.85c0-.468-.26-.8-.51-.926h3.108c-.264.127-.51.458-.51.926v8.432c0 .462.246.798.51.915H69.8zm-6.052-8.318l-1.533 4c.456.051.93.062 1.393.062.53 0 1.053 0 1.568-.062l-1.428-4zm2.64 8.318c.098-.1.184-.176.184-.358 0-.061-.022-.163-.096-.355 0 0-.83-2.296-.928-2.563-.624-.078-1.273-.078-1.91-.078-.604 0-1.216.015-1.815.078-.085.23-.975 2.513-.975 2.513-.12.31-.16.415-.16.482 0 .153.128.226.238.281h-2.034c.3-.155.56-.473.687-.791l3.345-8.771a.335.335 0 00.021-.127.69.69 0 00-.371-.584h2.623l3.4 9.473c.14.38.436.658.686.8h-2.895z" />
            </g>
        </svg>
    )
}

export default BaLogo
