// 大为-计划执行管理
const dwplanCenter = '/dwplan'

// 生产计划 - 需求管理
export const pageInfoDemand = `${dwplanCenter}/demand/pageInfo`

// 新增生产需求
export const demandAdd = `${dwplanCenter}/demand/add`

// 编辑生产需求
export const demandUpdate = `${dwplanCenter}/demand/edit`

// 生产需求详情接口
export const demandDetailInfo = (id) => `${dwplanCenter}/demand/info/${id}`

// 排查确认
export const demandSchedulingConfirm = `${dwplanCenter}/demand/schedulingConfirm`

// 签收
export const demandSign = `${dwplanCenter}/demand/sign`

// 销售确认交付
export const saleConfirmSubmit = (id) => `${dwplanCenter}/demand/saleConfirmSubmit/${id}`

// 需求完成确认
export const needFinishConfirm = (id) => `${dwplanCenter}/demand/needFinishConfirm/${id}`

// 需求执行跟踪
export const needCarryOutTrack = `${dwplanCenter}/demand/needCarryOutTrack`

// 按产品编码排产确认
export const schedulingConfirmByProduceCode = `${dwplanCenter}/demand/schedulingConfirmByProduceCode`

// 查询U9订单号列表
export const findU9OrderCode = `${dwplanCenter}/demand/findU9OrderCode`

// 指定U9订单号下面得物料信息
export const findOrderMaterial = `${dwplanCenter}/demand/findOrderMaterial`

// 物料需求计划分页查询
export const materialDemandPlanPageInfo = `${dwplanCenter}/materialDemandPlan/pageInfo`

// 排产计划 - 已排产计划分页查询
export const demandSchedulingPage = `${dwplanCenter}/demandScheduling/page`

// 排产计划 - 修改排产计划
export const demandSchedulingUpdate = `${dwplanCenter}/demandScheduling/update`

// 排产计划 - 根据成品查询所用物料
export const materialByProductNum = `${dwplanCenter}/demandSchedulingMaterial/getByProductNum`

// 排产计划 - 批量新增物料确认
export const demandSchedulingMaterialAdd = `${dwplanCenter}/demandSchedulingMaterial/add`

// 排产计划 - 批量提交审批/完成状态
export const demandSchedulingMaterialConfirm = `${dwplanCenter}/demandScheduling/commitConfirm`

// 排产计划 - 导出计划排产列表
export const demandSchedulingMaterialExport = `${dwplanCenter}/demandScheduling/export`

// 排产计划 - 根据排产计划id删除排产计划
export const demandSchedulingMaterialDelete = (id) =>
  `${dwplanCenter}/demandScheduling/delete/${id}`

// 物料需求计划  模糊搜索 生产计划号
export const searchBYPlanNo = `${dwplanCenter}/demandScheduling/searchBYPlanNo`

// 物料需求计划 根据生产计划号，带出来工序，物料信息
export const getProduct = `${dwplanCenter}/demandSchedulingMaterial/getProduct`

// 物料需求计划 批量审批
export const reviewProductDemand = `${dwplanCenter}/materialDemandPlan/review`

// 物料需求计划 提交审批
export const submitProductDemand = `${dwplanCenter}/materialDemandPlan/submit`

// 物料需求计划 查询请求单据类型
export const demandTypeList = `${dwplanCenter}/materialDemandPlan/demandTypeList`

// 物料需求计划 新增物料需求计划
export const materialDemandPlanAdd = `${dwplanCenter}/materialDemandPlan/add`

// 物料需求计划 编辑物料需求计划
export const materialDemandPlanUpdate = `${dwplanCenter}/materialDemandPlan/update`

// 物料需求计划 删除
export const materialDemandPlanDelete = (id) => `${dwplanCenter}/materialDemandPlan/del/${id}`

// 排产计划 - 根据成品编号查询各节点产出产品对应工序和使用设备
export const demandSchedulingByProductNum = `${dwplanCenter}/demandScheduling/getByProductNum`

// 大为-生产执行-生产任务详情
export const productionTaskDetailsById = (id) =>
  `${dwplanCenter}/productionTask/detailsById?id=${id}`

// 大为-生产执行-指示表
export const pageProductionTaskContent = `${dwplanCenter}/productionTaskContent/page`

