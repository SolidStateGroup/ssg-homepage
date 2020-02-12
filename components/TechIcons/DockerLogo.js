import React from "react"

function SvgComponent({width, height, fill, className}) {
    return (
        <svg className={className} width={width || '100%'} height={height || 'auto'} viewBox="0 0 92 23">
            <title>Docker</title>
            <path
                d="M13.803 7.906V2.084c0-.765.48-1.38 1.276-1.38h.22c.795 0 1.273.616 1.273 1.38v12.257c0 2.989-1.483 5.367-4.068 6.882a7.666 7.666 0 01-3.912 1.062h-.55c-3.002 0-5.388-1.478-6.913-4.05a7.558 7.558 0 01-1.066-3.894v-.546c0-2.99 1.484-5.367 4.067-6.885a7.639 7.639 0 013.913-1.062h.55c2.031 0 3.756.784 5.21 2.058zm-10.97 6.161c0 2.16 1.05 3.783 2.95 4.818a5.141 5.141 0 002.48.643c2.129 0 3.708-1 4.797-2.795.507-.836.743-1.75.743-2.722 0-1.871-.89-3.332-2.406-4.417a5.184 5.184 0 00-3.08-.987c-2.32 0-3.99 1.167-4.992 3.24a5.045 5.045 0 00-.493 2.22zm23.347-8.22h.384c3.21 0 5.65 1.55 7.196 4.339a7.386 7.386 0 01.95 3.609v.546c0 2.989-1.48 5.37-4.07 6.882a7.684 7.684 0 01-3.91 1.062h-.55c-3.003 0-5.39-1.478-6.913-4.05a7.559 7.559 0 01-1.067-3.894v-.546c0-2.99 1.49-5.36 4.066-6.884a7.604 7.604 0 013.914-1.063zm-5.21 8.22c0 2.096 1.032 3.638 2.81 4.722.835.509 1.755.74 2.73.74 2.08 0 3.618-1.05 4.688-2.799.51-.833.742-1.748.742-2.719 0-1.948-.943-3.437-2.555-4.516a5.167 5.167 0 00-2.93-.888c-2.32 0-3.99 1.167-4.993 3.24a5.036 5.036 0 00-.493 2.22zm25.253-5.24c-.418-.195-1.2-.26-1.652-.277-2.314-.087-3.989 1.21-4.97 3.243a5.023 5.023 0 00-.495 2.218c0 2.362 1.246 4.015 3.363 5.023.774.368 1.772.438 2.618.438.743 0 1.794-.453 2.454-.765l.114-.054h.512l.057.011c.63.13 1.105.528 1.105 1.203v.273c0 1.678-3.082 2.063-4.258 2.144-4.15.286-7.253-1.983-8.436-5.923a7.11 7.11 0 01-.298-2.077v-.545c0-2.99 1.49-5.358 4.066-6.882a7.607 7.607 0 013.914-1.064h.55c1.475 0 2.835.418 4.054 1.247l.1.069.063.103c.132.218.245.469.245.727v.273c0 .704-.53 1.082-1.167 1.205l-.053.009h-.164c-.413 0-1.353-.426-1.722-.599zm8.984 1.867a288.9 288.9 0 013.247-3.197c.304-.295 1.456-1.54 1.91-1.54h.496l.056.012c.632.13 1.105.529 1.105 1.205v.272c0 .461-.542.997-.841 1.313-.637.671-1.306 1.32-1.958 1.978l-3.346 3.382c1.44 1.437 2.88 2.876 4.31 4.324.396.4.789.803 1.179 1.209.138.144.34.323.456.523.124.187.2.398.2.623v.285l-.016.066c-.155.629-.556 1.136-1.257 1.136h-.22c-.458 0-.976-.516-1.29-.81-.647-.608-1.271-1.246-1.905-1.866l-2.126-2.078v3.32c0 .766-.481 1.38-1.276 1.38h-.218c-.796 0-1.276-.614-1.276-1.38V2.138c0-.765.48-1.377 1.276-1.377h.218c.795 0 1.276.612 1.276 1.377v8.557zm34.518-4.737h.276c.83 0 1.385.557 1.385 1.38 0 1.141-1.097 1.433-2.045 1.433-1.244 0-2.431.75-3.289 1.59-1.069 1.05-1.537 2.394-1.537 3.871v6.675c0 .765-.48 1.38-1.276 1.38h-.218c-.796 0-1.276-.615-1.276-1.38v-7.058c0-2.71 1.325-4.923 3.535-6.474a7.64 7.64 0 014.445-1.417zM70.041 19.185c1.008.35 2.157.3 3.19.12.53-.223 1.882-.81 2.38-.724l.077.013.072.035c.304.146.594.354.749.662.362.72.188 1.446-.524 1.855l-.237.137c-2.627 1.51-5.421 1.3-8.04-.11-1.252-.674-2.21-1.674-2.917-2.893l-.165-.285c-1.687-2.908-1.459-5.967.443-8.732.657-.955 1.515-1.694 2.518-2.271l.38-.218c2.474-1.422 5.126-1.325 7.667-.077 1.366.671 2.473 1.671 3.236 2.987l.137.237c.554.956-.164 1.788-.905 2.358-.86.66-1.728 1.455-2.552 2.163-1.838 1.58-3.673 3.162-5.51 4.743zm-2.379-1.663c2.055-1.754 4.111-3.51 6.161-5.272.7-.601 1.469-1.225 2.163-1.858-.557-.7-1.489-1.203-2.28-1.504-1.598-.606-3.173-.402-4.638.44-1.917 1.102-2.734 2.857-2.663 5.041.029.86.261 1.69.72 2.422.161.258.342.5.537.73z"
                fill={fill || 'white'}
                fillRule="nonzero"
            />
        </svg>
    )
}

export default SvgComponent
