import { Component } from 'solid-js';
import {
    LanguageSelectContainerStyled,
    LanguageSelectIconStyled,
    LanguageSelectStyled
} from './style';
import { Locales, Styleable } from 'src/models';
import { locale, setLocale } from 'src/state';

export const LanguageSelect: Component<Styleable> = props => {
    return (
        <LanguageSelectContainerStyled class={props.class}>
            <LanguageSelectIconStyled />
            <LanguageSelectStyled
                value={locale()}
                onChange={e => setLocale(e.target.value as Locales)}
            >
                <option value="en">Eng</option>
                <option value="ru">Ru</option>
            </LanguageSelectStyled>
        </LanguageSelectContainerStyled>
    );
};
