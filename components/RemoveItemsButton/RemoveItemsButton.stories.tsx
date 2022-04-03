import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RemoveItemsButton from "./RemoveItemsButton";

export default {
    title: 'RemoveItemsButton',
    component: RemoveItemsButton,
} as ComponentMeta<typeof RemoveItemsButton>;

export const Standard: ComponentStory<typeof RemoveItemsButton> = () => (
    <RemoveItemsButton
        onClick={() => console.log('click')}
    />
);