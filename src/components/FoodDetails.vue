<template>
    <Page>
        <ActionBar title="Food Details" />
        <StackLayout>
            <Label :text="`${foodItem.name}'s Details`" class="title" />
            <Image :src="foodItem.img" />
            <Label class="item" :text="foodItem.name" />
            <Label class="item" :text="foodItem.price" />
            <ListView for="feedback in foodItem.feedbacks">
                <v-template>
                    <StackLayout orientation="horizontal">
                        <Label class="emoji" :text="feedback.emojicon" />
                        <Label class="desc" :text="feedback.desc" />
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        props: ['foodItem'],
        data() {
            return {
                //
            }
        },
    }
</script>

<style lang="scss" scoped>
    .item {
        margin: 10;
        font-size: 40;
        color: brown;
    }
    .title {
        margin: 20;
        font-size: 50;
    }
    Image {
        margin: 10;
    }
    .emoji {
        margin: 10;
        font-size: 40;
    }
    .words {
        margin: 10;
        font-size: 30;
    }
</style>