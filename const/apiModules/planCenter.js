// eslint-disable-next-line no-unused-vars
const planCenter = '/plan'

// 生产需求管理列表
export const processesList = `${planCenter}/demand/pageInfo`

// 编辑生产需求管理
export const demandEdit = `${planCenter}/demand/edit`

// 编辑生产需求管理
export const demandExport = `${planCenter}/demand/export`

// 生产计划管理未排产列表
export const pageInfoNo = `${planCenter}/demandScheduling/pageInfoNo`

// 生产计划管理已排产列表
export const pageInfoYes = `${planCenter}/demandScheduling/pageInfoYes`

// 生产计划管理已排产列表
export const lookPlanDemand = (id) => `${planCenter}/demandScheduling/lookPlanDemand/${id}`

// 保存数据查看详情
export const getSaveInfo = (id) => `${planCenter}/demandScheduling/getSaveInfo/${id}`

// 排产数据
export const saveScheduling = `${planCenter}/demandScheduling/save`

// 生产计划管理已排产列表删除
export const deleteById = (id) => `${planCenter}/demandScheduling/deleteById/${id}`

// 排产成品确认
export const findList = (id) => `${planCenter}/demandNetQuantity/getInfo/${id}`

// 排产成品确认提交
export const saveInfo = `${planCenter}/demandNetQuantity/saveInfo`

// 发布
export const releaseScheduling = `${planCenter}/demandScheduling/release`
// export const releaseScheduling = (id) =>
//   `${planCenter}/demandScheduling/release/${id}`

// 查看物料信息
export const findListMaterial = (id) => `${planCenter}/demandSchedulingMaterial/findList/${id}`

// 排产成品确认提交
export const saveMaterial = `${planCenter}/demandSchedulingMaterial/save`

// 锁定/解锁
export const lockScheduling = (id) => `${planCenter}/demandScheduling/lock/${id}`

// 排产成品确认提交
export const pageInfoCapacity = `${planCenter}/equipmentCapacity/pageInfo`

// 生产任务管理
export const pageInfoRelease = `${planCenter}/demandTask/pageInfoRelease`

// 生产任务任务
export const findListTask = `${planCenter}/demandTask/findListTask`

// 生产任务任务
export const taskOrderDay = `${planCenter}/demandTask/taskOrderDay`

// 生产任务任务保存
export const demandTaskSave = `${planCenter}/demandTask/save`

// 生产甘特图数据
export const findListChart = `${planCenter}/demandSchedulingWorkshop/findListChart`

// 生产甘特图数据
export const findListTaskTrack = `${planCenter}/demandTask/findListTaskTrack`

// 生产计划管理已排产列表
export const taskTrackDemand = `${planCenter}/demand/taskTrack`
