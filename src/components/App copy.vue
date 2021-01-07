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

        <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center" >
            <TextField hint="Enter username" />
            <TextField hint="Enter password" secure="true" />
            <Button text="Login" backgroundColor="blue" />
        </FlexboxLayout>

        <FlexboxLayout class="page">
            <Stacklayout class="form">
                <Label text="Ecommerce" class="header" />

                <Stacklayout class="input-field">
                    <TextField hint="username" class="input" />
                </Stacklayout>

                <Stacklayout class="input-field">
                    <TextField hint="password" secure="true" class="input" />
                </Stacklayout>

                <Button class="btn btn-primary" text="Login" />

            </Stacklayout>
        </FlexboxLayout>
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
    .page {
        align-items: center;
    }
    .form {
        width: 100%;
        margin-left: 30;
        margin-right: 30;
    }
    .header {
        font-size: 25;
        text-align: center;
        color: red;
        font-weight: 600;
        margin-bottom: 70;
    }
    .input-field {
        margin-bottom: 20;
    }
    .input {
        font-size: 20;
    }
    .btn-primary {
        font-size: 20;
        height: 50;
        background-color: red;
        font-weight: 600;
        color: white;
    }
</style>