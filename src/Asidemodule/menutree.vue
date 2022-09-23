<template>
    <div class="menutree">
        <label v-for="menu in data" :key="menu.id">
            <el-submenu :index="menu.id" :route="menu.path" v-if="menu.child">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.name}}</span>
                </template>
                <label>
                    <menutree :data="menu.child"></menutree>
                </label>
            </el-submenu>
            <el-menu-item v-else :index="menu.id" :route="menu.path">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.name}}</span>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
    import menutree from '../Asidemodule/menutree'
    export default {
        name: "menutree",
        data(){
            return{
                menus: {}
            }
        },
        components:{
            menutree:menutree,
        },
        props:["data"],
    }
</script>

<style>
.el-submenu__title,.el-menu-item{
    text-align: left;
}
</style>