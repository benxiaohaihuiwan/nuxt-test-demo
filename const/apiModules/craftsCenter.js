const craftCenter = '/crafts'

// 查询工厂列表
export const factoryList = `${craftCenter}/factory-model/factoryList`

// 新建工厂
export const addFactory = `${craftCenter}/factory-model/addFactory`

// 更新工厂
export const updateFactory = `${craftCenter}/factory-model/updateFactory`

// 删除工厂
export const deleteFactory = (id) => `${craftCenter}/factory-model/del/${id}`

// 工序管理查询
export const processesList = `${craftCenter}/workProcedure/page`

// 新建工序
export const addProcesses = `${craftCenter}/workProcedure/add`

// 更新工序
export const updateProcesses = `${craftCenter}/workProcedure/update`

// 删除工序
export const deleteProcesses = (id) => `${craftCenter}/workProcedure/delete/${id}`

// 检查工序编号是否重复
export const checkProcessesNumber = (number) => `${craftCenter}/workProcedure/check/${number}`

// 工序参数管理查询
export const processesParameList = `${craftCenter}/workProcedureParame/page`

// 新建工序参数
export const addProcessesParame = `${craftCenter}/workProcedureParame/add`

// 更新工序参数
export const updateProcessesParame = `${craftCenter}/workProcedureParame/update`

// 删除工序参数
export const deleteProcessesParame = (id) => `${craftCenter}/workProcedureParame/delete/${id}`

// 检查工序参数编号是否重复
export const checkProcessesParameNumber = (number) =>
  `${craftCenter}/workProcedureParame/check/${number}`

// 根据工序名称模糊查询工序
export const searchBYName = `${craftCenter}/workProcedure/searchBYName`

// 过程段分页查询
export const procedureSegmentPage = `${craftCenter}/procedureSegment/page`

// 新增过程段
export const procedureSegmentAdd = `${craftCenter}/procedureSegment/add`

// 更新过程段
export const procedureSegmentUpdate = `${craftCenter}/procedureSegment/update`

// 复制过程段
export const procedureSegmentCopy = `${craftCenter}/procedureSegment/copy`

// 发布/取消发布过程段
export const procedureSegmentRelease = `${craftCenter}/procedureSegment/release`

// 过程段版本升级
export const procedureSegmentVersionUpdate = `${craftCenter}/procedureSegment/versionUpdate`

// 根据过程段id查询详情
export const procedureSegmentGetById = (id) => `${craftCenter}/procedureSegment/getById/${id}`

// 根据过程段id删除过程段
export const procedureSegmentDeleteById = (id) => `${craftCenter}/procedureSegment/delete/${id}`

// 产品工艺分页查询
export const productProcessPage = `${craftCenter}/productProcess/page`

// 新增产品工艺
export const productProcessAdd = `${craftCenter}/productProcess/add`

// 更新产品工艺
export const productProcessUpdate = `${craftCenter}/productProcess/update`

// 根据产品工艺id查询详情
export const productProcessGetById = (id) => `${craftCenter}/productProcess/getById/${id}`

// 根据产品工艺id删除产品工艺
export const productProcessDeleteById = (id) => `${craftCenter}/productProcess/delete/${id}`

// 根据产品工艺id发布/取消发布产品工艺
export const productProcessReleaseById = (id) => `${craftCenter}/productProcess/release/${id}`

// 产品工艺复制
export const productProcessCopy = `${craftCenter}/productProcess/copy`

// 产品工艺版本升级
export const productProcessVersionUpdate = `${craftCenter}/productProcess/versionUpdate`

// 根据ids获取过程段下生产线工序详情
export const procedureSegmentGetByIds = `${craftCenter}/procedureSegment/getByIds`

// 生产线工序分页查询
export const workProcedureLinePage = `${craftCenter}/workProcedureLine/page`

// 生产线工序新增
export const workProcedureLineAdd = `${craftCenter}/workProcedureLine/add`

// 删除生产线工序
export const deleteWorkProcedureLine = (id) => `${craftCenter}/workProcedureLine/delete/${id}`

// 设备标签名称模糊查询设备标签
export const equipmentSearchBYName = `${craftCenter}/equipmentLabel/searchBYName`

// 根据工序参数名称模糊查询工序参数
export const workProcedureParameSearchBYName = `${craftCenter}/workProcedureParame/searchBYName`

// 修改设备标签
export const equipmentLabelUpdate = `${craftCenter}/equipmentLabel/update`

// 新增设备标签
export const equipmentLabelAdd = `${craftCenter}/equipmentLabel/add`

// 设备标签分页查询
export const equipmentLabelPage = `${craftCenter}/equipmentLabel/page`

// 删除设备标签
export const deleteEquipmentLabel = (id) => `${craftCenter}/equipmentLabel/delete/${id}`

// 查看工序记录表
export const workProcedureLineRecordPage = `${craftCenter}/workProcedureLineRecord/page`

