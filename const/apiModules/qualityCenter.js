// 质量管理api
const qualityCenter = '/quality'

// 分页查询抽检方案
export const getSamplingPlanPage = `${qualityCenter}/samplingPlan/getSamplingPlanPage`

// 添加抽检方案
export const addSamplingPlan = `${qualityCenter}/samplingPlan/addSamplingPlan`

// 修改抽检方案
export const updateSamplingPlan = `${qualityCenter}/samplingPlan/updateSamplingPlan`

// 删除抽检方案
export const delSamplingPlanById = (id) => `${qualityCenter}/samplingPlan/delById/${id}`

// 查询包含批量信息的抽检方案
export const getSamplingPlanForId = (id) => `${qualityCenter}/samplingPlan/get/${id}`

// 根据抽检方案名称查询抽检方案
export const getSamplingPlanByName = `${qualityCenter}/samplingPlan/getSamplingPlanByName`

// 查询客户
export const getUserList = `${qualityCenter}/checkTask/getUserList`

// 添加抽检方案中的单个批量信息
export const addSamplingSpecimen = `${qualityCenter}/samplingSpecimen/addSamplingSpecimen`

// 修改抽检方案中的单个批量信息
export const updateSamplingSpecimen = `${qualityCenter}/samplingSpecimen/updateSamplingSpecimen`

// 删除抽检方案中的单个批量信息
export const delSamplingSpecimen = (id) => `${qualityCenter}/samplingSpecimen/delById/${id}`

// 查询抽检方案中的单个批量信息
export const getSamplingSpecimen = (id) => `${qualityCenter}/samplingSpecimen/get/${id}`

// 分页查询检测方案
export const getCheckPlanPage = `${qualityCenter}/checkPlan/getCheckPlanPage`

// 根据检测方案编号或名称模糊查询检测方案
export const getCheckPlanByKeyword = `${qualityCenter}/checkPlan/getCheckPlan`

// 查询检测方案详情
export const checkPlanById = (id) => `${qualityCenter}/checkPlan/get/${id}`

// 添加检测方案
export const addCheckPlan = `${qualityCenter}/checkPlan/addCheckPlan`

// 更新检测方案
export const updateCheckPlan = `${qualityCenter}/checkPlan/updateCheckPlan`

// 查询检测方案byids
export const checkPlanByIds = `${qualityCenter}/checkPlan/infoByIds`

// 删除 发布 取消发布 检测方案
export const updateCheckPlanStatsu = `${qualityCenter}/checkPlan/updateCheckPlanStatsu`

// 升级检测方案
export const upgradeCheckPlan = `${qualityCenter}/checkPlan/upgradeCheckPlan`

// 复制检测方案
export const copyCheckPlan = `${qualityCenter}/checkPlan/copyCheckPlan`

// 编辑方案时，添加或更新检测方案项目
export const addOrUpdateCheckPlanItem = `${qualityCenter}/checkPlanItem/addOrUpdateCheckPlanItem`
// 编辑方案时，删除检测方案项目byid
export const delCheckPlanItem = (id) => `${qualityCenter}/checkPlanItem/delById/${id}`

// 分页查询抽检项目
export const getCheckItemPage = `${qualityCenter}/checkItem/getCheckItemPage`

// 查询所有检测项目
export const getCheckItemList = `${qualityCenter}/checkItem/getCheckItemList`

// 添加抽检项目
export const addOrUpdateCheckItem = `${qualityCenter}/checkItem/addOrUpdateCheckItem`

// 添加抽检项目
// export const addCheckItemPlan = `${qualityCenter}/checkItem/addCheckItemPlan`

// 修改抽检项目
// export const updateCheckItemPlan = `${qualityCenter}/checkItem/updateCheckItemPlan`

// 查询检测项目byid
export const getCheckItem = (id) => `${qualityCenter}/checkItem/get/${id}`

// 删除抽检项目byid
export const delCheckItem = (id) => `${qualityCenter}/checkItem/delById/${id}`

// 分页查询方案关联产品数据
export const getcheckPlanProductPage = `${qualityCenter}/checkPlanProduct/getcheckPlanProductPage`

