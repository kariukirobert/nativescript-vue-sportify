<template>
    <Page>
        <ActionBar title="First App" />
        <StackLayout>
            <Button text="Button" />

            <Label text="First Label written Here" fontSize="50" textWrap="true" textAlignment="center" />
        </StackLayout>

        <AbsoluteLayout>
            <Button text="Button Layout" left="100" top="100"/>
        </AbsoluteLayout>

        <StackLayout orientation="vertical" backgroundColor="orange" height="200" width="200">
            <Label text="first label" />
            <Label text="second label" />
            <Label text="third label" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                //
            }
        },
        methods: {
            //
        },
    }
</script>

<style lang="scss" scoped>
    //
</style>