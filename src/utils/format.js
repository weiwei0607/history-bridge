// 統一的年份格式化，支援西元前（負數）與空值
export function yearLabel(year) {
  if (year == null) return '?';
  if (year < 0) return `西元前 ${Math.abs(year)} 年`;
  return `西元 ${year} 年`;
}

// 簡短格式，用於年份標籤（如：前221年 / 221年）
export function yearShort(year) {
  if (year == null) return '?';
  if (year < 0) return `前${Math.abs(year)}年`;
  return `${year}年`;
}
