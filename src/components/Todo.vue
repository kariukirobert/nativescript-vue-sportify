<template>
    <Page>
        <ActionBar class="header">
            <Label class="title">todo app</Label>
        </ActionBar>
        <StackLayout>
            <FlexboxLayout class="input-fields">
                <TextField hint="New Task" class="input" v-model="newTask" />
                <Button class="button" text="Submit" @tap="addTask()" />
            </FlexboxLayout>

            <ListView class="items" for="(todo, index) in todos" :key="index">
                <v-template>
                    <FlexboxLayout>
                        <StackLayout @tap="toggleDone(todo.id)">
                            <Label class="item done" :text="todo.title" v-if="todo.done" />
                            <Label class="item" :text="todo.title" v-else />
                        </StackLayout>

                        <Button class="remove" text="Remove" @tap="removeTask(todo.id)" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                newTask: "",
                todos: [
                    {
                        id: 1,
                        title: "Go shopping",
                        done: false,
                    },
                    {
                        id: 2,
                        title: "Go haircut",
                        done: false,
                    }
                ]
            }
        },
        methods: {
            addTask() {
                this.todos.push({
                    id: this.todos.length + 1,
                    title: this.newTask,
                    done: false,
                });

                this.newTask = '';
            },
            toggleDone(id) {
                this.todos = this.todos.map(todo => {
                    if (todo.id === id) todo.done = !todo.done;
                    return todo;
                })
            },
            removeTask(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        background-color: #171717;
        height: 60;
        .title {
            font-size: 28;
            color: #F3F3F3;
            font-weight: 900;
            text-transform: uppercase;
        }
    }
    .input-fields {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        .input {
            flex: 1;
            height: 45;
            background-color: #f3f3f3;
            font-size: 18;
            color: #888888;
        }
        .button {
            width: 100;
            height: 45;
            background-color: #FFCE00;
        }
    }
    .item {
        font-size: 18;
        &.done {
            color: #FF0000;
        }
    }
</style>