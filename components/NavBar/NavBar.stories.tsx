import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../../stores/store";
import RenderWithProviders from "../../stories/utils/RenderWithProviders";


export default {
    title: 'NavBar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Standard: ComponentStory<typeof NavBar> = () => (
    <RenderWithProviders>
        <NavBar
            title="NavBar"
        />
    </RenderWithProviders>
);