// 删除方案关联产品表数据
export const delCheckPlanProduct = (id) => `${qualityCenter}/checkPlanProduct/delById/${id}`

// 分页查询方案关联产品数据
export const addCheckPlanProduct = `${qualityCenter}/checkPlanProduct/addCheckPlanProduct`

// 分页查询模板文件
export const getPrintTemplatePage = `${qualityCenter}/printTemplate/getPrintTemplatePage`

// 添加模板文件
export const addOrUpdatePrintTemplate = `${qualityCenter}/printTemplate/addOrUpdatePrintTemplate`

// 删除模板文件
export const delPrintTemplate = (id) => `${qualityCenter}/printTemplate/delById/${id}`

// 分页查询qa文件
export const getQaDocumentPage = `${qualityCenter}/qaDocument/getQaDocumentPage`

// 添加qa文件
export const addQaDocument = `${qualityCenter}/qaDocument/addQaDocument`

// 修改qa文件
export const updateQaDocument = `${qualityCenter}/qaDocument/updateQaDocument`

// 删除qa文件
export const delQaDocument = (id) => `${qualityCenter}/qaDocument/delById/${id}`

// 添加检测任务
export const addCheckTask = `${qualityCenter}/checkTask/addCheckTask`

// 修改检测任务
export const updateCheckTask = `${qualityCenter}/checkTask/updateCheckTask`

// 审批检测任务
export const reviewCheckTask = `${qualityCenter}/checkTask/reviewCheckTask`

// 分页查询任务列表 质量改判看到的是审批通过的数据 质量异常处理是看到审批通过并不合格的数据 (传递相应参数)
export const getCheckTaskPage = `${qualityCenter}/checkTask/getCheckTaskPage`

// 模糊查询检测任务by任务号
export const getCheckTaskByTaskNumber = `${qualityCenter}/checkTask/getCheckTaskByTaskNumber`

// 查询检测任务byId
export const getCheckTask = (id) => `${qualityCenter}/checkTask/get/${id}`

// 查询检测任务检测结果byId
export const getCheckResultByTaskId = `${qualityCenter}/checkTask/getCheckResultByTaskId`

// 删除检测任务
export const delCheckTaskById = (id) => `${qualityCenter}/checkTask/delById/${id}`

// 保存检测结果
export const saveCheckResult = `${qualityCenter}/checkTask/saveCheckResult`

// 获取批次信息
export const getMaterialList = `${qualityCenter}/material/getMaterialList`

// 质量改判 质量异常处理
export const handleCheckTask = `${qualityCenter}/checkTask/handleCheckTask`

// 留样查询
export const getReservedSamplePage = `${qualityCenter}/reservedSample/getReservedSamplePage`

// 添加修改留样
export const addOrUpdateReservedSample = `${qualityCenter}/reservedSample/addOrUpdateReservedSample`

// 删除留样
export const delReservedSample = (id) => `${qualityCenter}/reservedSample/delById/${id}`

// 留样检查领用记录和检查
export const addReservedSampleRecord = `${qualityCenter}/reservedSampleRecord/addReservedSampleRecord`

// 附件管理 查询
export const getTaskAccessoryList = `${qualityCenter}/taskAccessory/getTaskAccessoryList`

// 附件管理 添加
export const addTaskAccessory = `${qualityCenter}/taskAccessory/addTaskAccessory`

// 删除附件
export const delTaskAccessory = (id) => `${qualityCenter}/taskAccessory/delById/${id}`

// 留样记录 查询
export const getreservedSamplePage = `${qualityCenter}/reservedSampleRecord/getreservedSamplePage`

// 检测任务中新增编辑时-查询产品是否关联了检测方案
export const checkPlanIsExist = `${qualityCenter}/checkPlan/checkPlanIsExist`

// 检测任务打印模板获取
export const getPrintFileById = `${qualityCenter}/checkTask/getPrintFileById`

// 检测任务打印模板获取
export const printByTemplateId = `${qualityCenter}/checkTask/printByTemplateId`

// 批量新增留样
export const addBatchReservedSample = `${qualityCenter}/reservedSample/addBatchReservedSample`
