// 生产执行api
const planExecCenter = '/plan'

// 生产任务列表
export const assignmentPageInfo = `${planExecCenter}/assignment/pageInfo`

// 超100%不良率列表
export const pageInfoRejects = `${planExecCenter}/assignment/pageInfoRejects`

// 生产执行任务列表单个查询
export const getTaskInfoById = (id) => `${planExecCenter}/assignment/get/info/${id}`

// 生产执行任务详情-基本信息
export const getTaskInfo = (id) => `${planExecCenter}/assignment/get/task/info/${id}`

// 生产执行任务详情-设备信息
export const getTaskFacility = (id) => `${planExecCenter}/assignment/get/task/facility/${id}`

// 生产执行任务详情-模具信息
export const getTaskMould = (id) => `${planExecCenter}/assignment/get/task/mould/${id}`

// 生产执行任务详情-品质信息
export const getTaskQuality = (id) => `${planExecCenter}/assignment/get/task/quality/${id}`

// 生产执行任务详情-原料管理
export const materialDto = `${planExecCenter}/assignment/pageInfo/materialDto`

// 生产执行任务详情-工艺卡管理
export const getTaskCrafts = `${planExecCenter}/assignment/get/task/crafts`

// 生产执行任务详情-PQC检验任务推送检测结果
export const updateQualityStatus = `${planExecCenter}/assignment/update/quality/status`

// 生产执行任务详情-开始
export const assignmentStart = `${planExecCenter}/assignment/start`

// 生产执行任务详情-结束与异常结束
export const assignmentFinish = `${planExecCenter}/assignment/finish`

// 生产执行任务详情-订单类型
export const orderType = `${planExecCenter}/assignment/orderType`

// 物料列表
export const materialConfigPageInfo = `${planExecCenter}/materialConfig/pageInfo`

// 物料新增
// export const materialConfigAdd = `${planExecCenter}/materialConfig/add`

// 物料编辑
// export const materialConfigUpdate = `${planExecCenter}/materialConfig/update`

// 物料删除
export const materialConfigDelete = (id) => `${planExecCenter}/materialConfig/delete/${id}`

// 模具列表
export const mouldConfigPageInfo = `${planExecCenter}/mouldConfig/pageInfo`

// 模具新增
export const mouldConfigAdd = `${planExecCenter}/mouldConfig/add`

// 模具编辑
export const mouldConfigUpdate = `${planExecCenter}/mouldConfig/update`

// 模具删除
export const mouldConfigDelete = (id) => `${planExecCenter}/mouldConfig/delete/${id}`

// 追溯

// 基本信息
export const retrospectBaseInfo = (planNo) =>
  `${planExecCenter}/assignment/retrospect/base/info/${planNo}`

// 原料信息
export const retrospectBaseMaterialInfo = (planNo) =>
  `${planExecCenter}/assignment/retrospect/base/material/list/${planNo}`

// 原料信息
export const retrospectBaseEquipmentList = (planNo) =>
  `${planExecCenter}/assignment/retrospect/base/equipment/list/${planNo}`

// 产品批次追溯-模具信息
export const retrospectBaseMouldInfo = (planNo) =>
  `${planExecCenter}/assignment/retrospect/base/mouldInfo/list/${planNo}`

// 产品批次追溯-品质信息
export const retrospectBaseQuality = (planNo) =>
  `${planExecCenter}/assignment/retrospect/base/quality/list/${planNo}`

// 产品批次追溯-工艺卡管理
export const retrospectGetCrafts = (planNo) =>
  `${planExecCenter}/assignment/retrospect/get/crafts/${planNo}`

// 产品批次追溯-质量信息
export const retrospectGetCheckTask = (planNo) =>
  `${planExecCenter}/assignment/retrospect/get/check/task/list/${planNo}`