// 排产计划 - 通过产能计算计划结束时间
export const demandSchedulingCalculate = `${dwplanCenter}/demandScheduling/calculatePlanEndTime`

// 排产计划 - 新增计划排产
export const demandSchedulingAdd = `${dwplanCenter}/demandScheduling/add`

// 需求管理  按产品确认
export const materialInfoById = (id) => `${dwplanCenter}/demand/materialInfo/${id}`

// 需求管理  按订单确认
export const materialInfoByU9Order = `${dwplanCenter}/demand/materialInfoByU9Order`

// 需求管理 排产数量确认
export const schedulingConfirm = `${dwplanCenter}/demand/schedulingConfirm`

// 大为-生产执行-物料需求清单
export const getMaterialRequirementsByTaskId = `${dwplanCenter}/productionPick/getMaterialRequirementsByTaskId`

// 大为-生产执行-领料
export const addBatchPick = `${dwplanCenter}/productionPick/addBatch`

// 大为-生产执行-查看生产领料单
export const pageProductionPick = `${dwplanCenter}/productionPick/pageProductionPick`

// 生产任务 - 分页
export const pageProductionTask = `${dwplanCenter}/productionTask/pageProductionTask`

// 生产任务 - 新增
export const addBatchProductionTask = `${dwplanCenter}/productionTask/addBatch`

// 生产任务 - 编辑
export const updateProductionTask = `${dwplanCenter}/productionTask/update`

// 生产任务 - 删除
export const deleteProductionTask = `${dwplanCenter}/productionTask/delete`

// 生产任务 - 批量发布/取消发布
export const doReleaseBatch = `${dwplanCenter}/productionTask/doReleaseBatch`

// 根据排产计划查询生产线数据
export const getFactoryBySchedulingId = `${dwplanCenter}/demandSchedulingEquipment/getFactoryBySchedulingId`

// 查询工序数据
export const getWorkProcedureList = `${dwplanCenter}/demandSchedulingEquipment/getWorkProcedureList`

// 查询设备数据
export const getEquipmentList = `${dwplanCenter}/demandSchedulingEquipment/getEquipmentList`

// 生产任务指示 - 列表查询
export const productionTaskContentPage = `${dwplanCenter}/productionTaskContent/page`

// 生产任务指示 - 添加
export const productionTaskContentAddBatch = `${dwplanCenter}/productionTaskContent/addBatch`

// 生产任务 - 获取配方数据
export const getStandardRecipeDetailByTaskId = `${dwplanCenter}/standardRecipeDetail/getStandardRecipeDetailByTaskId`

// 生产任务 - 配方数据批量新增
export const standardRecipeDetailAddBatch = `${dwplanCenter}/standardRecipeDetail/addBatch`
// 班次列表查询
export const shiftListPageInfo = `${dwplanCenter}/shift/list`

// 班次明细-列表查询
export const shiftListDetails = `${dwplanCenter}/shift/list-details`

// 班次明细-按班组id查询
export const shiftListDetailsGroup = `${dwplanCenter}/shift/list-details-group`

// 班次-增删改接口
export const shiftModify = `${dwplanCenter}/shift/modify`

// 班次-增删改接口
export const shiftDetailList = `${dwplanCenter}/shift/shiftDetailList`

// 查询所有操作记录
export const operationLogTaskPage = `${dwplanCenter}/operationLogTask/pageInfo`

// 生产任务指示 - 设备参数
export const getByPathId = `${dwplanCenter}/poFacility/getByPathId`

// 生产任务指示 - 品质信息
export const getQualityByPathId = `${dwplanCenter}/quality/getByPathId`

// 查询所有报警记录
export const alarmRecordPage = `${dwplanCenter}/alarmRecord/pageInfo`

// 班组明细列表查询
export const groupList = `${dwplanCenter}/group/list`

// 班组明细 人员列表查询
export const groupListPersons = `${dwplanCenter}/group/list-persons`

// 班组明细 -列表查询
export const groupListItems = `${dwplanCenter}/group/list-items`

// 班组管理 待选人员列表过滤
export const unpickUserByOrgId = `${dwplanCenter}/group/unpickUserByOrgId`

// 班组明细人员 增删改查接口
export const personModify = `${dwplanCenter}/group/person-modify`

// 班组 增删改查
export const groupModify = `${dwplanCenter}/group/group-modify`

// 班组明细 增删改接口
export const groupItemsModify = `${dwplanCenter}/group/items-modify`

