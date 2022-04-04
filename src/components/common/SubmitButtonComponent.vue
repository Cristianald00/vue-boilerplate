<template>
    <button type="button" name="button" :class="className">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'SubmitButton',
    props: {
        // color: String,
        // buttonText: String,
        // text: Boolean
        title: String,
        customClass: {
            default: 'default',
            type: String,
        }
    },
    data() {
        return {
            className: "submit-button" + " " + this.customClass,
        }
    },
    computed: {
        disabledButton() {
            return this.$store.state.loading.showLoading
        },
        colorString() {
            return this.color ? this.color : 'secondary'
        }
    },
    watch: {
    }
}
</script>

<style scoped="">
    .submit-button{
        border-radius: 6px;
        background: var(--colorMainGreen);
        color: #fff;
        font: normal normal bold 15px/26px Montserrat;
        letter-spacing: 0px;
    }
    
    .default{
        width: 110px;
        height: 37px;
    }
    .big{
        width: 460px;
        height: 56px;
    }
</style>
