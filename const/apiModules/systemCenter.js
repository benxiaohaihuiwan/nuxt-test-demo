const systemCenter = '/system'

// 通过用户id查询用户信息
export const findUserById = (id) => `${systemCenter}/sysUser/get/${id}`

// 角色列表
export const sysRolePageInfo = `${systemCenter}/sys-role/pageInfo`

// 创建角色
export const sysRoleAdd = `${systemCenter}/sys-role/add`

// 更新角色
export const sysRoleUpdate = `${systemCenter}/sys-role/update`

// 删除角色
export const sysRoleDelete = (id) => `${systemCenter}/sys-role/del/${id}`

// 给角色设置菜单
export const setRoleApp = `${systemCenter}/role-app/setRoleApp`

// 查询角色下的菜单数据
export const roleAppList = `${systemCenter}/role-app/roleAppList`

// 查询当前登录人的菜单
export const roleAppUserApp = `${systemCenter}/role-app/userApp`

// 菜单资源列表
export const sysAppList = `${systemCenter}/sys-app/appList`

// 菜单资源添加
export const sysAppAdd = `${systemCenter}/sys-app/add`

// 菜单资源更新
export const sysAppUpdate = `${systemCenter}/sys-app/update`

// 菜单资源更新
export const sysAppDelete = (id) => `${systemCenter}/sys-app/del/${id}`

// 获取当前租户下的菜单list
export const tenantAppDetail = `${systemCenter}/tenant-app/tenantAppDetail`

// 租户列表获取
export const sysTenantList = `${systemCenter}/sysTenant/list`

// 租户分页
export const sysTenantPageInfo = `${systemCenter}/sysTenant/pageInfo`

// 创建租户
export const sysTenantAdd = `${systemCenter}/sysTenant/add`

// 更新租户
export const sysTenantUpdate = `${systemCenter}/sysTenant/modify`

// 删除租户
export const sysTenantDelete = `${systemCenter}/sysTenant/deleteById`

// 租户分页
export const sysUserPageInfo = `${systemCenter}/sysUser/pageInfo`

// 查询租户下资源列表
export const tenantAppList = `${systemCenter}/tenant-app/tenantApp`

// 给租户分配资源
export const setTenantApp = `${systemCenter}/tenant-app/setTenantApp`

// 创建用户
export const sysUserAdd = `${systemCenter}/sysUser/addUser`

// 更新用户
export const sysUserUpdate = `${systemCenter}/sysUser/updateUser`

// 删除用户
export const sysUserDelete = (id) => `${systemCenter}/sysUser/delById/${id}`

// 组织机构管理
export const orgTree = `${systemCenter}/sys-org/orgTree`

// 添加组织机构管理
export const addOrg = `${systemCenter}/sys-org/addOrg`

// 编辑组织机构管理
export const updateOrg = `${systemCenter}/sys-org/updateOrg`

// 组织机构管理删除
export const orgManageDelete = (id) => `${systemCenter}/sys-org/del/${id}`

// 获取部门树
export const sysOrgTree = `${systemCenter}/sys-org/orgTree`

// 岗位管理列表查看
export const postList = `${systemCenter}/tenant-post/postList`

// 岗位管理新增
export const addPost = `${systemCenter}/tenant-post/addPost`

// 岗位管理编辑
export const updatePost = `${systemCenter}/tenant-post/updatePost`

// 岗位管理删除
export const postDelete = (id) => `${systemCenter}/tenant-post/del/${id}`

// 查询租户下的所有可用角色
export const sysRolesByTenantId = `${systemCenter}/sys-role/rolesByTenantId`

// 用户获取已选择岗位
export const userTenantPostInfos = `${systemCenter}/tenant-post/postInfos`

// 初始化通过字典树获取模型，传固定值factory_model
export const getDictByParentCode = `${systemCenter}/sys-tenant-dict/getDictByParentCode`

// 字典管理列表
export const sysGetDicts = `${systemCenter}/sys-tenant-dict/getDicts`

// 租户字典新增
export const sysDictsAdd = `${systemCenter}/sys-tenant-dict/add`

// 租户字典更新
export const sysDictsModify = `${systemCenter}/sys-tenant-dict/modify`

// 租户字典删除
export const sysDictsDelete = `${systemCenter}/sys-tenant-dict/deleteById`

// 重置密码
export const repossessPassword = `${systemCenter}/sysUser/repossessPassword`

// 部门管理
export const orgPageInfo = `${systemCenter}/sys-org/pageInfo`

// 设置工厂
export const setFactory = `${systemCenter}/sys-org/setFactory`

// 客户列表
export const customerList = `${systemCenter}/sys-customer/customerList`
