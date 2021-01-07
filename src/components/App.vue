<template>
    <Page>
        <ActionBar title="First App" />
        
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