// 修改工序记录表
export const workProcedureLineRecordUpdate = `${craftCenter}/workProcedureLineRecord/update`

// 新增工序记录表
export const workProcedureLineRecordAdd = `${craftCenter}/workProcedureLineRecord/add`

// 查看工序记录详情
export const workProcedureLineRecordView = (id) => `${craftCenter}/workProcedureLineRecord/${id}`

// 删除工序记录
export const workProcedureLineRecordDelete = (id) =>
  `${craftCenter}/workProcedureLineRecord/delete/${id}`

// 检查工序记录表编号是否重复
export const checkWorkProcedureLineRecord = (number) =>
  `${craftCenter}/workProcedureLineRecord/check/${number}`

// 制造清单分页查询
export const manufactureListPage = `${craftCenter}/manufacture-list/pageInfo`

// 制造清单新增
export const manufactureListAdd = `${craftCenter}/manufactureListProduct/addListAndProduce`

// 制造清单编辑
export const manufactureListUpdate = `${craftCenter}/manufactureListProduct/updateListProduce`

// 制造清单详情
export const manufactureListDetail = (id) => `${craftCenter}/manufacture-list/get/${id}`

// 制造清单删除
export const manufactureListDelete = (id) => `${craftCenter}/manufacture-list/del/${id}`

// 制造清单发布
export const manufactureListRelease = `${craftCenter}/manufacture-list/releaseOperate`

// 制造清单复制
export const manufactureListCopy = `${craftCenter}/manufacture-list/copyList`

// 制造清单升级
export const manufactureListUpgrade = `${craftCenter}/manufacture-list/upgrade`

// 制造清单物料表
export const manufactureProductList = `${craftCenter}/manufactureListProduct/list`

// 产出投入物料表分页查询
export const productPageInfo = `${craftCenter}/product/pageInfo`

// 新增路径节点参数信息
export const segmentInformationAdd = `${craftCenter}/segmentInformation/add`

// 修改路径节点参数信息
export const segmentInformationUpdate = `${craftCenter}/segmentInformation/update`

// 根据路径id查询路径节点参数信息
export const segmentInformationByPathId = `${craftCenter}/segmentInformation/getByPathId`

// 根据路径id查询工艺/设备参数列表
export const craftEquipmentListByPathId = `${craftCenter}/craftEquipmentLabelPath/listByPathId`

// 新增路径工艺/设备参数
export const craftEquipmentLabelPathAdd = `${craftCenter}/craftEquipmentLabelPath/add`

// 修改工艺/设备参数
export const craftEquipmentLabelPathUpdate = `${craftCenter}/craftEquipmentLabelPath/update`

// 根据工序id删除工艺/设备参数
export const craftEquipmentLabelPathDelete = (id) =>
  `${craftCenter}/craftEquipmentLabelPath/delete/${id}`

// 产线关联设备分页
export const factoryEquipmentPage = `${craftCenter}/factoryEquipment/page`

// 新增产线关联设备
export const factoryEquipmentAdd = `${craftCenter}/factoryEquipment/add`

// 修改产线关联设备
export const factoryEquipmentUpdate = `${craftCenter}/factoryEquipment/update`

// 根据产线关联设备id删除产线关联设备
export const factoryEquipmentDelete = (id) => `${craftCenter}/factoryEquipment/delete/${id}`

// 根据名称，编码查询产线
export const workProcedureLineList = `${craftCenter}/workProcedureLine/lineList`

// 查询工厂列表, 只查询已启用的
export const factoryModelFindfactory = `${craftCenter}/factory-model/findfactory`

// 根据生产线id模糊查询设备
export const factoryEquipmentSearchBYName = `${craftCenter}/factoryEquipment/searchBYName`

// 通过生产路径节点id查询模具信息
export const mouldManageListByPathId = `${craftCenter}/mould-manage/findMould/pathId`

// 通过生产路径节点id添加模具信息
export const mouldManageAddByPathId = `${craftCenter}/mould-manage/add`

// 通过生产路径节点id更新模具信息
export const mouldManageUpdateByPathId = `${craftCenter}/mould-manage/update`

// 通过生产路径节点id删除模具信息
export const mouldManageDelByPathId = (id) => `${craftCenter}/mould-manage/del/${id}`

// 根据名称，编码查询模具列表
export const mouldListByKeyword = `${craftCenter}/mould/mouldList`

// 根据路径id查询路径品质参数
export const qualityParameListByPathId = `${craftCenter}/qualityParame/listByPathId`

// 新增路经路径品质参数
export const qualityParameAdd = `${craftCenter}/qualityParame/add`

// 修改路经路径品质参数
export const qualityParameUpdate = `${craftCenter}/qualityParame/update`

// 根据路经工序记录id删除路经品质参数
export const qualityParameDelete = (id) => `${craftCenter}/qualityParame/delete/${id}`

