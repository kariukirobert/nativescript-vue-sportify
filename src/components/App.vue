<template>
    <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <GridLayout rows="auto,auto">
            <StackLayout row="0">
                <Label class="bold" :text="city" />
                <Label class="bold" :text="summary" />

                <Image class="weather-image" :src="image" />

                <GridLayout class="weather-box" columns="1*,1*" rows="auto">
                    <Label col="0" row="0" class="large" :text="currentTemperature" />
                    <StackLayout col="1" row="0">
                        <Label class="bold small" :text="details" />
                        <StackLayout class="hr-light tight"></StackLayout>
                        <Label class="small" :text="humidity" />
                        <Label class="small" :text="windSpeed" />
                        <Label class="small" :text="visibility" />
                    </StackLayout>
                </GridLayout>
            </StackLayout>

            <StackLayout row="1">
                <Label :text="day" />
                <Label :text="time" />
            </StackLayout>
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