<template>
    <div class="menutree">
        <label v-for="menu in data" :key="menu.index">
            <el-submenu :index="menu.path" :route="menu.path" v-if="menu.child">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.name}}</span>
                </template>
                <label>
                    <menutree :data="menu.child"></menutree>
                </label>
            </el-submenu>
            <el-menu-item v-else :index="menu.path" :route="menu.path">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.name}}</span>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
    import menutree from './menutreeone'
    export default {
        name: "menutree",
        data(){
            return{
                menu_data: {}
            }
        },
        components:{
            menutree:menutree,
        },
        props:["data"],
    }
</script>

<style>
</style>