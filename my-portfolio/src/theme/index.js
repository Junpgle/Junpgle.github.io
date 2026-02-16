import { themeVariants } from './variants';

// ★★★在这里手动修改主题★★★
// 可选值: 'default' | 'newYear' | 'spring' | 'winter'
export const currentThemeName = 'newYear';

export const getTheme = () => {
    return themeVariants[currentThemeName] || themeVariants.default;
};