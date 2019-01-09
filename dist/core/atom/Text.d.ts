import { FontFamilyProps, FontSizeProps, FontWeightProps, TextAlignProps, LetterSpacingProps, LineHeightProps } from "../../../lib/styled-system";
interface Props {
    medium?: boolean;
    regular?: boolean;
    demiLight?: boolean;
    light?: boolean;
    left?: boolean;
    right?: boolean;
    center?: boolean;
    overflowWrap?: "break-word" | "normal";
    textOverflow?: "clip" | "ellipsis" | "initial";
    wordBreak?: "break-all" | "break-word" | "keep-all" | "normal";
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
}
export declare const Text: import("styled-components").StyledComponent<"p", any, import("../../../lib/styled-system").SpaceProps<string | number> & import("../../../lib/styled-system").WidthProps<string | number> & import("../../../lib/styled-system").HeightProps<string | number> & import("../../../lib/styled-system").ColorProps & import("../../../lib/styled-system").JustifySelfProps & import("../../../lib/styled-system").AlignSelfProps & import("../../../lib/styled-system").OrderProps & import("../../../lib/styled-system").DisplayProps & import("../../../lib/styled-system").MaxWidthProps<string | number> & import("../../../lib/styled-system").MaxHeightProps<string | number> & import("../../../lib/styled-system").MinWidthProps<string | number> & import("../../../lib/styled-system").MinHeightProps<string | number> & import("../../../lib/styled-system").SizeProps & import("../../../lib/styled-system").RatioProps & import("../../../lib/styled-system").VerticalAlignProps<string | number> & import("../../../lib/styled-system").FlexBasisProps<string | number> & import("../../../lib/styled-system").OpacityProps & import("../../../lib/styled-system").FlexProps<string | number> & import("../../../lib/styled-system").GridColumnProps & import("../../../lib/styled-system").GridRowProps & import("../../../lib/styled-system").GridAreaProps & import("../../../lib/styled-system").BordersProps & import("../../../lib/styled-system").BorderRadiusProps<string | number> & import("../../../lib/styled-system").BoxShadowProps & import("../../../lib/styled-system").BorderColorProps & import("../../../lib/styled-system").OverflowProps & import("../../../lib/styled-system").PositionProps & import("../../../lib/styled-system").ZIndexProps & import("../../../lib/styled-system").TopProps<string | number> & import("../../../lib/styled-system").RightProps<string | number> & import("../../../lib/styled-system").BottomProps<string | number> & import("../../../lib/styled-system").LeftProps<string | number> & import("../../../lib/styled-system").HoverProps & import("../../utils").OfReducerProps & import("../../../lib/styled-system").TransitionProps & import("../../../lib/styled-system").CursorProps & import("../../../lib/styled-system").BorderProps<string | number> & Props & FontFamilyProps & FontSizeProps<string | number> & TextAlignProps & FontWeightProps & LetterSpacingProps<string | number> & LineHeightProps<string | number>, never>;
export {};
