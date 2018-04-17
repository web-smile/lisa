<template>
    <!-- 左侧导航 -->
	<div class="sidebar-wrapper">
		<el-menu default-active="/home/index" class="el-menu-vertical-demo">
			<el-menu-item  index="/home/index" :class="{'isActive': active}">
                活动发布
                <router-link to="/home/index"></router-link>
            </el-menu-item>
			<el-menu-item index="/about/index" :class="{'isActive': !active}">
                活动管理
            </el-menu-item>
		</el-menu>
	</div>
</template>

<script>
    export default {
      name: 'Sidebar',
      data(){
          return{
              active:'true'
          }
      }
    }
</script>
