import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddNewItemButton from "./AddNewItemButton";


export default {
    title: 'AddNewItemButton',
    component: AddNewItemButton,
} as ComponentMeta<typeof AddNewItemButton>;

export const Standard: ComponentStory<typeof AddNewItemButton> = () => (
    <AddNewItemButton
        onClick={() => console.log('click')}
    >
        Button
    </AddNewItemButton>
);
