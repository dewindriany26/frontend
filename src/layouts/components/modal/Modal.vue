<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <slot />
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
}
</script>

<style>
    .backdrop {
        z-index: 99999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(20, 20, 20, .5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .backdrop .modal {
        background-color: white;
        width: 400px;
        color: #333;
        border-radius: 10px;
        padding: 25px 40px;
    }
</style>
