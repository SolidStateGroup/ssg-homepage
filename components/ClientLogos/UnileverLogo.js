import React from "react"

function UnileverLogo({width, height, fill, className}) {
    return (
        <svg width={width || '100%'} height={height} className={className} viewBox="0 0 36 40">
            <title>{"Unilever"}</title>
            <defs>
                <path id="prefix__a" d="M0 0h35.855v40H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g>
                    <path
                        d="M4.618 35.168c-.059-.189-.23-.613-.277-.926-.103-.693.257-1.15.587-1.254.37-.104.515.084.658.52.185.663.206 1.533.144 2.779-.081 1.7-.925 3.755-3.023 3.713C.896 39.96.094 38.777.01 36.972c-.04-.85.021-1.701.37-2.904.186-.644.351-.873.926-.996.452-.084.411.393.309.955-.225 1.244-.33 1.845-.247 3.256.081 1.494.761 2.075 1.502 2.075 1.111.021 1.604-.912 1.811-2.262.163-1.078.04-1.597-.064-1.928zm23.688 1.473c.433 0 .557.516.453.829-.103.31-.473.664-1.048.768-.124-.312-.186-1.597.595-1.597zm-8.042.703c0-.351-.186-.642-.41-.642-.188 0-.618.207-.618.871 0 .52.183.767.267.873.595-.188.761-.687.761-1.102zm-6.4-4.231c-.028-.333-.287-.56-.637-.56-.39 0-.758.414-.719.933.025.342.225.623.618.623.451 0 .78-.518.739-.996zm3.346 1.218c-.035-.58-.175-.842-.484-.82-.41.025-.599 1.325-.515 2.691.053.891.185 1.029.308 1.02.226-.014.77-1.606.691-2.89zm13.647 2.184c-.255 1.067-1.028 2.636-2.181 2.636-.267 0-.74-.105-.74-.374 0-.29 1.811-.33 1.811-1.722 0-.518-.473-1.245-1.173-1.245-.925 0-1.828 1.018-1.828 2.428 0 1.265.779 1.68 1.56 1.68 1.359 0 2.182-1.121 2.613-2.054.207.622.328 2.054.845 2.054.205 0 .35-.104.597-.664.615-1.39 1.213-2.988 2.036-2.988.308 0 .123.562.864.562.349 0 .595-.29.595-.624 0-.478-.432-.85-1.09-.85-1.934 0-2.344 2.925-2.653 2.925-.514 0-.35-2.344-.72-2.344-.33 0-.492.395-.536.58zM14.4 39.005c.308 0 .839-.101 1.256-.775-.239-.535-.409-1.615-.433-2.008-.122-2.011.646-3.903 1.487-3.955.617-.038 1.11.55 1.167 1.504.151 2.506-.676 3.552-1.09 4.455.07.35.658.945 1.213.945.205 0 .453-.104.516-.188a2.073 2.073 0 01-.084-.601c0-1.452.926-2.677 1.729-2.677.638 0 1.008.85 1.008 1.412 0 .663-.556 1.203-1.378 1.722.144.144.41.25.638.25 1.173 0 1.787-1.433 2.242-2.74.082-.25.227-.602.514-.602.494 0 .7 3.278 1.521 3.278.351 0 .639-.727.639-1.285 0-.416-.144-.457-.144-1.059 0-.663.35-1.223.824-1.223.288 0 .392.29.392.641 0 1.328-.948 3.797-2.345 3.797-1.051 0-.969-1.825-1.339-1.825-.413 0-.99 1.846-3.024 1.846-.33 0-.68-.166-.967-.499-.493.333-.906.478-1.379.478-.76 0-1.09-.788-1.398-.788-.371 0-.781.809-2.017.809-.987 0-1.152-1.326-1.501-1.326-.31 0-.782 1.326-1.296 1.326-.866 0-1.049-2.302-1.812-2.302-.596 0-2.481 2.338-2.993 2.284-.205-.021-.292-.176-.27-.384.029-.287.274-1.055.373-1.419.166-.63.319-1.322.404-1.542.085-.223.313-.382.497-.364.092.008.12.182.148.326.104.513.25 1.036.413 1.036.289 0 1.243-1.847 1.799-1.847.68 0 .761 2.905 1.686 2.905.31 0 .537-.373.742-.83.02-.77.226-1.866.843-1.866.433 0 .639.974.329 1.825 0 1.016.657 1.265 1.09 1.265z"
                      fill={fill || "fff"}
                        fillRule="nonzero"
                        mask="url(#prefix__b)"
                    />
                </g>
                <path
                    d="M28.86 6.245c-.16 0-.39 0-.517-.23-.103-.19-.068-.494-.263-.63.195.052.401.052.561.052.517 0 1.01-.325 1.389-.325.25 0 .33.147.33.293 0 .463-1.018.84-1.5.84zm.252 1.186c1.19 0 2.28-.87 2.28-1.637 0-.357-.183-.65-.653-.703.08.094.114.168.114.336 0 .577-.96 1.218-2.005 1.218-.378 0-.493.24-.493.367 0 .294.31.42.757.42zm-.092.441c.15.997 1.799 2.341 2.246 2.31.299-.024.413-1.302.413-2.31 0-.577.035-1.028-.298-1.133-.528.976-1.913 1.175-2.36 1.133zM4.535 14.91c.378 0 .3-2.313.912-2.313.146 0 .19.145.19.323 0 .522-.256 1.29-.256 1.712 0 .212.056.279.156.279.267 0 .735-2.547 1.191-2.547.145 0 .212.144.212.289 0 .534-.68 2.068-.68 2.502 0 .067.023.122.079.122.278 0 .835-1.2 1.013-1.8.1-.313.233-.48.356-.48.111 0 .212.123.212.379 0 .6-.557 2.013-1.047 2.958-.378.734-.968 1.79-.968 2.38 0 .3.054.611.489.99-.713-.045-1.002-.112-1.269-.668-1.191 2.369 2.193 2.136 1.035 4.237-.211-.378-1.881-.767-1.881-2.969 0-1.902 1.67-3.014 1.67-3.803a.507.507 0 00-.2-.411c-.368-.312-.38-.567-.669-.567-.21 0-.468.489-.2.922.09.145.167.234.167.368 0 .31-.49 1.144-.835 1.144s-.612-.855-.612-2.235c0-1.223.278-2.457.623-2.457.1 0 .133.066.133.156 0 .144-.044.433-.044.922 0 .523.123.568.223.568"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
                <path
                    d="M7.092 18.639c.476 0 .872-.355.872-1.141v-1.165c0-.445.035-.947.33-1.302-.035.149-.035.309-.035.457 0 .982.543 1.656.543 2.603 0 .354-.102.548-.373.548-.26 0-.238-.24-.295-.24-.045 0-.113.149-.113.309 0 .24.17.616.645.616.409 0 .736-.376.736-.799 0-1.027-.792-2.17-.792-3.265 0-.48.124-.799.226-1.05 0 2.272 1.914 3.927 1.914 4.874a.38.38 0 01-.396.389.371.371 0 01-.385-.366c0-.08-.012-.103-.046-.103-.067 0-.271.229-.271.526 0 .376.305.834.872.834.645 0 .996-.55.996-1.04 0-1.198-2.322-3.014-2.322-4.954 0-.332.056-.868.295-1.28-1.495.97-1.96 2.261-1.96 3.392 0 .982-.033 1.472-.531 1.472-.261 0-.329-.24-.42-.24-.068 0-.102.206-.102.263 0 .422.307.662.612.662M23.828 5.553c.144-.103.784.06 1.61-.378a.583.583 0 01.295-.084c.397 0 .295.486.658.486.283 0 .647-.255.863-.255.338 0 .826 1.144.826 1.68 0 .62-.872.998-1.904.998-1.508 0-2.416-1.412-2.416-2.325 0-.073.035-.098.068-.122zM26.301 7.1c.5 0 .873-.243.873-.39 0-.048-.067-.085-.215-.085s-.443-.011-.999-.11c-.477-.084-.84-.28-.976-.28-.046 0-.068.025-.068.062 0 .317.545.803 1.385.803zM7.422 22.904c-.36.082-.942.614-.942 1.455 0 1.003 1.15 2.55 3.046 2.55 1.6 0 1.994-1.034 1.994-1.732 0-1.546-1.018-2.632-2.344-2.632-.723 0-1.37.492-1.37 1.219 0 .677.548 1.69 1.851 1.69.614 0 .975-.41.975-.88 0-.461-.449-1.096-1.106-1.096-.197 0-.34.122-.34.317 0 .246.361.492.811.492.11 0 .197-.02.241-.041a.239.239 0 01.033.123c0 .236-.241.38-.614.38-.558 0-1.095-.39-1.095-1.005 0-.368.34-.634.832-.634.975 0 1.556.808 1.556 1.618 0 .727-.427 1.147-1.304 1.147-1.753 0-2.607-1.475-2.224-2.97"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
                <path
                    d="M20.153 29.072c.536 0 .508-.046.676-.046.167 0 .178.105.178.175 0 .256-.548.57-1.52.57-.57 0-.916-.314-1.016-.664-.559.373-1.408.711-2.246.711-2.29 0-2.87-1.037-3.586-1.374-.548-.257-1.386.244-2.559-1.119.157.035.37.047.537.047 1.027 0 1.575-.523 1.575-1.363 0-.105-.012-.22-.023-.325.313.128 1.029.686 1.196 1.676.022.117.48.222.77.222.403 0 .917-.175.995-.862 1.341-.116 2.247-.943 2.437-1.993.48.164 1.027.618 1.161.852.19-.07.413-.105.67-.105.358 0 .76.07 1.24.221.023-.151.045-.338.269-.338.335 0 .245.385.357.605.056.117.336.186.336.42 0 .222-.18.304-.291.304a.476.476 0 01-.135-.024c-.223.082-.235 1.759-1.173 1.759-.692 0-1.329-.595-1.609-1.34-.078-.22-.245-.36-.402-.36-.178 0-.279.034-.49.28a3.814 3.814 0 01-2.85 1.28c-.38 0-.682-.036-.76-.036-.045 0-.045.012-.045.023 0 .082.38.397 1.207.397 1.966 0 2.447-1.154 2.76-1.154.045 0 .178 0 .256.187.459 1.118 1.459 1.374 2.085 1.374zm-.866-2.328c0 .256.2.466.447.466.246 0 .447-.21.447-.466a.458.458 0 00-.447-.467.459.459 0 00-.447.467zM27.368 21.542c-.143 0-.297.118-.297.408 0 .32.236.524.368.588a.607.607 0 00.296.087c.297 0 .533-.087.533-.344 0-.331-.461-.74-.9-.74zm-1.103.664c-.215 0-1.402 1.66-2.168 1.66-.183 0-.337-.363-.337-.64 0-.151.092-.258.42-.334 1.758-.418 1.369-1.801 2.87-1.801.828 0 1.75.59 1.75 1.919 0 1.415-1.92 3.172-2.207 3.172-.236 0-.492-.354-.492-.59 0-.074.031-.17.236-.257.98-.407 1.542-1.35 1.542-1.833 0-.107-.051-.213-.184-.213-.174 0-.918 1.778-1.747 1.778-.574 0-1.157-.545-1.157-.803 0-.43 1.658-1.222 1.658-1.823 0-.225-.102-.235-.184-.235zM5.184 7.207s-.308.23-.69.23a.795.795 0 01-.82-.81c0-.326.17-.663.564-.831-.01.063-.01.115-.01.179 0 .6.34 1.052.956 1.232zm2.275 2.02c-.233.274-.478.737-.478 1.21 0 .569.351 1.042.893 1.042.521 0 .766-.442.766-.894 0-.705-.649-1.2-1.18-1.357zm-3.53.421a.224.224 0 00-.031.116c0 .095.106.2.201.2.085 0 .139-.02.181-.02.255 0 .542.178.957.178.244 0 .532-.074.893-.252.765-.38 1.064-1.316 1.064-1.474 0-.2-.163-.174-.299-.358-.135-.184-.083-.346-.17-.432-.049-.05-.201-.052-.393-.073a2.369 2.369 0 00-.234-.011c-.35 0-.766.043-1.233.337-.922.583-.787 1.547-.935 1.79zm2.5-1.305c.073.1.276.221.276.295 0 .147-.085.337-.255.337-.373 0-.67-.558-.67-.874 0-.2.117-.22.276-.22.075 0 .107.01.16.041.095.053.095.263.212.421zm-.98 1.284c-.35 0-.733-.431-.733-.82 0-.211.16-.475.277-.475.042 0 .064.032.074.106.064.516.404.81.723.958.032.02.054.031.054.052 0 .074-.203.18-.394.18zm.905-2.652c.053-.169.095-.379.095-.61 0-.506-.234-1.274-.957-1.274a.705.705 0 00-.712.716c0 .831.84 1.168 1.574 1.168zM3.6 11.185c0 .8.245 1.179.68 1.179.34 0 .798-.243 1.34-.706-.414.095-.734.158-1.02.158-.383 0-.68-.147-1-.631zm.372-.937c-.01.053-.01.105-.01.158 0 .494.265.768.616.768.265 0 .574-.158.85-.505a2.26 2.26 0 01-.383.031c-.392 0-.818-.105-1.073-.452zm2.605-.147c-.245.063-.755.357-.755.884 0 .378.298.62.67.62.191 0 .33-.042.415-.105a1.22 1.22 0 01-.404-.915c0-.221.031-.358.074-.484zm.383-2.884a.425.425 0 00.85 0 .425.425 0 00-.85 0zm.552.947a.425.425 0 00.852 0 .425.425 0 00-.425-.42.425.425 0 00-.427.42zM24.325 14.12c0-.217.195-.403.409-.403.238 0 .422.186.422.403 0 .25-.184.425-.422.425a.415.415 0 01-.409-.425zm-3.798-3.355c0 .24.196.436.433.436a.436.436 0 000-.872.436.436 0 00-.433.436zM20.16 12.3c0 .338.28.62.616.62a.626.626 0 00.617-.62.627.627 0 00-.617-.621.625.625 0 00-.616.62zm1.363-.698a.659.659 0 101.319 0 .659.659 0 10-1.319 0zm.055-1.416c0 .23.184.415.409.415a.413.413 0 00.41-.415.413.413 0 00-.41-.413.412.412 0 00-.41.413zm1.957-1.045a.412.412 0 10.823 0 .413.413 0 00-.412-.415.413.413 0 00-.411.415zm-.812 1.34a.7.7 0 00.693.697.7.7 0 00.693-.697.7.7 0 00-.693-.697.7.7 0 00-.693.697zM21.61 13.03c0 .24.195.436.43.436a.436.436 0 000-.872.435.435 0 00-.43.436zm1.416-.872c0 .24.195.436.434.436a.436.436 0 000-.871.436.436 0 00-.434.435zm-.4 1.536a.75.75 0 00.747.752.752.752 0 000-1.503.75.75 0 00-.747.751zm1.558-.926a.51.51 0 00.507.513.51.51 0 00.509-.513.51.51 0 00-.509-.512.51.51 0 00-.507.512zm-.032-1.373c0 .251.206.458.452.458a.46.46 0 00.455-.458.459.459 0 00-.455-.457.459.459 0 00-.452.457zM25.348 25.926c-.27.22-.902.714-1.952.714-.561 0-.81-.187-.894-.187-.104 0-.218.11-.333.253-.246.308-.569.88-.569 1.506 0 .44.323.879.923.879 1.944 0 3.397-1.286 3.397-2.33 0-.593-.332-.835-.572-.835zm-.54-.121c.084-.076.104-.198.104-.32v-.252c0-.32-.455-.506-1.08-.506-.758 0-1.164.362-1.164.517v.505c0 .21.458.419 1.02.419.446 0 .852-.121 1.12-.363zm-.084 1.088c.053 0 .114.033.114.231 0 .242-.103.56-.475.813-.26.188-.614.342-1.133.351a2.72 2.72 0 00.145-.8c0-.089-.01-.155-.02-.254h.135c.82 0 1.175-.34 1.234-.34zM20.175 13.09c.125.943 1.415.466 1.415 1.608 0 .166-.046.41-.046.621 0 .244.022.455.213.455.192 0 .237-.133.237-.31 0-.178-.045-.4-.045-.522 0-.388.283-.476.453-.476.43 0 .758.432 1.403.432-.147.71-1.64.521-1.64 1.297 0 .389.395.477.655.477.238 0 .317-.033.317-.233 0-.11-.022-.233-.022-.31 0-.045.034-.09.09-.09.25 0 1.468.91 1.468 1.188 0 .254-1.287.51-1.66.51-.113 0-.136-.078-.136-.123 0-.077.192-.31.192-.443 0-.1-.17-.166-.622-.166-.215 0-.374.022-.374.188 0 .3.498.665.498.942 0 .222-.135.355-.498.355-.305 0-.767-.233-.767-.62 0-.311.326-.621.326-.81 0-.055-.043-.144-.178-.144-.42 0-.532 1.086-2.014 1.208.237-.21.44-.443.44-.92 0-.232-.055-.421-.055-.676 0-.333.157-.5.383-.5.418 0 .622.577.894.577.148 0 .306-.132.306-.332 0-.843-1.651-.72-1.651-1.907 0-.322.113-.721.418-1.275zm5.392 3.25c0 .276.091.598.374.598.237 0 .44-.354.44-.743 0-.443-.078-.787-.078-.965 0-.077.034-.11.079-.11.17.01.328.465.51.465.203 0 .506-.366.63-.366.034 0 .046.045.046.055 0 .167-.26.533-.26.677 0 .122.655.144.655.255 0 .167-.688.167-1.015.311-.317.133-.51.299-.51.521 0 .222.227.266.543.266.756 0 1.287-.399 1.457-.399.034 0 .056.022.056.055 0 .111-.384.477-.384.644 0 .188.701.409.69.52-.011.033-.057.044-.136.044-.125 0-.317-.033-.464-.033-.09 0-.17.01-.204.055-.078.09.023.677-.135.677-.147 0-.532-1.308-1.4-1.308-.125 0-.215.1-.215.266 0 .443.44.953.86 1.197.19.122.506.244.506.311 0 .133-.721.011-.721.233 0 .2.09.5.09.676 0 .056-.011.122-.079.122-.136 0-.464-.61-.622-.61-.136 0-.43.366-.555.366-.034 0-.056-.033-.056-.066 0-.255.419-.832.419-1.397 0-.267-.034-.843-.363-.843-.271 0-.577.421-.713.843-.078.243-.022 1.186-.203 1.186-.17 0-.125-.632-.351-.632-.167 0-.53.3-.654.3-.023 0-.045-.012-.045-.034 0-.133.328-.566.328-.654 0-.166-.747-.188-.747-.322 0-.077.294-.133.566-.177.575-.1 1.423-.51 1.423-1.086 0-.643-.633-.921-1.05-1.187-.215-.133-.452-.244-.452-.332 0-.09.271-.09.384-.09.17 0 .337-.01.337-.143 0-.1-.022-.3-.022-.455 0-.111.01-.2.057-.2.17 0 .407.543.52.543.18 0 .43-.443.6-.443.056 0 .079.033.079.133 0 .41-.215.876-.215 1.276z"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
                <path
                    d="M20.58 19.028c.494.068.613.248.613.395 0 .249-.216.327-.42.327-.15 0-.323-.034-.505-.034-.237 0-.473.057-.667.294.14.022.344.124.344.35 0 .655-1.73.113-1.73 1.795 0 .891.882 1.862 2.214 1.862.689 0 1.13-.237 1.13-.508 0-.214-.366-.068-.366-.249 0-.079.129-.226.129-.35 0-.055-.043-.157-.129-.157-.194 0-.56.326-1.301.326-.581 0-1.15-.349-1.15-.823 0-.102.043-.159.107-.159.065 0 .15.046.226.046.064 0 .075-.046.075-.17 0-.124 0-.474.204-.474s.591.79 2.075.79c.493 0 1.45-.1 1.805-.44-.01 1.242-.936 2.878-2.87 2.878-2.01 0-3.084-1.693-3.084-3.25 0-1.727 1.343-3.295 3.181-3.295.472 0 .871.169.871.383 0 .294-.7.113-.753.463zm3.3.599a.694.694 0 01.107.36c0 .317-.205.61-.205.938 0 .372.27.676.676.676.44 0 .742-.371.742-.812 0-.598-.516-1.106-1.32-1.162zm-3.559.722c.107.112.14.225.14.338 0 .17-.075.35-.075.542 0 .27.193.508.472.508.302 0 .507-.25.507-.541 0-.43-.421-.847-1.044-.847zm1.429-1.92c1.129.227 1.742 1.119 1.742 1.954 0 .576-.344 1.105-.947 1.105-.548 0-.944-.394-.944-1.026 0-.474.352-.971.352-1.457a.901.901 0 00-.203-.575zm.559 1.502c0 .158.107.282.258.282.172 0 .28-.158.28-.338 0-.237-.205-.565-.398-.565-.087 0-.054.136-.076.283-.01.112-.064.247-.064.338zM10.347 8.852c.351 0 .754-2.023.754-2.364 0-.088-.03-.154-.103-.154-.32 0-.765 1.924-.765 2.353 0 .077.02.165.114.165zm2.533.604c.258 0 .548-1.055.548-1.715 0-.143-.02-.296-.083-.296-.217 0-.58 1.088-.58 1.681.001.231.053.33.115.33zm-1.686-.978c.113 0 .258-.133.528-.45.02-.143.02-.276.02-.44 0-.22-.083-.462-.206-.462-.311 0-.466.88-.466 1.11 0 .132.062.242.124.242zm1.417-.45c0-.188-.042-.232-.083-.232-.103 0-.217.133-.382.43.02.395.083.57.186.57.113 0 .279-.384.279-.768zm.796-1.298c.683 0 .993.627.993 1.33 0 .308-.082.759-.217.759-.134 0-.113-.253-.134-.484-.02-.297-.073-.363-.166-.363-.176 0-.29.44-.29.847 0 .252.042.538.228.538a.367.367 0 00.259-.12c-.042.504-.394.945-.89.945-.91 0-1.251-1.133-1.354-1.792-.549.615-1.055 1.066-1.966 1.066-.847 0-1.23-.66-1.23-1.286 0-.187.062-.67.28-.67.258 0 .03.9.537.9.124 0 .351-.11.476-.471.072-.22.114-.45.114-.65 0-.296-.062-.483-.27-.483-.175 0-.393.143-.465.22.249-.791.848-1.198 1.51-1.198.817 0 1.251.77 1.251 1.627 0 .12-.01.252-.031.373.352-.615.838-1.088 1.365-1.088zM11.453 10.182c-.495 0-.518.561-.518 1.691-.369-.743-.978-1.54-1.692-1.54-.483 0-.667.302-.667.83 0 .107.011.269.034.365.058-.182.242-.258.472-.258.496 0 1.094.355 1.485.84-.448-.075-.886-.15-1.254-.15-.23 0-.438.021-.61.097-.334.14-.783.603-.783 1.303 0 .108.012.226.035.356.403-.84 1.473-1.218 2.164-1.218.138 0 .241.011.322.022-.357.301-.437.83-.46 1.185-.012.172-.081.183-.208.183 0 .355.3.884.3 1.153 0 .097-.058.183-.115.205 0 .474.505.819.505 1.12 0 .075-.022.14-.057.173.035.194.592.52.664.683.088.199.188.233.246.233.195 0 .505-.216.505-.41 0-.065-.057-.14-.103-.173-.219-.15-.334-.473-.426-.689-.08 0-.185-.032-.221-.159-.063-.223-.067-.638-.159-.886-.15-.032-.219-.086-.219-.377 0-.14.093-.69.093-.884-.07 0-.161-.043-.161-.172 0-.345.369-.614.472-1.056.656.452.816.915.816 1.325 0 .215-.034.42-.08.614.484-.226 1.209-.56 1.209-1.239 0-.399-.196-.84-1.497-1.013.403-.14.91-.215 1.335-.215.738 0 1.163.215 1.255.7.15-.215.265-.463.265-.69 0-.528-.472-.872-1.07-.872-.703 0-1.324.344-1.992.765.3-.582.506-.926.875-.926.057 0 .115.01.173.021-.139-.473-.656-.937-.933-.937M30.006 17.455c.53 0 .954.766.954 1.663 0 .955-.403 1.993-1.12 2.7-.011-1.592-1.76-1.085-1.76-2.24 0-.495.318-.826.7-.826.339 0 .604.106.794.32a1.109 1.109 0 01-.286-.756c0-.45.255-.861.718-.861M19.745 7.07c.305.298.574.429.903.429.13 0 .282-.036.365-.036.105 0 .175.048.175.131 0 .131-.117.346-.258.466.14.059.294.083.458.083.666 0 1.429-.43 1.429-1.502.141.19.223.584.223.763 0 1.3-.94 1.8-1.805 1.8-.563 0-.845-.191-.916-.191-.223 0-.21.453-.363.441-.27-.047-.516-.655-.516-1.299 0-.382.094-.787.305-1.085zm1.77-.87c-.094-.156-.444-.239-.608-.239-.517 0-.869.37-.94.704a1.135 1.135 0 01-.081-.406c0-.524.352-1.168 1.209-1.168.748 0 1.042.405 1.148.405.117 0 .234-.12.328-.12.13 0 .13.203.13.347 0 .476-.212 1.3-.74 1.597a1.206 1.206 0 00-.585-.572.188.188 0 01-.117-.179c0-.131.117-.298.256-.37z"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
                <path
                    d="M12.325 4.02c0 .385 1.38 2.264 1.644 2.264.221 0 .387-.384.387-.715a.448.448 0 00-.066-.24c-.199-.276-1.6-1.374-1.91-1.374-.033 0-.055.033-.055.066zM4.215 2.89c0 .22-.838.956-1.136.956-.11 0-.143-.132-.143-.252 0-.22.099-.528.22-.627.143-.132.475-.197.728-.197.155 0 .331.032.331.12zm10.075.637c0-.66-1.79-1.857-1.81-2.373-.002-.047.024-.094.064-.136.306-.322 1.58-.557 1.58-.831 0-.142-.265-.142-.398-.142C12.7.044 11.2.417 11.2.779c0 .374 1.347 1.286 1.347 1.737 0 .12-.078.165-.2.165-.374 0-1.19-.451-1.577-.451-.176 0-.243.12-.243.297 0 .527.629 1.527.629 1.823 0 .033-.011.077-.055.077-.199 0-1.136-1.098-1.468-1.098-.12 0-.132.164-.132.406v.374c0 .252-.011.406-.132.406-.287 0-.42-.802-.695-.802-.287 0-.342 1.428-.618 1.428-.32 0-.044-1.57-.353-1.57-.342 0-.729 1.043-.972 1.043-.087 0-.11-.088-.11-.165 0-.318.188-.835.188-1.142 0-.154-.045-.242-.176-.242-.343 0-1.093.55-1.38.55-.044 0-.1-.022-.1-.067 0-.263 1.203-1.098 1.203-1.472 0-.363-1.655-.12-1.655-.538C4.7 1.186 5.88.824 5.88.46 5.881.142 4.48 0 3.94 0c-.651 0-1.004.076-1.004.263 0 .286 1.479.374 1.479.626 0 .242-1.534.89-1.534 1.264 0 .33 2.162.022 2.162.363 0 .373-1.886 1.988-1.886 2.526 0 .121.089.176.21.176.573 0 2.062-1.087 2.47-1.087.144 0 .156.175.156.33 0 .285-.1.724-.1 1.043 0 .253.067.428.287.428.409 0 .783-.692 1.06-.692.353 0 .143 2.033.673 2.033.452 0 .64-2.197.926-2.197.287 0 .52.637.784.637.33 0 .176-1.11.53-1.11.385 0 1.489 1.319 1.986 1.319.154 0 .209-.121.209-.275 0-.583-.816-1.9-.816-2.318 0-.11.032-.143.154-.143.43 0 1.688.593 2.284.593.2 0 .32-.11.32-.253zm-1.148-2.175c0 .198.695.626 1.015.626.188 0 .243-.253.243-.516 0-.33-.143-.34-.43-.34-.364 0-.828.098-.828.23zM10.549.231c0-.067-.331-.133-.783-.133-.717 0-.618.594-1.17.594-.573 0-.43-.616-1.159-.616-.441 0-.849.077-.849.176 0 .132.518.077.518.44 0 .384-1.114.494-1.114.725 0 .077.088.11.198.11.244 0 .63-.11.905-.11.155 0 .299.033.299.176 0 .274-.597.769-.597.989 0 .066.055.088.11.088.221 0 .597-.56.95-.56.584 0 .199 1.24.518 1.24.33 0 .188-1.22.662-1.22.387 0 .673.847.938.847.066 0 .121-.055.121-.132 0-.23-.33-.703-.33-1.01 0-.187.132-.276.308-.276.254 0 .596.154.783.154.066 0 .133-.021.133-.098 0-.264-.982-.55-.982-.89 0-.34.54-.34.54-.495zM30.41 2.071c0 1.018-.741 1.796-2.08 2.013.15.012.286.012.424.012 1.564 0 2.137-.71 2.137-1.304 0-.332-.183-.63-.481-.72zm-1.93 1.155c0-.812-1.943-1.018-1.943-1.201 0-.148 1.085-.4 1.645-.412-.858-1.098-2.08-.984-2.08-1.178 0-.115.916-.344 1.76-.344.709 0 1.372.16 1.372.698 0 .298-.24.607-.24 1.064 0 .252.125.47.457.47.356 0 .435-.378.435-.78 0-.33-.057-.582-.057-.743 0-.48.33-.8.798-.8.39 0 .48.17 1.053.17-.31.185-.423.517-.423.676 0 .481.31.813.31 1.797 0 1.807-1.692 2.448-3.762 2.448-.569 0-1.176-.046-1.77-.137-.092-.012-.115-.034-.115-.092 0-.148.813-.229.813-.96 0-.287-.092-.561-.092-.664a.09.09 0 01.092-.092c.17 0 .515.664 1.153.664.17 0 .593-.058.593-.584zM30.34.698c0 .16.126.286.286.286.16 0 .287-.126.287-.286a.284.284 0 00-.287-.286.283.283 0 00-.286.286zM29.455 11.156c0-.239-.555-.262-.607-.935-.01-.102-.042-.284-.157-.284-.188 0-.042.627-.251.627-.48 0-.637-1.027-.815-1.027-.042 0-.092.034-.092.171 0 .126.021.206.021.353 0 .15-.032.252-.157.252-.282 0-.534-.719-.774-.719-.053 0-.105.035-.105.092 0 .137.21.387.21.513 0 .274-.68.125-.68.354 0 .102.093.136.219.136.22 0 .565-.102.743-.102.105 0 .261.023.261.17 0 .16-.376.365-.376.514 0 .068.062.102.115.102.282 0 .782-.536 1.137-.536.063 0 .22.035.22.137 0 .148-.356.41-.356.627 0 .057.032.125.095.125.187 0 .438-.535.794-.535.136 0 .335.057.44.057.084 0 .115-.057.115-.092zm.272 5.532c.167-.57.377-.97.72-1.585-.343-.194-1.254-.605-1.254-1.278 0-.787.9-1.403 1.086-1.403.084 0 .104.08.104.229 0 .41-.177 1.071-.177 1.425 0 .32.188.628.355.628.178 0 .67-.685.67-1.358 0-1.209-.973-1.574-1.274-1.574-.283 0-.795.502-1.998.502-2.246 0-2.759-2.428-2.759-3.49 0-.045.01-.057.02-.057.053 0 .273.297.984.297.366 0 .7-.103 1.234-.103 1.252 0 1.807.948 2.581 2.156.468.319 1.588.832 1.588 2.28 0 1.278-1.245 1.985-1.546 3.354.479-.057.761-.993 1.253-.993.251 0 .366.217.366.56 0 .501-.262 1.254-.764 1.722.01-.046.01-.103.01-.172 0-.319-.114-.775-.45-.775-.52 0-.687.616-.98 1.129-.303-1.163-.711-2.213-1.443-2.851-.74-.65-2.017-.297-2.017-1.483 0-.32.19-.775.19-1.14a.57.57 0 00-.085-.331c1.004.41.648 1.14 1.266 1.893.385.48 1.451.935 2.068 2.908.01-.057.021-.205.021-.307 0-1.688-2.048-3.343-2.225-4.027 1.19.148 1.398.468 1.963 2.179.116.354.493 1.232.493 1.665zM23.218 4.486c-.785 0-1.3-.378-1.3-.573 0-.098.066-.162.157-.162.246 0 .784.367.963.367.046 0 .08-.021.08-.086 0-.195-.192-.52-.192-.681 0-.044.034-.076.101-.076.303 0 .752.12.988.12.078 0 .1-.044.1-.088 0-.237-.729-.702-.729-.843 0-.13.906-.324.906-.529 0-.217-1.232-.065-1.232-.27 0-.152.236-.411.236-.53 0-.054-.045-.076-.123-.076-.101 0-.64.206-.864.206-.112 0-.247-.022-.247-.174 0-.248.438-.518 1.122-.518 1.108 0 1.77.735 1.77 1.967.001 1.557-1.13 1.946-1.736 1.946zm-2.185-2.054c0-.12-.438-.346-.438-.476 0-.021.022-.032.056-.032.124 0 .337.043.506.043.146 0 .168-.605.278-.605.079 0 .213.573.337.573.145 0 .414-.162.527-.162.022 0 .045.01.045.032 0 .076-.28.367-.28.454 0 .097.628.216.628.303 0 .108-.64.097-.64.195 0 .074.236.377.236.475 0 .022-.012.033-.034.033-.09 0-.438-.152-.539-.152-.123 0-.323.443-.424.443-.033 0-.055-.043-.055-.097l-.023-.432c0-.044-.022-.087-.078-.087-.135 0-.393-.011-.472-.011-.057 0-.079-.01-.079-.032 0-.087.45-.39.45-.465zm-.326 1.772c.18 0 .214.422.248.67.022.13.045.141.1.141.136 0 .348-.497.492-.497.213 0 .786.573 1.739.573 1.355 0 2.634-.92 2.634-2.54 0-1.568-1.145-2.487-2.724-2.487-.751 0-1.302.357-1.593.357-.177.011-.446-.421-.581-.421-.056 0-.112.107-.112.291 0 .12 0 .498-.135.498-.27 0-1.312-.746-1.312-.476 0 .249.694 1.006.694 1.2 0 .195-.683.379-.683.508 0 .238.729.281.729.584 0 .302-.763.54-.763.767 0 .184.763.055.763.281 0 .227-.56.984-.56 1.2 0 .054.01.054.055.054.213 0 .852-.703 1.01-.703zM16.21 23.4c0 .103-.03.219-.112.334-.112-.23-.428-.346-.57-.346-1.05 0-.653 1.72-1.773 1.72-.469 0-.51-.07-.683-.07-.071 0-.112.036-.112.105 0 .3.377 1.039 1.426 1.039 1.05 0 2.058-.727 2.058-1.629 0-.15-.03-.31-.091-.472.04-.07.143-.116.234-.116.163 0 .255.21.407.21.164 0 .286-.14.286-.324a.353.353 0 00-.193-.325.415.415 0 00.142-.311c0-.197-.122-.38-.326-.38-.092 0-.153.034-.224.113-.02-.206-.122-.403-.316-.403-.153 0-.265.127-.265.324 0 .183.112.334.112.53"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
                <path
                    d="M10.111 21.456c.823.236 1.235.746 1.316 1.351.083.581.186 1.056.38 1.293.258.333.762.627 1.205.627.37 0 .668-.14.668-.532 0-.428-.504-1.388-1.245-1.388-.071 0-.164.012-.267.012-.093 0-.227-.023-.309-.107-.164-.166-.216-1.056-.524-1.589-.34-.593-.71-.76-1.214-.76-.36 0-.761.226-.761.558 0 .203.093.345.751.535zm2.87 2.656c-.309 0-.772-.38-.772-.594 0-.178.144-.273.257-.273.258 0 .72.369.72.677 0 .083-.051.19-.205.19z"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
                <path
                    d="M12.431 15.676c0-.72 1.71-1.102 1.71-1.99 0-.146-.056-.404-.157-.595.596.326 1.035.877 1.035 1.326 0 .775-.81 1.135-.81 1.619 0 .561.866.651.866 1.348 0 .573-.821 1.236-.821 1.978 0 .573.405 1.044 1.023 1.123a2.6 2.6 0 01-.573.079c-1.137 0-2.307-.933-2.307-2.046 0-.55.237-1.032.596-1.381.316.27.63.45.833.45.18 0 .259-.09.259-.225 0-.417-1.654-.798-1.654-1.686zm3.589 5.675c-.386.176-.54.146-.54.54 0 .146-.034.336-.034.437 0 .135.023.214.18.214.405 0 1.047-.685 1.047-1.27 0-.158-.09-.224-.192-.224-.09 0-.19.18-.461.303zm-.045-.81c0-.505-1.046-.516-1.046-1.28 0-.192.123-.517.371-.866.102.584.337.888.844 1.08 1 .37 1.136.931 1.136 1.528 0 1.011-.709 2.27-2.531 2.27-1.463 0-2.509-1.304-2.509-2.406 0-.303.079-.64.27-.64.169 0 .225.135.36.27.507.506 1.058.64 1.856.64.72 0 1.249-.292 1.249-.596zM7.59 20.333c.024.232-.122.44-.325.468-.204.027-.39-.14-.413-.37-.024-.233.122-.442.326-.47.204-.027.389.14.412.372zm-1.825.436c.041.38.352.666.703.622a.736.736 0 00.323-.11c.078.354.34.582.695.53.36-.054.604-.376.566-.786a.892.892 0 00-.059-.256s.048-.005.083-.013c.353-.076.591-.397.562-.786-.04-.4-.355-.696-.683-.65a.578.578 0 00-.324.15c-.088-.332-.363-.62-.74-.55-.34.064-.564.391-.53.806.006.068.02.145.05.222l-.098.016c-.285.048-.595.374-.548.805z"
                  fill={fill || "fff"}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
}

export default UnileverLogo
