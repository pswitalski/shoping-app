import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "../../stores/store";
import { SessionProvider } from "next-auth/react";

const RenderWithProviders: FunctionComponent = ({children}) => {
    return(
        <Provider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </Provider>
    )
};

export default RenderWithProviders;