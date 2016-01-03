/**
 * JARVIS.MVC.URL 组件
 * 
 * @author lijunlin
 */
(function($$, NS) {
	var $$_NS = $$.register(NS);
	
	/**
	 * 首页URL 
	 */
	$$_NS.index;
	/**
	 * 分页查询URL
	 */
	$$_NS.selectPage;
	/**
	 * 分页查询JSON URL
	 */
	$$_NS.selectJSONPage;
	/**
	 * 添加URL
	 */
	$$_NS.add;
	/**
	 * 编辑URL
	 */
	$$_NS.edit;
	/**
	 * 保存URL
	 */
	$$_NS.save;
	/**
	 * 更新状态URL
	 */
	$$_NS.modifyStatus;
	/**
	 * 删除URL
	 */
	$$_NS.del;
	/**
	 * 详细URL
	 */
	$$_NS.view;
	/**
	 * 检索URL
	 */
	$$_NS.search;
	
	/**
	 * 初始化
	 */
	$$.addConstructor(function() {
		$$_NS.index = $$_NS.generateFullUrl("/");
		$$_NS.selectPage = $$_NS.generateFullUrl("/selectPage");
		$$_NS.selectJSONPage = $$_NS.generateFullUrl("/selectJSONPage");
		$$_NS.add = $$_NS.generateFullUrl("/add");
		$$_NS.edit = $$_NS.generateFullUrl("/edit-");
		$$_NS.save = $$_NS.generateFullUrl("/save");
		$$_NS.modifyStatus = $$_NS.generateFullUrl("/modifyStatus");
		$$_NS.del = $$_NS.generateFullUrl("/delete");
		$$_NS.view = $$_NS.generateFullUrl("/view-");
		$$_NS.search = $$_NS.generateFullUrl("/search");
	});
	
	/**    
	 * 生成全路径URL
	 */
	$$_NS.generateFullUrl = function(methodUrl) {
		return $$.MVC.contextPath + $$.MVC.currentUrl + methodUrl;
	};
})(GLOBAL_VAR, "MVC.URL");