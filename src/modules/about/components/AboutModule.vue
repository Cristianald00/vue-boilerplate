<template>
    <div class="about">
        
        <br><br><br><br>
        <br><br><br><br>
        
        <SubmitButtonComponent title="Save" customClass="default" />
        
        <br><br>
        
        <SubmitButtonComponent title="Save" customClass="big" />
        
        <br><br>
        
        <DropdownInputComponent title="Save" customClass="big" />
        
    </div>
</template>

<script>
    import DropdownInputComponent from '@/components/common/DropdownInputComponent.vue'
    import SubmitButtonComponent from '@/components/common/SubmitButtonComponent.vue'
    
    export default {
        name: 'App',
        metaInfo() {
            return { }
        },
        components: {
            SubmitButtonComponent,
            DropdownInputComponent,
        },
        computed: {
            appTitle() {
                return this.$store.getters.appTitle
            }
        }
    }
</script>

<style scoped>    
    
</style>
