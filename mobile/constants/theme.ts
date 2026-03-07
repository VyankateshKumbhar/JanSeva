import { Platform } from 'react-native';

const janSevaOrange = '#E05D3D'; // The primary brand color
const janSevaOrangeLight = '#FEE2E2';

export const Colors = {
  light: {
    text: '#11181C',
    textSecondary: '#6B7280',
    background: '#F9FAFB', // Light gray background from the image
    tint: janSevaOrange,
    icon: '#687076',
    tabIconDefault: '#9CA3AF',
    tabIconSelected: janSevaOrange,
    // Custom Brand Colors
    brand: janSevaOrange,
    brandLight: janSevaOrangeLight,
    success: '#10B981',
    warning: '#F59E0B',
    info: '#2563EB',
    cardBorder: '#E5E7EB',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
    brand: janSevaOrange,
    brandLight: '#311b1b',
  },
};

export const Fonts = Platform.select({
  ios: { sans: 'system-ui', serif: 'ui-serif', rounded: 'ui-rounded', mono: 'ui-monospace' },
  default: { sans: 'normal', serif: 'serif', rounded: 'normal', mono: 'monospace' },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});