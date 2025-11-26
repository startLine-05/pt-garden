// 获取 base 路径的辅助函数
function getBasePath(): string {
  return (typeof import.meta !== 'undefined' && (import.meta as any).env?.BASE_URL) 
    ? (import.meta as any).env.BASE_URL 
    : '/'
}

// 创建获取图片路径的函数
// 入参：目录路径，如 'products'、'category'、'collection' 等
// 返回：一个函数，该函数接收图片文件名，返回完整的图片路径
export function getImagePath(dir: string) {
  // 返回一个函数，用于拼接指定目录下的图片路径
  return (imageName: string): string => {
    const base = getBasePath()
    // 确保目录路径不以 / 开头，图片路径也不以 / 开头
    const cleanDir = dir.replace(/^\/+|\/+$/g, '')
    const cleanImageName = imageName.replace(/^\/+/, '')
    // 拼接路径：base路径 + /assets/目录名/图片名
    // 确保 base 路径以 / 结尾，且 assets 路径以 / 开头
    const basePath = base.endsWith('/') ? base.slice(0, -1) : base
    return `${basePath}/assets/${cleanDir}/${cleanImageName}`
  }
}

// 获取根目录下图片路径的函数（public 根目录下的文件）
// 返回：一个函数，该函数接收图片文件名，返回完整的图片路径
export function getRootImagePath() {
  return (imageName: string): string => {
    const base = getBasePath()
    const cleanImageName = imageName.replace(/^\/+/, '')
    // 拼接路径：base路径 + /图片名
    const basePath = base.endsWith('/') ? base.slice(0, -1) : base
    return `${basePath}/${cleanImageName}`
  }
}
