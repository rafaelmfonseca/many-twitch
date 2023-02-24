import { Property } from 'csstype';

export interface OverlapStreamsThemeOptions {
    name: 'overlap-streams';
    streamsOpacity: number;
    streamsWidth: number;
    streamsDirection: Property.FlexDirection;
    streamsAlignment: Property.AlignItems;
    mainStreamMargin: 'none' | 'right' | 'left' | 'top' | 'bottom';
    chatWidth: number;
}

export type ThemeOptions = OverlapStreamsThemeOptions;
export type ThemeOptionsNames = ThemeOptions['name'];
