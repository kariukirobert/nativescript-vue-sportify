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

        <FlexboxLayout flexDirection="row" flexWrap="wrap" justifyContent="center" backgroundColor="red" height="500">
            <Label text="First Child" width="100" height="100" color="white" backgroundColor="blue" />
            <Label text="Second Child" width="100" height="100" color="white" backgroundColor="purple" />
            <Label text="Third Child" width="100" height="100" color="white" backgroundColor="orange" />
            <Label text="Fourth Child" width="100" height="100" color="white" backgroundColor="green" />
            <Label text="Fifth Child" width="100" height="100" color="white" backgroundColor="black" />
        </FlexboxLayout>

        <GridLayout rows="100, 100, 200" columns="10,*,10" backgroundColor="red" >
            <Label text="First Child" col="1" row="0" backgroundColor="orange" />
            <Label text="Second Child" col="1" row="1" backgroundColor="purple" />
            <Label text="Third Child" col="1" row="2" backgroundColor="green" />
        </GridLayout>
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