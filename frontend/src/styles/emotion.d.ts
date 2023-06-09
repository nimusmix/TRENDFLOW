import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    contentBackground: string;
    darkToggleBackground: string;
    text: string;
    text200: string;
    hoverText: string;
    border: string;
    headerBorder: string;
    navBackground: string;
    navSelected: string;
    navNotSelected: string;
    positive: string;
    negative: string;
    neutrality: string;
  }
}