// 根据路径id查询路经工序记录
export const workProcedureRecordByPathId = `${craftCenter}/workProcedurePathRecord/listByPathId`

// 根据工序记录表名称模糊查询工序记录
export const workProcedureRecordSearchBYName = `${craftCenter}/workProcedureLineRecord/searchBYName`

// 标准配方管理分页查询
export const standardRecipePage = `${craftCenter}/standardRecipe/page`

// 检查配方编号唯一性
export const standardRecipeCheckNumber = (number) => `${craftCenter}/standardRecipe/check/${number}`

// 根据产品工艺名称/编号模糊查询产品工艺
export const productProcessSearchBYName = `${craftCenter}/productProcess/searchBYName`

// 根据产品工艺id查询其关联所有路径
export const byProductProcessId = (productProcessId) =>
  `${craftCenter}/productProcessPath/byProductProcessId/${productProcessId}`
// 新增路经工序记录
export const workProcedurePathRecordAdd = `${craftCenter}/workProcedurePathRecord/add`

// 修改路经工序记录
export const workProcedurePathRecordUpdate = `${craftCenter}/workProcedurePathRecord/update`

// 根据路经工序记录id删除路经工序记录
export const workProcedurePathRecordDelete = (id) =>
  `${craftCenter}/workProcedurePathRecord/delete/${id}`

// 根据路径id查询路径工艺卡管理
export const craftCardByPathId = `${craftCenter}/craftCard/listByPathId`

// 新增路经路径工艺卡管理
export const craftCardAdd = `${craftCenter}/craftCard/add`

// 修改路经路径工艺卡管理
export const craftCardUpdate = `${craftCenter}/craftCard/update`

// 根据路经工序记录id删除路径工艺卡管理
export const craftCardDelete = (id) => `${craftCenter}/craftCard/delete/${id}`

// 通过路径id查询打印标签列表
export const labelPrintByPath = `${craftCenter}/label-print/labelByPath`

// 根据产品类型下名称/编号/规格模糊查询产品，名称，编号，规格三选一传参
export const productSearchBYName = `${craftCenter}/product/searchBYName`

// 标准配方新增
export const standardRecipeAdd = `${craftCenter}/standardRecipe/add`

// 标准配方编辑
export const standardRecipeUpdate = `${craftCenter}/standardRecipe/update`

// 标准配方详情(带配方明细)
export const getStandardRecipeById = (id) => `${craftCenter}/standardRecipe/getById/${id}`

// 删除标准配方
export const delStandardRecipeById = (id) => `${craftCenter}/standardRecipe/delete/${id}`

// 标准配方版本升级
export const standardRecipeVersionUpdate = `${craftCenter}/standardRecipe/versionUpdate`

// 标准配方版本复制
export const standardRecipeCopy = `${craftCenter}/standardRecipe/copy`

// 标准配方版本发布
export const releaseStandardRecipeById = `${craftCenter}/standardRecipe/release`

// 通过路径id添加打印模板
export const labelPrintAdd = `${craftCenter}/label-print/add`

// 通过路径id编辑打印模板
export const labelPrintEdit = `${craftCenter}/label-print/edit`

// 添加模板
export const labelMouldAdd = `${craftCenter}/label-mould/add`

// 通过模板名称或编号搜索标签模板列表
export const labelMouldLabelList = `${craftCenter}/label-mould/labelList`

// 根据路径id查询资源清单
export const resourceDetailByPath = `${craftCenter}/resourceDetail/listByPathId`

// 新增资源清单
export const resourceDetailAdd = `${craftCenter}/resourceDetail/add`

// 修改资源清单
export const resourceDetailUpdate = `${craftCenter}/resourceDetail/update`

// 删除资源清单
export const resourceDetailDelete = (id) => `${craftCenter}/resourceDetail/delete/${id}`

// 物料特性基础表
export const productFeaturesBaseFeaturesAll = `${craftCenter}/productFeaturesBase/features/all`

// 通过ID更新产品(物料)信息
export const productUpdate = `${craftCenter}/product/update`

// 新增单个产品(物料)信息
export const productAdd = `${craftCenter}/product/add`

// 新增物料特性
export const productUpdateFeatures = `${craftCenter}/product/update/features`

// 删除物料信息
export const productDel = (id) => `${craftCenter}/product/del/${id}`

// 通过物料编码查询清单中最顶级物料信息
export const getTopProduct = `${craftCenter}/manufactureListProduct/getTopProduct`

// 物料 - 产品BOM结构
// export const produceBomSearch = `${craftCenter}/produce-bom/search/boms`

// 新增单个产品(物料)信息
export const productProductList = `${craftCenter}/product/productList`

// 打印文件
export const printByLabelId = `${craftCenter}/label-print/printByLabelId`

// 查询当前物料的所有子物料列表
export const getProductBomByCode = `${craftCenter}/manufactureListProduct/getProductBomByCode`
