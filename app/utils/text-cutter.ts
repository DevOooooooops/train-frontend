export const textCutter = (value?: string | null) => ((value || '').length > 40 ? `${(value || '').slice(0, 17)}...` : value);
