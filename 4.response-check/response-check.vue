<template>
    <div>
        <div id="screen">{{message}}</div>
        <div>
            <div>average time:{{  }}</div>
            <button @click="onReset">reset</button> <!-- v-on:을 @로 바꿀 수 있다.-->
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                result:[],
                state:'waiting',
                message : 'click and start.',
            };
        },
        methods:{
            onReset(){

            }
        }
    };
</script>

<style>

</style>