// 获得生产执行的基本信息
export const basicProductionInformation = `${dwplanCenter}/productionTask/basicProductionInformation`

// 投料管理 - 待投料列表
export const getProductionPickByTaskId = `${dwplanCenter}/productionPick/getByTaskId`

// 投料管理 - 已投料列表
export const getProductionInputByTaskId = `${dwplanCenter}/ProductionInput/getByTaskId`

// 投料
export const addProductionInput = `${dwplanCenter}/ProductionInput/add`

// 修正投料
export const updateProductionInput = `${dwplanCenter}/ProductionInput/update`

// 退料
export const deleteProductionInput = `${dwplanCenter}/ProductionInput/returnMaterial`

// 生产任务指示 - 模具管理
export const getMouldByPathId = `${dwplanCenter}/mouldInfo/getByPathId`

// 生产任务指示 - 批量上下机
export const upOrDownBatch = `${dwplanCenter}/mouldInfo/upOrDown`

// 根据pathId查询记录信息
export const recordTableByPathId = `${dwplanCenter}/recordTable/getByPathId`

// 生产报工
export const submittedReportWork = `${dwplanCenter}/submittedWork/reportWork`

// 更新任务状态
export const updateTaskStatus = `${dwplanCenter}/productionTask/updateTaskStatus`

// 异常申请
export const abnormalApplication = `${dwplanCenter}/productionTask/abnormalApplication`

// 页查询上下机记录
export const getByMouldInfoId = `${dwplanCenter}/mouldUpDown/getByMouldInfoId`

// 填写工序记录
export const addProjectValues = `${dwplanCenter}/projectValues/add`

// 检查计划状态
export const productionCheckTask = `${dwplanCenter}/productionTask/checkTask`

// 生产任务 - 获取产品信息
export const getProductVoForTask = `${dwplanCenter}/demandSchedulingEquipment/getProductVoForTask`

// 根据物料编号查询物料不同批次的库存信息
export const findMaterialBatchStorageInfo = `${dwplanCenter}/demandSchedulingMaterial/findMaterialBatchStorageInfo`

// 添加班组
export const addGroup = `${dwplanCenter}/group/addGroup`

// 编辑班组
export const editGroup = `${dwplanCenter}/group/editGroup`

// 删除班组
export const delGroup = (id) => `${dwplanCenter}/group/delGroup/${id}`

// 添加或编辑班组明细
export const addOrEditGroupItem = `${dwplanCenter}/group/addOrEditGroupItem`

// 删除班组明细
export const delGroupItem = (id) => `${dwplanCenter}/group/delGroupItem/${id}`

// 生产执行 - 工艺卡
export const getCraftCardByPathId = `${dwplanCenter}/craftCard/getByPathId`

// 班组明细分配人员
export const configUser = `${dwplanCenter}/group/configUser`

// 删除班组明细人员
export const delUser = (id) => `${dwplanCenter}/group/delUser/${id}`

// 排班-列表计算
export const scheduleCalculate = `${dwplanCenter}/schedule/calculate`

// 排班-列表查询
export const scheduleList = `${dwplanCenter}/schedule/list`

// 排班-保存
export const scheduleModify = `${dwplanCenter}/schedule/modify`

// 排班-单条修改
export const scheduleDayModify = `${dwplanCenter}/schedule/day-modify`

// 排班-删除按时间
export const scheduleDelete = (groupId, beginDate, endDate) =>
  `${dwplanCenter}/schedule/delete/${groupId}/${beginDate}/${endDate}`

// 排班-删除按列表
export const scheduleDeleteList = `${dwplanCenter}/schedule/deleteList`

// 原料批次码正像追溯
export const productionTaskforwardTrace = `${dwplanCenter}/productionTask/forwardTrace`

// 成品批次码反向追溯
export const productionTaskTraceReverseInfo = `${dwplanCenter}/productionTask/traceReverseInfo`

// 领料单筛选条件-生产线
export const getListWorkshopByTaskId = `${dwplanCenter}/productionPick/listWorkshopByTaskId`

// 领料单筛选条件-工序
export const getListWorkProcedureByTaskId = `${dwplanCenter}/productionPick/listWorkProcedureByTaskId`

// 根据任务id查询任务列表
export const listProductionTask = `${dwplanCenter}/productionTask/listProductionTask`
