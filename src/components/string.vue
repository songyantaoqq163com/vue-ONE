<template>
    <el-form-item :label="label">
        <el-select v-model="valuelist" :placeholder="label" style="width: 100px;">
            <el-option
                    v-for="item in lines"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
            ></el-option>
        </el-select>
    </el-form-item>
</template>

<script>
    export default {
        name: "Processperiod",
        data(){
            return{
                valuelist: "PRINT",
                queryVo: {
                },
                lines: [
                    {
                        value: "CLEAN"
                    },
                    {
                        value: "CVD"
                    },
                    {
                        value: "PVD"
                    },
                    {
                        value: "PRINT"
                    }
                ],
            }
        },
        props: {
            label: {
                type: String,
                default: '请选择工艺段'
            },
            errorMessages: String,
            required: Boolean,
            rules: Array,
            value: String,
        },
        watch: {
            valuelist(val) {
                const v = val == "" ? null : String(val);
                if (v != this.value) {
                    this.$emit('input', v);
                }
            },
            value(val) {
                if (val !== this.valuelist) {
                    this.valuelist = val;
                }
            }
        },
        created() {
            this.$nextTick(() => {
                this.$emit('ready', this.lines);
            });
        }
    }
</script>

<style scoped>

</style>