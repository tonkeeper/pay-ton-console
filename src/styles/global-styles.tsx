import { JSXElement } from 'solid-js';
import { createGlobalStyles } from 'solid-styled-components';
import { fontFamily } from './foundations/font-family';

const disableScrollClass = 'disable-scroll';
const usingMouseClass = 'using-mouse';

export const GlobalStyles = (): JSXElement => {
    document.body.addEventListener('mousedown', () => document.body.classList.add(usingMouseClass));

    document.body.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
            document.body.classList.remove(usingMouseClass);
        }
    });

    const Styles = createGlobalStyles`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: ${fontFamily.body};
        text-decoration: unset;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    html, body, #root {
        margin: 0;
        height: 100%;
    }
    
    img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    *:focus {
        outline: #08f auto 2px;
    }
    
    li {
        list-style: none;
    }
    
    button {
        outline: none;
    }
    
    body.${disableScrollClass} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${usingMouseClass} *:focus {
        outline: none;
    }
    
    .mb-0 {
        margin-bottom: 0 !important;
    }
    
    .mb-1 {
        margin-bottom: 4px !important;
    }
    
    .mb-2 {
        margin-bottom: 8px !important;
    }
    
    .mb-3 {
        margin-bottom: 12px !important;
    }
    
    .mb-4 {
        margin-bottom: 16px !important;
    }
    
    .mt-0 {
        margin-top: 0 !important;
    }
    
    .mt-1 {
        margin-top: 4px !important;
    }
    
    .mt-2 {
        margin-top: 8px !important;
    }
    
    .mt-3 {
        margin-top: 12px !important;
    }
    
    .mt-4 {
        margin-top: 16px !important;
    }
    
    .ml-0 {
        margin-left: 0 !important;
    }
    
    .ml-1 {
        margin-left: 4px !important;
    }
    
    .ml-2 {
        margin-left: 8px !important;
    }
    
    .ml-3 {
        margin-left: 12px !important;
    }
    
    .ml-4 {
        margin-left: 16px !important;
    }
    
    .mr-0 {
        margin-right: 0 !important;
    }
    
    .mr-1 {
        margin-right: 4px !important;
    }
    
    .mr-2 {
        margin-right: 8px !important;
    }
    
    .mr-3 {
        margin-right: 12px !important;
    }
    
    .mr-4 {
        margin-right: 16px !important;
    }
    
    .block {
        display: block;
    }
    
    .inline {
        display: inline;
    }
`;
    return <Styles />;
};
