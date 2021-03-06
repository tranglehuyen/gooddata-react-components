// (C) 2007-2018 GoodData Corporation
import * as React from 'react';
import { IMenuOpenedBySharedProps } from './MenuOpenedBySharedProps';
import MenuPosition from '../positioning/MenuPosition';

export default class MenuOpenedByHover extends React.Component<IMenuOpenedBySharedProps> {
    private static openCloseDelayMs = 200;

    private timerCloseDelay: number = null;

    public componentWillUnmount() {
        this.clearCloseDelayTimer();
    }

    public render() {
        return (
            <MenuPosition
                toggler={(
                    <div onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
                        {this.props.toggler}
                    </div>
                )}
                opened={this.props.opened}
                topLevelMenu={this.props.topLevelMenu}
                alignment={this.props.alignment}
                spacing={this.props.spacing}
                offset={this.props.offset}
                portalTarget={this.props.portalTarget}
            >
                <div onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
                    {this.props.children}
                </div>
            </MenuPosition>
        );
    }

    private clearCloseDelayTimer = () => {
        window.clearTimeout(this.timerCloseDelay);
    }

    private hoverStart = () => {
        this.clearCloseDelayTimer();
        this.timerCloseDelay = window.setTimeout(() => {
            this.props.onOpenedChange(true);
        }, MenuOpenedByHover.openCloseDelayMs);
    }

    private hoverEnd = () => {
        this.clearCloseDelayTimer();
        this.timerCloseDelay = window.setTimeout(() => {
            this.props.onOpenedChange(false);
        }, MenuOpenedByHover.openCloseDelayMs);
    }
}
