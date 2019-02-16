import * as React from "react";
import styled from "styled-components";
import { color, ColorProps, space, SpaceProps } from "styled-system";
import { getValueFromTheme, hover, HoverProps, cursor, CursorProps } from "../../utils";

type IconName = "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "back" | "check" | "circle-info" | "circle-question" | "circle-warning" | "circle-success" | "close" | "crown" | "setting" | "giventake" | "gridview" | "helpbadge" | "listview" | "next" | "search" | "selectall" | "step" | "upload" | "reload" | "add" | "delete" | "doublearrow-left" | "doublearrow-right" | "edit" | "function" | "home" | "ascending" | "descending" | "logout" | "personal" | "support" | "link" | "global" | "guide" | "folder" | "hamburger";

interface Props {
  name: IconName;
  theme?: any;
  size?: number;
}

const StyledSvg = styled.svg.attrs((props: any) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size,
  height: props.size
})) <any>`
  box-sizing: border-box;
  ${color}
  ${hover}
  ${cursor}
  ${space}
  transition: all 0.15s ease-out;
`;

export type IconProps = Props & HoverProps & ColorProps & CursorProps & SpaceProps;

export const Icon: React.SFC<IconProps> = (props) => {
  const ic = getIcons(props.name);
  return (
    <StyledSvg {...props} viewBox={`0 0 ${ic.width} ${ic.height}`} >
      <g fill="none" fillRule="evenodd">
        {ic.path}
      </g>
    </StyledSvg>
  );
};

Icon.defaultProps = {
  color: "rgba(22,27,72,0.8)",
  size: 16,
};

