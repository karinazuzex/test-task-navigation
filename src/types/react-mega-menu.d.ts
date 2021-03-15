import * as React from "react";

/**
 * TYPES
 */
export declare type StyleConfig = {
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
    menuItemProps?: React.HTMLAttributes<HTMLLIElement>;
    menuItemSelectedProps?: React.HTMLAttributes<HTMLLIElement>;
    menuProps?: React.HTMLAttributes<HTMLUListElement>;
};
export declare type Directions = "LEFT" | "RIGHT";
export declare type Props = {
    tolerance?: number;
    direction?: Directions;
    data: Section[];
    styleConfig: StyleConfig;
    onExit?: () => void;
};
export declare type State = {
    activeRow: number;
    mouseLocs: MouseCoords[];
    lastDelayLoc?: MouseCoords;
    timeoutID?: number;
};
export declare type menuItemProps = {
    props?: React.HTMLAttributes<HTMLLIElement>;
    selectedProps?: React.HTMLAttributes<HTMLLIElement>;
    hasData?: boolean;
    selected?: boolean;
    label: string;
    mouseEntered?: () => void;
};
export declare type Section = {
    label: string;
    key: string | number;
    items: React.ReactNode;
};
export declare type MouseCoords = {
    x: number;
    y: number;
};
/**
 * SUB-COMPONENTS
 */
export declare function MenuItem({ selected, label, mouseEntered, hasData, props, selectedProps }: menuItemProps): JSX.Element;
/**
 * MAIN COMPONENT
 */
export declare class ReactMegaMenu extends React.Component<Props, State> {
    static readonly DELAY: number;
    static defaultProps: {
        tolerance: number;
        direction: string;
        styleConfig: {};
    };
    state: State;
    instance: React.RefObject<HTMLUListElement>;
    mouseLeave: () => void;
    mouseEnterRow(row: number): () => void;
    possiblyActivate(row: number): void;
    activate(row: number): void;
    genCoords(x: number, y: number): MouseCoords;
    recordMouse: (e: React.MouseEvent<Element>) => void;
    calcSlope(a: MouseCoords, b: MouseCoords): number;
    enterSubMenu: () => void;
    dismissTimeout(): void;
    /**
     * Relies on state & props.
     *
     * If there is no current active row _OR_
     * If the mouse location was not previously recorded _OR_
     * If the mouse location comes in from outside of the menu _OR_
     * If the mouse hasn't moved since last delay _OR_
     * DEFAULT:
     * @return 0 delay.
     *
     * If the slope is smaller than slope to top corner, or bigger than slope to bottom corner
     * @return DELAY's value
     *
     * @memberof ReactMegaMenu
     */
    getActivationDelay(): 150 | 0;
    render(): JSX.Element;
}
export default ReactMegaMenu;
