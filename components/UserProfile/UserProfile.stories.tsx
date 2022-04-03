import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfile from "./UserProfile";

export default {
    title: 'UserProfile',
    component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

export const Standard: ComponentStory<typeof UserProfile> = () => (
    <UserProfile
        username="Benny Hill"
    />
);

export const StandardWithPicture: ComponentStory<typeof UserProfile> = () => (
    <UserProfile
        username="Benny Hill"
        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQwdxzT5d5KXQkMt3mq_045HDbnvs-LnhNgJIinuNZkCpi9QQoB43IEtOJ5YxTO"
    />
);

export const Small: ComponentStory<typeof UserProfile> = () => (
    <UserProfile
        username="Benny Hill"
        small
    />
);

export const SmallWithPicture: ComponentStory<typeof UserProfile> = () => (
    <UserProfile
        username="Benny Hill"
        small
        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQwdxzT5d5KXQkMt3mq_045HDbnvs-LnhNgJIinuNZkCpi9QQoB43IEtOJ5YxTO"
    />
)