import { themeVariants } from './variants';

// ★★★在这里手动修改主题★★★
// 可选值: 'cyberLight' | 'cyberDark' | 'newYear' | 'autumn' | 'winter'
// 注意：'default' 已经被删除了，请不要填 'default'
export const currentThemeName = 'winter';

export const getTheme = () => {
    // 尝试获取当前设置的主题
    const selectedTheme = themeVariants[currentThemeName];

    // 如果找不到（比如填错名字了），就默认使用 cyberLight (日间科技)
    // 之前这里是 themeVariants.default，现在改成 themeVariants.cyberLight
    return selectedTheme || themeVariants.cyberLight;
};