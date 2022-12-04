const baseCenter = '/base'

// 文件上传返回路径
export const uploadFile = `${baseCenter}/sysFile/uploadFile`

// id下载文件，有token，文档流模式
export const DownLoadFile = `${baseCenter}/sysFile/downloadById`

// id下载文件，无token，文档流模式
export const DownLoadFileNoToken = `${baseCenter}/sysFile/noTokenDownloadById`

// 文件详情，获取浏览器访问路径
export const getViewPath = `${baseCenter}/sysFile/findFileInfo`

// 通过id查看文件信息
export const findFileByIds = `${baseCenter}/sysFile/findFileListByIds`

// 通过id查看文件信息
export const deleteFile = `${baseCenter}/sysFile/deleteFile`
