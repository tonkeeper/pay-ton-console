import { Component } from 'solid-js';
import { AppLoadingStyled } from './style';
import { Spinner } from 'src/uikit/spinner';

export const AppLoading: Component = () => {
    return (
        <AppLoadingStyled>
            <Spinner />
        </AppLoadingStyled>
    );
};
