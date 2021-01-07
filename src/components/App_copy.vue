<template>
    <Page>
        <ActionBar title="First App" />
        <StackLayout orientation="vertical" verticalAlignment="top" horizontalAlignment="center">
            <Label text="testing1" class="class1" />
            <TextField class="class2" v-model="username" />
            <Button text="ADD" class="btn btn-primary" @tap="tappedBtn"/>
            <ListView for="(food, index) in foods" :key="index" @itemTap="foodDetail">
                <v-template>
                    <StackLayout orientation="horizontal">
                        <Label class="item" :text="food.name" />
                        <!-- <Label class="item" :text="food.price" /> -->
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import FoodDetails from './FoodDetails'
    export default {
        data() {
            return {
                username: "",
                foods: this.$store.state.foods
                // foods: [
                //     {id: 1, name: "food1", price:10, feedbacks: [ {emojicon: "😃", desc: "fine"}, {emojicon: "😍", desc: "worthy"}], 
                //     img: '~/assets/images/fd1.jpg'},
                //     {id: 2, name: "food2", price:20, feedbacks: [ {emojicon: "👎", desc: "noo"}, {emojicon: "👍", desc: "yee"}], 
                //     img: '~/assets/images/fd2.jpg'},
                //     {id: 3, name: "food3", price:30, feedbacks: [ {emojicon: "😃", desc: "cheki"}, {emojicon: "😍", desc: "wonda"}], 
                //     img: '~/assets/images/IMG-20201026-WA0017.jpg'},
                // ]
            }
        },
        methods: {
            tappedBtn() {
                this.username = "james"
            },
            foodDetail(event) {
                // alert(event.item.price)
                this.$navigateTo(FoodDetails, {
                    props: {foodItem: event.item}
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .class1 {
        margin: 10;
        color: red;
        border-width: 2;
        height: 40;
    }
    .class2 {
        color: blue;
        font-size: 20;
    }
    .item {
        margin: 10;
        font-size: 40;
        color: brown;
    }
</style>