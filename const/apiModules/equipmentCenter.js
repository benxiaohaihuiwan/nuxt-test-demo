const equipmentCenter = '/equipment'
const systemCenter = '/system'

// 查询模板列表
export const templatList = `${equipmentCenter}/templateSet/pageInfo`

// 备件列表
export const sparePartList = `${equipmentCenter}/repairsInventory/pageInfo`

// 调整库存
export const adjustStock = `${equipmentCenter}/repairsInventory/updateQuantity`

// 备件详情->操作记录
export const spareChangeLog = `${equipmentCenter}/repairsOperationRecord/pageInfo`

// 备件管理列表
export const spareStokList = `${equipmentCenter}/repairs/pageInfo`

// 备件管理列表-备件分类树形结构数据
export const spareTypeList = `${equipmentCenter}/repairsType/treeData`

// 备件管理列表-备件分类新增/编辑
export const spareTypeAdd = `${equipmentCenter}/repairsType/add`

// 备件管理列表-备件分类新增/编辑
export const spareTypeDelete = (id) => `${equipmentCenter}/repairsType/removeById/${id}`

// 备件管理列表-备件分类新增/编辑
export const spareManageListEdit = `${equipmentCenter}/repairs/add`

// 备件管理列表-备件分类新增/编辑
export const spareManageListDlete = (id) => `${equipmentCenter}/repairs/removeById/${id}`

// 备件管理-备件台账列表
export const spareOperationRecord = `${equipmentCenter}/repairsOperationRecord/standingBookPageInfo`

// 备件管理-备件入库-新增入库
export const addNewSpareStok = `${equipmentCenter}/repairsInventory/add`

// 备件管理-备件入库-存放位置获取
export const getLocation = `${equipmentCenter}/customDic/list`

// 备件管理-设备台账-列表数据
export const getParameter = `${equipmentCenter}/equipment_parameter/findPage`

// 备件管理-设备台账-新增或编辑
export const addOrEditParameter = `${equipmentCenter}/equipment_parameter/saveOrUpdate`

// 备件管理-设备台账-删除
export const deleteParameter = (id) => `${equipmentCenter}/equipment_parameter/removeById/${id}`

// 备件管理-设备台账-列表项进入配置详情
export const ParameterDetail = (id) => `${equipmentCenter}/equipment_parameter/info/${id}`

// 备件管理-设备台账-配置备件项
export const repairsConfig = `${equipmentCenter}/equipment_parameter/repairsConfig`

// 备件管理-设备台账-配置备件项
export const repairsfileConfig = `${equipmentCenter}/equipment_parameter/fileConfig`

// 备件管理-模板配置-新增/编辑
export const templateSetSave = `${equipmentCenter}/templateSet/save`

// 备件管理-模板配置-详情
export const templateSetDetail = (id) => `${equipmentCenter}/templateSet/info/${id}`

// 备件管理-模板配置-删除
export const templateSetDelete = (id) => `${equipmentCenter}/templateSet/delete/${id}`

// 查询当前登录人租户下的公司
export const getAccountCompany = `${systemCenter}/sys-org/findCompanyList`

// 查找当前部门及子部门下的所有人员信息
export const getAccountPerson = `${systemCenter}/sysUser/findUserByOrgId`

// 查找所有执行人
export const getDonePerson = `${systemCenter}/sysUser/pageInfo`

// 维保维修模块列表
export const repairList = `${equipmentCenter}/maintenance/findPage`

// 维保维修模块-导出
export const exportExcel = `${equipmentCenter}/maintenance/exportExcel`

// 维保维修模块列表-删除
export const repairListDelete = (id) => `${equipmentCenter}/maintenance/removeById/${id}`

// 维保维修模块列表-详情
export const repairDetail = (id) => `${equipmentCenter}/maintenance/info/${id}`

// 维保维修模块列表-编辑，新增，执行
export const repairEdit = `${equipmentCenter}/maintenance/saveOrUpdate`

// 维保维修模块-根据设备名称或者编号查询设备信息
export const searchQuipment = `${equipmentCenter}/equipment_parameter/getByNameOrCode`

// 点巡检计划，润滑计划列表
export const equipmentPlanList = `${equipmentCenter}/equipmentPlan/pageInfo`

// 点巡检计划，润滑计划禁用、启用
export const equipmentPlanDisable = (id) => `${equipmentCenter}/equipmentPlan/disableById/${id}`

// 点巡检计划，润滑计划删除
export const equipmentPlanDelete = (id) => `${equipmentCenter}/equipmentPlan/deleted/${id}`

// 点巡检计划，润滑计划详情
export const equipmentPlanDetail = (id) => `${equipmentCenter}/equipmentPlan/getInfoById/${id}`

// 下拉选择器模板列表
export const getTempList = `${equipmentCenter}/templateSet/getListByType`

// 下拉选择器模板列表
export const equipmentPlanAdd = `${equipmentCenter}/equipmentPlan/add`

// 点巡检任务，润滑任务列表
export const equipmentTaskList = `${equipmentCenter}/pointInspectionTask/pageInfo`

// 点巡检任务，润滑任务详情
export const pointInspectionTask = (id) => `${equipmentCenter}/pointInspectionTask/getInfo/${id}`

// 点巡检任务，润滑任务执行保存编辑完成
export const pointInspectionTaskDone = `${equipmentCenter}/pointInspectionTask/updateOrExecute`

// 点巡检任务，润滑任务列表日历视图
export const pointInspectionCalendar = `${equipmentCenter}/pointInspectionTask/monthStatistics`

// 备件库存——导入
export const sapreImport = `${equipmentCenter}/repairsInventory/import`

// 设备产能管理 分页查询
export const equipmentCapacityPage = `${equipmentCenter}/equipmentCapacity/page`

// 设备产能管理 新增
export const equipmentCapacityAdd = `${equipmentCenter}/equipmentCapacity/add`

// 设备产能管理 编辑
export const equipmentCapacityUpdate = `${equipmentCenter}/equipmentCapacity/update`
