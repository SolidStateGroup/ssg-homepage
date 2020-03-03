import React from "react"

function SvgComponent({width, height, fill, className}) {
    return (
        <svg className={className} width={width || '100%'} height={height || 'auto'} viewBox="0 0 40 73">
            <title>Java</title>
            <g fill={fill || 'white'} fillRule="evenodd">
                <path d="M24.942.266c1.148 1.294 1.526 3.146 1.197 4.816-.355 1.875-1.405 3.533-2.638 4.961-.989 1.15-2.125 2.166-3.31 3.11-1.38 1.101-2.735 2.287-3.602 3.836-.733 1.258-.904 2.807-.403 4.174.818 2.348 2.723 4.09 3.761 6.305a50.822 50.822 0 01-3.321-3.146c-1.1-1.162-2.137-2.396-2.821-3.848-.464-1.017-.672-2.203-.318-3.28.354-1.1 1.148-1.984 1.942-2.807 2.21-2.19 4.933-3.8 7.095-6.026 1.197-1.222 2.186-2.686 2.528-4.368.28-1.234.146-2.505-.11-3.727" />
                <path d="M24.942.266c1.148 1.294 1.526 3.146 1.197 4.816-.355 1.875-1.405 3.533-2.638 4.961-.989 1.15-2.125 2.166-3.31 3.11-1.38 1.101-2.735 2.287-3.602 3.836-.733 1.258-.904 2.807-.403 4.174.818 2.348 2.723 4.09 3.761 6.305a50.822 50.822 0 01-3.321-3.146c-1.1-1.162-2.137-2.396-2.821-3.848-.464-1.017-.672-2.203-.318-3.28.354-1.1 1.148-1.984 1.942-2.807 2.21-2.19 4.933-3.8 7.095-6.026 1.197-1.222 2.186-2.686 2.528-4.368.28-1.234.146-2.505-.11-3.727z" />
                <path d="M23.135 14.047c2.37-1.73 5.142-2.831 7.95-3.63-2.222 1.404-4.542 2.686-6.46 4.49-.696.665-1.355 1.427-1.66 2.359-.232.69-.135 1.452.146 2.106.513 1.161 1.38 2.105 2.04 3.17.561.907.659 2.07.232 3.05-.648 1.44-1.917 2.492-3.236 3.327-.172.097-.318.278-.526.302.88-.786 1.563-1.9 1.54-3.097-.026-.896-.526-1.682-1.112-2.324-1.21-1.427-2.223-3.243-2.015-5.166.207-1.925 1.6-3.473 3.101-4.587" />
                <path d="M23.135 14.047c2.37-1.73 5.142-2.831 7.95-3.63-2.222 1.404-4.542 2.686-6.46 4.49-.696.665-1.355 1.427-1.66 2.359-.232.69-.135 1.452.146 2.106.513 1.161 1.38 2.105 2.04 3.17.561.907.659 2.07.232 3.05-.648 1.44-1.917 2.492-3.236 3.327-.172.097-.318.278-.526.302.88-.786 1.563-1.9 1.54-3.097-.026-.896-.526-1.682-1.112-2.324-1.21-1.427-2.223-3.243-2.015-5.166.207-1.925 1.6-3.473 3.101-4.587zM31.537 28.036c.513-.617 1.331-.775 2.076-.871 1.295-.17 2.674.157 3.651 1.04.806.714 1.258 1.828 1.087 2.904-.183 1.247-1.026 2.288-1.978 3.074-1.722 1.367-3.847 2.166-5.972 2.698.123-.133.257-.254.415-.35 1.612-.86 3.212-1.864 4.397-3.268.72-.87 1.282-2.008 1.05-3.158-.244-1.33-1.55-2.3-2.882-2.372-.635-.06-1.233.182-1.844.303" />
                <path d="M31.537 28.036c.513-.617 1.331-.775 2.076-.871 1.295-.17 2.674.157 3.651 1.04.806.714 1.258 1.828 1.087 2.904-.183 1.247-1.026 2.288-1.978 3.074-1.722 1.367-3.847 2.166-5.972 2.698.123-.133.257-.254.415-.35 1.612-.86 3.212-1.864 4.397-3.268.72-.87 1.282-2.008 1.05-3.158-.244-1.33-1.55-2.3-2.882-2.372-.635-.06-1.233.182-1.844.303zM6.99 29.137c2.247-.956 4.69-1.573 7.144-1.537-1.43.411-2.894.762-4.238 1.391-.317.17-.684.327-.867.654-.097.254.171.423.366.508.83.339 1.747.388 2.638.472 3.126.206 6.265.085 9.38-.109 3.076-.193 6.13-.605 9.17-1.089-.672.315-1.356.63-1.978 1.029-.318.217-.708.278-1.063.363-3.737.822-7.571 1.077-11.381 1.137a59.268 59.268 0 01-4.408-.109c-1.637-.109-3.286-.23-4.885-.653-.465-.133-.953-.278-1.32-.605-.182-.145-.182-.436-.024-.605.403-.412.965-.605 1.466-.847" />
                <path d="M6.99 29.137c2.247-.956 4.69-1.573 7.144-1.537-1.43.411-2.894.762-4.238 1.391-.317.17-.684.327-.867.654-.097.254.171.423.366.508.83.339 1.747.388 2.638.472 3.126.206 6.265.085 9.38-.109 3.076-.193 6.13-.605 9.17-1.089-.672.315-1.356.63-1.978 1.029-.318.217-.708.278-1.063.363-3.737.822-7.571 1.077-11.381 1.137a59.268 59.268 0 01-4.408-.109c-1.637-.109-3.286-.23-4.885-.653-.465-.133-.953-.278-1.32-.605-.182-.145-.182-.436-.024-.605.403-.412.965-.605 1.466-.847zM9.873 34.304c.635-.496 1.392-.774 2.15-1.04-.245.29-.587.568-.611.968-.012.254.195.447.403.568.402.206.854.279 1.307.34 2.344.241 4.713.374 7.082.217 2.161-.109 4.31-.46 6.448-.835.586.545 1.282.92 2.015 1.246-2.577.75-5.227 1.186-7.889 1.392-2.515.17-5.068.157-7.571-.242-.99-.182-2.003-.387-2.906-.847-.367-.194-.782-.448-.892-.871-.073-.363.195-.69.464-.896" />
                <path d="M9.873 34.304c.635-.496 1.392-.774 2.15-1.04-.245.29-.587.568-.611.968-.012.254.195.447.403.568.402.206.854.279 1.307.34 2.344.241 4.713.374 7.082.217 2.161-.109 4.31-.46 6.448-.835.586.545 1.282.92 2.015 1.246-2.577.75-5.227 1.186-7.889 1.392-2.515.17-5.068.157-7.571-.242-.99-.182-2.003-.387-2.906-.847-.367-.194-.782-.448-.892-.871-.073-.363.195-.69.464-.896zM11.29 39.579c.562-.448 1.258-.678 1.942-.872-.22.206-.61.46-.44.81.33.425.94.473 1.43.582 2.063.254 4.151.423 6.215.266 1.563-.097 3.102-.375 4.629-.641.878.508 1.794.943 2.734 1.331-1.44.64-2.991 1.052-4.542 1.343-2.613.46-5.312.52-7.938.109-1.16-.206-2.344-.472-3.394-1.04-.404-.23-.83-.497-1.002-.945-.134-.35.085-.725.367-.943" />
                <path d="M11.29 39.579c.562-.448 1.258-.678 1.942-.872-.22.206-.61.46-.44.81.33.425.94.473 1.43.582 2.063.254 4.151.423 6.215.266 1.563-.097 3.102-.375 4.629-.641.878.508 1.794.943 2.734 1.331-1.44.64-2.991 1.052-4.542 1.343-2.613.46-5.312.52-7.938.109-1.16-.206-2.344-.472-3.394-1.04-.404-.23-.83-.497-1.002-.945-.134-.35.085-.725.367-.943z" />
                <path d="M4.512 43.003c1.124-.375 2.284-.678 3.468-.714.477-.012.965.012 1.38.254-1.416.085-2.833.436-4.103 1.077-.28.157-.598.339-.708.666 0 .375.427.496.708.617 1.77.653 3.664.859 5.52 1.053 5.532.46 11.1.338 16.632-.158 2.088-.23 4.188-.46 6.216-1.028.647-.218 1.38-.436 1.807-1.005.257-.338.086-.762-.17-1.052.414.23 1 .52.916 1.077-.16.58-.758.883-1.247 1.161-1.563.787-3.284 1.186-4.994 1.537-4.97.968-10.063 1.186-15.118 1.04-3.81-.133-7.62-.496-11.382-1.137-.671-.157-1.428-.29-1.917-.81-.317-.364-.036-.872.269-1.138.77-.702 1.758-1.089 2.723-1.44" />
                <path d="M4.512 43.003c1.124-.375 2.284-.678 3.468-.714.477-.012.965.012 1.38.254-1.416.085-2.833.436-4.103 1.077-.28.157-.598.339-.708.666 0 .375.427.496.708.617 1.77.653 3.664.859 5.52 1.053 5.532.46 11.1.338 16.632-.158 2.088-.23 4.188-.46 6.216-1.028.647-.218 1.38-.436 1.807-1.005.257-.338.086-.762-.17-1.052.414.23 1 .52.916 1.077-.16.58-.758.883-1.247 1.161-1.563.787-3.284 1.186-4.994 1.537-4.97.968-10.063 1.186-15.118 1.04-3.81-.133-7.62-.496-11.382-1.137-.671-.157-1.428-.29-1.917-.81-.317-.364-.036-.872.269-1.138.77-.702 1.758-1.089 2.723-1.44z" />
                <path d="M34.946 47.142c1.233-.424 2.552-.871 3.468-1.84-.16 1.053-1.075 1.78-1.979 2.251-1.733.896-3.676 1.307-5.604 1.646-4.08.641-8.219.798-12.36.726-2.82-.085-5.665-.193-8.437-.774-.66-.182-1.368-.303-1.942-.69 2.467.411 4.97.581 7.474.678 4.115.12 8.243-.036 12.334-.545 2.369-.327 4.75-.726 7.046-1.452" />
                <path d="M34.946 47.142c1.233-.424 2.552-.871 3.468-1.84-.16 1.053-1.075 1.78-1.979 2.251-1.733.896-3.676 1.307-5.604 1.646-4.08.641-8.219.798-12.36.726-2.82-.085-5.665-.193-8.437-.774-.66-.182-1.368-.303-1.942-.69 2.467.411 4.97.581 7.474.678 4.115.12 8.243-.036 12.334-.545 2.369-.327 4.75-.726 7.046-1.452zM2.765 65.088c.012-3.969-.012-7.938.012-11.919.83.024 1.661 0 2.491.024-.012 4.441 0 8.894-.012 13.347-.024 1.247-.048 2.553-.66 3.666-.671 1.187-1.868 2.021-3.137 2.506-.404-.436-.77-.896-1.173-1.332 1.026-.593 2.052-1.44 2.296-2.662.232-1.198.159-2.42.183-3.63" />
                <path d="M2.765 65.088c.012-3.969-.012-7.938.012-11.919.83.024 1.661 0 2.491.024-.012 4.441 0 8.894-.012 13.347-.024 1.247-.048 2.553-.66 3.666-.671 1.187-1.868 2.021-3.137 2.506-.404-.436-.77-.896-1.173-1.332 1.026-.593 2.052-1.44 2.296-2.662.232-1.198.159-2.42.183-3.63zM10.607 63.564c-.537.169-1.038.556-1.185 1.113-.17.617-.122 1.343.281 1.863.391.509 1.1.63 1.71.557.855-.097 1.6-.581 2.26-1.101 0-.908-.013-1.803 0-2.71-1.027 0-2.077-.061-3.066.278zm-3.029-5.615c1.649-.702 3.48-1.065 5.276-.872.928.11 1.893.449 2.49 1.187.502.629.685 1.44.673 2.226v8.12h-1.844c-.061-.4-.122-.81-.171-1.223-.696.545-1.44 1.065-2.308 1.283-.99.254-2.076.23-3.04-.145a2.65 2.65 0 01-1.54-1.743c-.305-1.125-.146-2.444.66-3.352.72-.834 1.807-1.246 2.882-1.44.989-.193 2.003-.193 3.016-.193-.024-.763.122-1.597-.318-2.275-.354-.52-1-.726-1.599-.762-1.307-.11-2.601.218-3.835.641a62.993 62.993 0 01-.342-1.452z" />
                <path d="M10.607 63.564c-.537.169-1.038.556-1.185 1.113-.17.617-.122 1.343.281 1.863.391.509 1.1.63 1.71.557.855-.097 1.6-.581 2.26-1.101 0-.908-.013-1.803 0-2.71-1.027 0-2.077-.061-3.066.278zm-3.029-5.615c1.649-.702 3.48-1.065 5.276-.872.928.11 1.893.449 2.49 1.187.502.629.685 1.44.673 2.226v8.12h-1.844c-.061-.4-.122-.81-.171-1.223-.696.545-1.44 1.065-2.308 1.283-.99.254-2.076.23-3.04-.145a2.65 2.65 0 01-1.54-1.743c-.305-1.125-.146-2.444.66-3.352.72-.834 1.807-1.246 2.882-1.44.989-.193 2.003-.193 3.016-.193-.024-.763.122-1.597-.318-2.275-.354-.52-1-.726-1.599-.762-1.307-.11-2.601.218-3.835.641a62.993 62.993 0 01-.342-1.452zM32.037 63.573c-.513.17-.99.557-1.148 1.09-.17.616-.122 1.343.269 1.875.403.52 1.123.629 1.746.556.843-.12 1.612-.58 2.247-1.137-.024-.883-.012-1.779-.012-2.674-1.038 0-2.1-.06-3.102.29zm-2.992-5.626c1.661-.703 3.493-1.077 5.3-.872.904.109 1.832.436 2.43 1.138.562.665.733 1.549.72 2.396-.012 2.674.013 5.336-.023 8.01-.611-.024-1.222.012-1.832-.024-.062-.411-.11-.81-.183-1.21-.855.726-1.881 1.319-3.041 1.416-1.063.097-2.26-.036-3.09-.787-.867-.798-1.013-2.093-.794-3.195.208-1.016.977-1.85 1.905-2.299 1.453-.701 3.115-.738 4.702-.726-.025-.737.11-1.524-.27-2.19-.292-.532-.915-.774-1.501-.835-1.355-.145-2.71.194-3.981.63-.11-.484-.232-.968-.342-1.452z" />
                <path d="M32.037 63.573c-.513.17-.99.557-1.148 1.09-.17.616-.122 1.343.269 1.875.403.52 1.123.629 1.746.556.843-.12 1.612-.58 2.247-1.137-.024-.883-.012-1.779-.012-2.674-1.038 0-2.1-.06-3.102.29zm-2.992-5.626c1.661-.703 3.493-1.077 5.3-.872.904.109 1.832.436 2.43 1.138.562.665.733 1.549.72 2.396-.012 2.674.013 5.336-.023 8.01-.611-.024-1.222.012-1.832-.024-.062-.411-.11-.81-.183-1.21-.855.726-1.881 1.319-3.041 1.416-1.063.097-2.26-.036-3.09-.787-.867-.798-1.013-2.093-.794-3.195.208-1.016.977-1.85 1.905-2.299 1.453-.701 3.115-.738 4.702-.726-.025-.737.11-1.524-.27-2.19-.292-.532-.915-.774-1.501-.835-1.355-.145-2.71.194-3.981.63-.11-.484-.232-.968-.342-1.452zM17.408 57.22h2.564c.5 1.597.99 3.183 1.49 4.78.293.98.66 1.948.867 2.952.11.448.207.908.342 1.344 1.05-2.94 1.856-5.978 2.272-9.076h2.49c-.72 3.92-1.855 7.78-3.565 11.387h-2.931c-1.172-3.8-2.357-7.587-3.53-11.387" />
                <path d="M17.408 57.22h2.564c.5 1.597.99 3.183 1.49 4.78.293.98.66 1.948.867 2.952.11.448.207.908.342 1.344 1.05-2.94 1.856-5.978 2.272-9.076h2.49c-.72 3.92-1.855 7.78-3.565 11.387h-2.931c-1.172-3.8-2.357-7.587-3.53-11.387zM37.984 57h-.3v-.107h.73v.108h-.301v.87h-.13z" />
                <path d="M37.984 57h-.3v-.107h.73v.108h-.301v.87h-.13zM39.357 57.443c-.007-.136-.016-.302-.016-.422h-.003a7.174 7.174 0 01-.124.371l-.175.475h-.096l-.162-.466a4.738 4.738 0 01-.112-.38h-.003c-.003.122-.01.284-.02.432l-.025.42h-.122l.069-.979h.162l.17.474c.04.12.072.228.098.33h.004c.026-.1.06-.207.105-.33l.176-.474h.162l.061.979h-.126l-.023-.43z" />
                <path d="M39.357 57.443c-.007-.136-.016-.302-.016-.422h-.003a7.174 7.174 0 01-.124.371l-.175.475h-.096l-.162-.466a4.738 4.738 0 01-.112-.38h-.003c-.003.122-.01.284-.02.432l-.025.42h-.122l.069-.979h.162l.17.474c.04.12.072.228.098.33h.004c.026-.1.06-.207.105-.33l.176-.474h.162l.061.979h-.126l-.023-.43z" />
            </g>
        </svg>
    )
}

export default SvgComponent