const getIcons = (name: string) => {
  const icons: any = {
    "arrow-down": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" d="M12 16.485l9.192-9.192a1 1 0 0 1 1.415 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 1 1 1.415-1.414L12 16.485z" />
    },
    "arrow-left": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" d="M8.243 12.314l7.778-7.778a1 1 0 1 0-1.414-1.415L6.12 11.607a1 1 0 0 0 0 1.414l8.486 8.485a1 1 0 1 0 1.414-1.414l-7.778-7.778z" />
    },
    "arrow-right": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" d="M16.385 12.314L8.607 4.536A1 1 0 1 1 10.02 3.12l8.485 8.486a1 1 0 0 1 0 1.414l-8.485 8.485a1 1 0 1 1-1.414-1.414l7.778-7.778z" />
    },
    "arrow-up": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" d="M12 7.515l9.192 9.192a1 1 0 0 0 1.415-1.414l-9.9-9.9a1 1 0 0 0-1.414 0l-9.9 9.9a1 1 0 1 0 1.415 1.414L12 7.515z" />
    },
    "back": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" transform="matrix(-1 0 0 1 24 0)">
        <path d="M21.485 12l-9.192-9.192a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 1 1-1.414-1.415L21.485 12z" />
        <rect width="22" height="2" y="11" rx="1" />
      </g>
    },
    "check": {
      width: 14,
      height: 14,
      path: <path fill="currentColor" d="M6.01 9.667l6.188-6.187a.75.75 0 1 1 1.06 1.06l-6.717 6.718a.75.75 0 0 1-1.06 0L.53 6.308a.75.75 0 1 1 1.06-1.06l4.42 4.42z" />
    },
    "circle-info": {
      width: 16,
      height: 16,
      path: <path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm.83-9.357c0-.333-.089-.593-.267-.78a.894.894 0 0 0-.676-.28.861.861 0 0 0-.667.28c-.17.187-.256.465-.256.834v5.34c0 .364.085.644.256.84.171.196.393.294.667.294a.883.883 0 0 0 .676-.287c.178-.192.267-.474.267-.848V6.643zm-.923-1.928c.25 0 .467-.081.65-.243.182-.162.273-.386.273-.673 0-.296-.093-.522-.28-.677a.978.978 0 0 0-.643-.232c-.25 0-.47.085-.66.256a.841.841 0 0 0-.283.653c0 .291.092.517.277.677.184.16.406.239.666.239z" />
    },
    "circle-question": {
      width: 16,
      height: 16,
      path: <path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM4.615 5.665c0 .21.088.404.263.585.176.18.391.27.646.27.433 0 .727-.258.882-.773.164-.492.365-.865.602-1.118.237-.253.606-.379 1.107-.379.429 0 .778.125 1.05.376.27.25.406.558.406.923 0 .187-.044.36-.133.52a1.96 1.96 0 0 1-.328.433c-.13.13-.34.323-.632.578-.333.292-.597.544-.793.755a2.525 2.525 0 0 0-.472.739c-.119.28-.178.612-.178.994 0 .306.081.536.243.69a.832.832 0 0 0 .598.233c.456 0 .727-.237.813-.71.05-.224.088-.38.113-.469.025-.089.06-.178.106-.267.046-.088.115-.186.209-.294.093-.107.217-.23.372-.372.56-.501.95-.858 1.166-1.07.216-.212.403-.464.56-.755.158-.292.236-.631.236-1.019a2.44 2.44 0 0 0-.413-1.367c-.276-.42-.667-.75-1.173-.995-.506-.243-1.089-.365-1.75-.365-.71 0-1.333.145-1.866.437-.533.292-.939.66-1.217 1.104-.278.444-.417.883-.417 1.316zm3.336 7.492c.27 0 .506-.09.711-.273.205-.183.308-.433.308-.752a.985.985 0 0 0-.294-.725.985.985 0 0 0-.725-.294c-.291 0-.538.098-.738.294-.2.196-.3.438-.3.725 0 .323.103.575.31.755.208.18.45.27.728.27z" />
    },
    "circle-warning": {
      width: 16,
      height: 16,
      path: <path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-.72-7.34c.041.423.11.739.205.946.096.207.267.311.513.311a.537.537 0 0 0 .52-.321c.104-.214.173-.522.205-.923l.294-3.37c.032-.31.047-.615.047-.916 0-.51-.066-.901-.198-1.173-.132-.27-.394-.406-.786-.406-.323 0-.584.106-.783.317C7.1 3.337 7 3.632 7 4.011c0 .278.02.736.062 1.374l.218 3.274zm.76 4.497c.273 0 .512-.09.717-.273.205-.183.307-.433.307-.752a.971.971 0 0 0-.304-.721 1.013 1.013 0 0 0-.735-.298.99.99 0 0 0-.728.298.982.982 0 0 0-.297.72c0 .324.104.576.311.756.207.18.45.27.728.27z" />
    },
    "circle-success": {
      width: 16,
      height: 16,
      path: null
    },
    "close": {
      width: 24,
      height: 24,
      path: <React.Fragment>
        <path d="M0 0h24v24H0z" opacity=".2" />
        <path fill="currentColor" d="M13.414 12l9.193 9.192a1 1 0 1 1-1.415 1.415L12 13.414l-9.192 9.193a1 1 0 0 1-1.415-1.415L10.586 12 1.393 2.808a1 1 0 0 1 1.415-1.415L12 10.586l9.192-9.193a1 1 0 1 1 1.415 1.415L13.414 12z" />
      </React.Fragment>
    },
    "crown": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" fillRule="nonzero">
        <path d="M5 17.026h14l.789-8.193a1 1 0 0 0-1.578-.909l-2.187 1.57a1 1 0 0 1-1.507-.43l-1.593-3.838a1 1 0 0 0-1.847 0L9.485 9.065a1 1 0 0 1-1.506.43l-2.19-1.57a1 1 0 0 0-1.578.908L5 17.026z" />
        <rect width="14" height="1" x="5" y="18" rx=".5" />
      </g>
    },
    "setting": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" fillRule="nonzero" d="M22.208 14.4c.9.6 1.2 1.8.7 2.9l-1 1.7c-.5.9-1.7 1.3-2.7.7l-1.2-.7c-1.3-.8-3 .2-3 1.7V22c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-1.4c0-1.5-1.7-2.5-3-1.7l-1.2.6c-.9.6-2.1.3-2.7-.7l-1-1.7c-.6-.9-.3-2.1.7-2.7l1.2-.7c1.3-.7 1.3-2.7 0-3.4l-1.2-.7c-.9-.6-1.2-1.8-.7-2.8l1-1.7c.5-.9 1.7-1.3 2.7-.7l1.2.6c1.3.8 3-.2 3-1.7V2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1.4c0 1.5 1.7 2.5 3 1.7l1.2-.7c.9-.6 2.1-.3 2.7.7l1 1.7c.6.9.3 2.1-.7 2.7l-1.2.7c-1.3.8-1.3 2.7 0 3.5l1.2.7zm-.9.587l-1.2-.7c-1.3-.8-1.734-3.68 0-4.65l1.2-.7c.735-.473 1.152-.937.7-1.603l-1-1.7c-.552-.832-1.208-.468-1.692-.152l-1.2.7c-1.586.837-4.145-.548-4.108-2.443v-1.4c0-.697-.237-1.339-1-1.339h-2c-.894 0-1 .645-1 1.439v1.3C10 5.482 8 6.846 6.164 6.182l-1.2-.6c-1-.6-1.84-.758-2.064-.048l-1 1.7C1.5 8 2.1 8.54 3 9.14l1.006.668c1.408.653 1.208 3.68.195 4.192-.134.067-.534.3-1.2.7-1 .6-1.487 1.137-1.018 1.893l1 1.7c.334.707 1.218.531 1.981 0l1.2-.6c1.735-.44 3.636.806 3.636 2.42v1.4c0 .858.208 1.487 1.208 1.487h2c.816 0 .992-.467 1-1.297v-1.3c-.209-1.607 2.058-3.23 3.83-2.52l1.2.7c.756.417 1.635.417 1.97-.084l1-1.7c.442-.799-.008-1.439-.7-1.812zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    },
    "giventake": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <path d="M21.9 5.657L17.302 1.06a.5.5 0 1 1 .707-.707l4.95 4.95a.5.5 0 0 1 0 .706l-4.95 4.95a.5.5 0 0 1-.707-.707L21.9 5.657zM1.414 18.357l4.596 4.596a.5.5 0 0 1-.707.707l-4.95-4.95a.5.5 0 0 1 0-.707l4.95-4.95a.5.5 0 0 1 .707.708l-4.596 4.596z" />
        <rect width="23" height="1" x="1" y="18" rx=".5" />
        <rect width="23" height="1" y="5" rx=".5" />
      </g>
    },
    "gridview": {
      width: 24,
      height: 24,
      path: <path fillRule="nonzero" stroke="currentColor" d="M4.5 4.5v6h6v-6h-6zm0 9v6h6v-6h-6zm9-9v6h6v-6h-6zm0 9v6h6v-6h-6z" />
    },
    "helpbadge": {
      width: 51,
      height: 20,
      path: <path fill="currentColor" d="M2 0h47a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm7.4 15h1.302v-4.844h4.788V15h1.288V4.738H15.49v4.298h-4.788V4.738H9.4V15zm10.192 0h6.076v-1.106h-4.774v-3.738h3.892V9.05h-3.892V5.83h4.62V4.738h-5.922V15zm8.232 0h5.782v-1.106h-4.48V4.738h-1.302V15zm7.588 0h1.302v-4.074h1.694c2.24 0 3.78-1.008 3.78-3.178 0-2.24-1.54-3.01-3.85-3.01h-2.926V15zm1.302-5.124V5.788h1.47c1.806 0 2.716.476 2.716 1.96 0 1.47-.854 2.128-2.66 2.128h-1.526z" />
    },
    "listview": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" fillRule="nonzero" d="M5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4-6h10a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2zm0 6h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm-4 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" />
    },
    "next": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <path d="M21.485 12l-9.192-9.192a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 1 1-1.414-1.415L21.485 12z" />
        <rect width="22" height="2" y="11" rx="1" />
      </g>
    },
    "search": {
      width: 24,
      height: 24,
      path: <path fillRule="nonzero" stroke="currentColor" strokeWidth="2" d="M15.736 15.736l3.518 3.518-3.518-3.518zm3.518 3.518l3.202 3.202-3.202-3.202zm-3.518-3.518l-.316-.316.56-.7A8.001 8.001 0 0 0 4.07 4.072a8.001 8.001 0 1 0 10.65 11.909l.699-.56.316.316z" />
    },
    "selectall": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" fillRule="nonzero" d="M8.811 10.522l-1.089 1.09 3.5 3.5L19 7.332l-1.089-1.089-6.689 6.69-2.41-2.412zm8.633 6.922H6.556V6.556h7.777V5H6.556C5.7 5 5 5.7 5 6.556v10.888C5 18.3 5.7 19 6.556 19h10.888C18.3 19 19 18.3 19 17.444v-6.222h-1.556v6.222z" />
    },
    "step": {
      width: 40,
      height: 40,
      path: <path fill="currentColor" d="M16.9 26.627l13.435-13.435a1 1 0 1 1 1.414 1.415L17.607 28.749a1 1 0 0 1-1.415 0l-8.485-8.486a1 1 0 1 1 1.414-1.414l7.778 7.778z" />
    },
    "upload": {
      width: 24,
      height: 24,
      path: <g fillRule="nonzero">
        <rect width="1" height="13" x="12" y="5" fill="currentColor" rx=".5" />
        <path fill="currentColor" d="M12.854 3.904l4.242 4.242a.5.5 0 1 1-.707.708L12.5 4.964l-3.89 3.89a.5.5 0 0 1-.706-.708l4.242-4.242a.5.5 0 0 1 .708 0z" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" />
      </g>
    },
    "reload": {
      width: 24,
      height: 24,
      path: <g fill="none" fillRule="evenodd">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M19.816 1.818v4.908h-4.909" />
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M2.363 11.635a9.27 9.27 0 0 1 9.271-9.272 9.248 9.248 0 0 1 7.805 4.265M3.454 21.452v-4.909h4.908" />
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20.907 11.635a9.27 9.27 0 0 1-9.272 9.271 9.25 9.25 0 0 1-7.804-4.264" />
      </g>
    },
    "add": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" d="M11 11V3a1 1 0 0 1 2 0v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8z" />
    },
    "delete": {
      width: 20,
      height: 20,
      path: <path fill="currentColor" fillRule="nonzero" d="M10 8.821L6.464 5.286a.833.833 0 1 0-1.178 1.178L8.821 10l-3.535 3.536a.833.833 0 1 0 1.178 1.178L10 11.179l3.536 3.535a.833.833 0 0 0 1.178-1.178L11.179 10l3.535-3.536a.833.833 0 0 0-1.178-1.178L10 8.821zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
    },
    "doublearrow-left": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <path d="M11.828 11.9l6.364-6.364a1 1 0 0 0-1.414-1.415l-7.07 7.071a1 1 0 0 0 0 1.415l7.07 7.07a1 1 0 1 0 1.414-1.414L11.828 11.9z" />
        <path d="M5.828 11.9l6.364-6.364a1 1 0 0 0-1.414-1.415l-7.07 7.071a1 1 0 0 0 0 1.415l7.07 7.07a1 1 0 1 0 1.414-1.414L5.828 11.9z" />
      </g>
    },
    "doublearrow-right": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <path d="M10.97 11.9L4.608 5.535A1 1 0 0 1 6.02 4.12l7.07 7.071a1 1 0 0 1 0 1.415l-7.07 7.07a1 1 0 1 1-1.414-1.414L10.97 11.9z" />
        <path d="M16.97 11.9l-6.363-6.364A1 1 0 0 1 12.02 4.12l7.07 7.071a1 1 0 0 1 0 1.415l-7.07 7.07a1 1 0 1 1-1.414-1.414L16.97 11.9z" />
      </g>
    },
    "edit": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" fillRule="nonzero" d="M19.912 3.906c-1.229-1.208-3.374-1.208-4.604 0L4.388 14.62a.794.794 0 0 0-.214.37l-1.15 4.517a.793.793 0 0 0 .214.76.822.822 0 0 0 .772.21l4.605-1.13a.81.81 0 0 0 .377-.21l10.92-10.715a3.145 3.145 0 0 0 .954-2.259c0-.853-.338-1.654-.954-2.257zM8.002 17.85l-3.07.753.767-3.012 9.034-8.863 2.302 2.259-9.033 8.863zm10.76-10.558l-.576.564-2.302-2.26.575-.563c.614-.603 1.688-.603 2.302 0 .307.301.477.702.477 1.13 0 .427-.17.827-.477 1.129z" />
    },
    "function": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" fillRule="nonzero">
        <circle cx="11.5" cy="4.5" r="1.5" />
        <circle cx="11.5" cy="11.5" r="1.5" />
        <circle cx="11.5" cy="18.5" r="1.5" />
      </g>
    },
    "home": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" fillRule="nonzero" transform="translate(2 3)">
        <rect width="18" height="1" x="1" y="17" rx=".5" />
        <path d="M3.5 9a.5.5 0 0 1 .5.5V17H3V9.5a.5.5 0 0 1 .5-.5zm13 0a.5.5 0 0 1 .5.5V17h-1V9.5a.5.5 0 0 1 .5-.5zM10.006 1.346l-8.88 7.45a.5.5 0 1 1-.643-.765L9.678.316a.498.498 0 0 1 .328-.117.498.498 0 0 1 .328.117l9.192 7.712a.5.5 0 0 1-.643.766l-8.877-7.448zM10 12a.5.5 0 0 1 .5.5V17h-1v-4.5a.5.5 0 0 1 .5-.5z" />
      </g>
    },
    "ascending": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" transform="translate(1 5)">
        <rect width="12" height="2" x="8" rx="1" />
        <rect width="10" height="2" x="10" y="4" rx="1" />
        <rect width="7" height="2" x="13" y="8" rx="1" />
        <rect width="4" height="2" x="16" y="12" rx="1" />
        <rect width="2" height="14" x="3" rx="1" />
        <path d="M3.282 14.671L.807 12.196a1 1 0 0 1 1.414-1.414L3.99 12.55l1.768-1.768a1 1 0 0 1 1.414 1.414l-2.475 2.475a1 1 0 0 1-1.414 0z" />
      </g>
    },
    "descending": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" transform="translate(1 3)">
        <rect width="4" height="2" x="9" y="2" rx="1" />
        <path d="M4.696 1.307l2.475 2.475a1 1 0 1 1-1.414 1.414L3.989 3.428 2.221 5.196A1 1 0 1 1 .807 3.782l2.475-2.475a1 1 0 0 1 1.414 0z" />
        <rect width="7" height="2" x="9" y="6" rx="1" />
        <rect width="10" height="2" x="9" y="10" rx="1" />
        <rect width="12" height="2" x="9" y="14" rx="1" />
        <rect width="2" height="13" rx="1" transform="translate(3 3)" />
      </g>
    },
    "logout": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" fillRule="nonzero">
        <path d="M20.537 12.441a.507.507 0 0 1-.037.002h-12a.5.5 0 1 1 0-1h12l.037.001-3.39-3.39a.5.5 0 1 1 .707-.708l4.242 4.243a.5.5 0 0 1 0 .707l-4.242 4.243a.5.5 0 0 1-.708-.707l3.39-3.39zm.462-.461l.037-.037-.037-.037a.508.508 0 0 1 0 .074z" />
        <path d="M11 21.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4.5a.5.5 0 1 1 0 1H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 .5.5z" />
      </g>
    },
    "personal": {
      width: 24,
      height: 24,
      path: <g fillRule="nonzero" stroke="currentColor">
        <path d="M6.174 15.088A3.5 3.5 0 0 0 3.15 18.17l-.53 4.774a.5.5 0 0 0 .496.555h17.766a.5.5 0 0 0 .497-.555l-.53-4.768a3.5 3.5 0 0 0-3.03-3.085l-3.12-.404a.5.5 0 0 0-.528.307l-1.616 3.966a.6.6 0 0 1-1.112 0l-1.616-3.976a.5.5 0 0 0-.529-.308l-3.125.41zM9.562 3.464a2.926 2.926 0 0 0-1.81 3.13l.364 2.55a3.532 3.532 0 0 0 1.538 2.44l.744.496a2.5 2.5 0 0 0 1.387.42h.183a2.5 2.5 0 0 0 1.387-.42l.744-.496a3.532 3.532 0 0 0 1.537-2.44l.365-2.55a2.926 2.926 0 0 0-1.81-3.13l-.272-.108a5.5 5.5 0 0 0-4.085 0l-.272.108z" />
      </g>
    },
    "support": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <path d="M7.275 20.13l-4.96 1.863a.2.2 0 0 1-.246-.284l1.95-3.515C2.148 16.58 1 14.4 1 12c0-4.97 4.925-9 11-9s11 4.03 11 9-4.925 9-11 9c-1.691 0-3.293-.312-4.725-.87zm.017-1.07c1.403.6 3.006.94 4.708.94 5.523 0 10-3.582 10-8s-4.477-8-10-8S2 7.582 2 12c0 2.389 1.309 4.533 3.384 5.999l-.09-.047L4 20.299l3.292-1.24z" />
        <path d="M8.615 9.665c0-.433.14-.872.417-1.316.278-.444.684-.812 1.217-1.104.533-.292 1.155-.437 1.866-.437.661 0 1.244.122 1.75.365.506.244.897.576 1.173.995.275.42.413.875.413 1.367 0 .388-.078.727-.236 1.019a3.117 3.117 0 0 1-.56.755c-.217.212-.605.569-1.166 1.07-.155.141-.279.265-.372.372a1.513 1.513 0 0 0-.209.294c-.045.09-.08.178-.106.267-.025.089-.062.245-.113.468-.086.474-.357.711-.813.711a.832.832 0 0 1-.598-.232c-.162-.155-.243-.385-.243-.69 0-.383.06-.715.178-.995s.276-.527.472-.739c.196-.211.46-.463.793-.755.291-.255.502-.448.632-.578.13-.13.24-.274.328-.434a1.05 1.05 0 0 0 .133-.52c0-.364-.135-.671-.406-.922-.272-.25-.621-.376-1.05-.376-.501 0-.87.126-1.107.38-.237.252-.438.625-.602 1.117-.155.515-.449.773-.882.773a.867.867 0 0 1-.646-.27c-.175-.18-.263-.375-.263-.585zm3.336 7.492c-.278 0-.52-.09-.728-.27-.207-.18-.31-.432-.31-.755 0-.287.1-.529.3-.725.2-.196.447-.294.738-.294.287 0 .529.098.725.294a.985.985 0 0 1 .294.725c0 .319-.103.57-.308.752a1.038 1.038 0 0 1-.71.273z" />
      </g>
    },
    "link": {
      width: 24,
      height: 24,
      path: <g fill="currentColor" fillRule="nonzero">
        <path d="M19 12.839v-.5a.5.5 0 1 1 1 0v6.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h8.5a.5.5 0 1 1 0 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6z" />
        <path d="M21.625 3.743l-8.51 8.51a.5.5 0 1 1-.708-.707l8.51-8.51h-4.792a.5.5 0 0 1 0-1h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V3.743z" />
      </g>
    },
    "global": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" fillRule="nonzero" d="M10.988 0C4.38.02-1.04 5.414-1 12.017-.96 18.747 4.375 23.974 10.94 24c6.682.027 12.07-5.391 12.061-12.063C22.99 5.397 17.539-.02 10.988 0zM5.842 19.98c-.164.038-.311.044-.407-.18-.043-.101-.08-.209-.125-.33-.489.383-1.111-.075-1.135-.792-.003-.103.035-.209.056-.313.026-.125.088-.256.075-.372a1.785 1.785 0 0 1-.008-.102A1.07 1.07 0 0 1 4 17.162c-.003-.102.035-.208.056-.312.026-.125.088-.256.075-.373-.036-.344 0-.62.229-.83.032-.03-.001-.267-.047-.37-.182-.405-.14-.632.177-.864.148-.108.291-.228.435-.348.153-.128.36-.069.444.194.112.346.22.712.256 1.083.032.329.058.659.081.989.043.173.077.35.094.527.088.917.135 1.84.195 2.762.012.165.015.32-.153.36zM9.874 6.305c-.23.26-.529.463-.764.719-.176.191-.299.428-.444.646-.039.058-.06.138-.113.176-.426.309-.63.749-.793 1.217-.08.226-.163.45-.25.692-.414-.023-.481-.076-.585-.504-.157-.65-.795-.93-1.394-.615a2.038 2.038 0 0 1-.254.106c-.377.133-.624.542-.497.905.254.72.564 1.398 1.274 1.848.252.159.568.376.56.81-.757-.298-1.516-.501-2.059-1.11-.112-.126-.307-.195-.477-.261a1.477 1.477 0 0 1-.157-.072c.192.209.379.415.564.623.11.124.067.216-.109.245-.129.022-.254.06-.444.106.097.2.218.348.23.503.015.203-.024.426-.11.61-.032.065-.269.049-.412.05-.048 0-.114-.051-.142-.096-.185-.3-.363-.604-.54-.909-.03-.051-.08-.118-.066-.163.096-.322-.064-.532-.308-.715a.183.183 0 0 1-.067-.099c-.027-.14-.045-.282-.066-.424.114.014.23.022.342.038l-.08-.135c-.028-.051-.078-.118-.065-.163.096-.322-.064-.532-.309-.715a.182.182 0 0 1-.066-.099c-.027-.14-.045-.282-.066-.424.143.017.287.026.428.053.065.014.123.063.207.11l.12-.217a1.81 1.81 0 0 0-.521-.667c-.436-.352-.56-.807-.321-1.311a30.68 30.68 0 0 1 .816-1.605c.258-.473.267-.979.285-1.49.006-.13.05-.292.14-.376a5.32 5.32 0 0 1 .764-.601c.265-.17.55-.321.846-.428.32-.116.669-.259.956.101.036.044.177.047.25.019.162-.06.313-.15.467-.232.34-.179.458-.118.489.33.168-.059.342-.078.456-.168.311-.245.298-.254.552.02.056.062.142.097.185.054.138-.113.285-.22.413-.342.07-.067.113-.162.158-.25.138-.275.304-.503.641-.599.177-.05.336-.189.482-.312.198-.167.413-.233.657-.145.34.124.675.27.963.385-.25.253-.451.488-.685.686-.23.194-.49.353-.743.52-.066.044-.17.042-.225.094-.336.313-.704.54-1.218.427l-.042.455c-.223 0-.437-.013-.648.008a.695.695 0 0 0-.36.125c-.041.035-.006.26.035.272.476.141.954.36 1.465.16a.355.355 0 0 0 .19-.242c.056-.52.484-.804 1.006-.685a.97.97 0 0 0 .517-.055c.373-.138.722-.35 1.103-.45.208-.055.52-.011.68.114.232.18.381.454.213.796-.092.188-.108.416-.132.63-.026.236-.434.583-.715.581-.472 0-.46 0-.48.453-.018.416-.18.742-.708.703-.153-.011-.309.012-.464.017a.721.721 0 0 0-.555.272zm9.12 8.44c-.104.383-.19.78-.355 1.13-.163.348-.41.638-.441 1.064-.008.107-.15.214-.245.299-.28.247-.613.438-.84.735-.279.365-.52.752-.927.961-.08.042-.156.178-.173.283-.045.289-.184.378-.425.33-.151-.031-.303-.068-.456-.073-.383-.013-.582.245-.606.725-.01.199-.028.416-.108.585-.054.114-.22.2-.344.216-.064.008-.168-.148-.218-.252-.117-.249-.186-.53-.324-.76-.205-.341-.15-.7-.14-1.064.022-.762-.024-1.527-.214-2.25-.065-.25-.405-.42-.634-.6-.236-.187-.502-.329-.732-.523-.098-.083-.158-.242-.206-.379-.183-.52-.35-1.046-.533-1.565-.08-.229-.122-.418.026-.655.177-.284.308-.61.427-.932.045-.121.027-.286.001-.422-.08-.429.104-.754.364-.996.24-.225.537-.383.822-.538.113-.061.262-.038.493-.064-.107.298-.186.499-.249.706-.02.065-.02.178.014.215.257.271.518.54.798.782.06.052.225.025.302-.033a.802.802 0 0 1 1.179.237c.13.224.312.321.531.289.57-.084.794.021 1.003.61.091.258.225.408.436.503.236.105.469.224.712.303.442.144.776.432 1.004.875.04.075.078.185.059.258zm.861-7.241c-.11.026-.217.07-.38.124.083.236.187.41.197.593.013.239-.021.503-.095.719-.026.077-.23.057-.351.059-.041 0-.098-.06-.122-.114a53.18 53.18 0 0 1-.462-1.07c-.025-.06-.068-.14-.056-.192.082-.38-.055-.628-.264-.843a.232.232 0 0 1-.057-.116c-.023-.166-.038-.333-.057-.5.098.016.197.025.293.045l-.068-.16c-.024-.06-.067-.138-.056-.191.082-.38-.055-.627-.264-.843a.231.231 0 0 1-.057-.116c-.023-.166-.038-.333-.056-.5.122.02.245.03.366.063.055.016.105.074.177.128L18.78 4c.336.506.653.973.96 1.45.094.147.057.254-.093.289-.11.026-.218.07-.38.124.083.236.187.41.197.594v.02c.166.247.326.49.485.737.092.148.055.255-.095.29z" />
    },
    "guide": {
      width: 24,
      height: 24,
      path: <path fill="currentColor" d="M7 19c-1.105 0-2 .672-2 1.5S5.895 22 7 22h11.5a.5.5 0 1 1 0 1H7c-1.657 0-3-1.12-3-2.5V4a3 3 0 0 1 3-3h7V0h4v1h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7zm0-1h13V2h-2v5l-2-1-2 1V2H7a2 2 0 0 0-2 2v14.637A3.348 3.348 0 0 1 7 18zm.5 2h12a.5.5 0 1 1 0 1h-12a.5.5 0 1 1 0-1z" />
    },
    "folder": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <path d="M12.677033,5 L13,5 L22,5 C23.1045695,5 24,5.8954305 24,7 L24,21 C24,21.5522847 23.5522847,22 23,22 L1,22 C0.44771525,22 8.71091205e-14,21.5522847 8.70414851e-14,21 L1.02251541e-13,6 L8.68194405e-14,1 C8.5280223e-14,0.44771525 0.44771525,-3.63965922e-14 1,-3.79696274e-14 L9.32296704,-3.21964677e-14 C9.73187163,-3.22715823e-14 10.0995804,0.248950944 10.2514437,0.628609324 L11.7485563,4.37139068 C11.9004196,4.75104906 12.2681284,5 12.677033,5 Z M11.021934,5 C10.9747106,4.91815055 10.9329128,4.83228191 10.8971125,4.74278135 L9.4,1 L1,1 L1,6 L1,21 L23,21 L23,7 C23,6.44771525 22.5522847,6 22,6 L12.877033,6 L1,6 L1,5 L11.021934,5 Z"></path>
      </g>
    },
    "hamburger": {
      width: 24,
      height: 24,
      path: <g fill="currentColor">
        <g transform="translate(0 2)">
          <rect width="24" height="1" rx=".5" />
          <rect width="24" height="1" y="9" rx=".5" />
          <rect width="24" height="1" y="18" rx=".5" />
        </g>
      </g>
    }
  };
  return icons[name];
};