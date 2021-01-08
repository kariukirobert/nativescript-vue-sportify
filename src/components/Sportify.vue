<template>
    <Page androidStatusBarBackground="red" @loaded="blackBar" >
        <ActionBar title="Sportify App" />

        <GridLayout rows="80, 400, *" >
            <Image id="img" row="1" src="~/assets/images/fd1.jpg" marginTop="-180" />

            <ScrollView row="2" marginTop="-500" @scroll="onScroll">
                <GridLayout rows="500, *">
                    <Label row="0" class="fade" />
                    <Label row="0" text="Tools" textTransform="uppercase" class="title" marginTop="250" />
                    <Label row="0" text="8,785,569 MONTHLY LISTENERS" class="subtitles" marginTop="330" />

                    <Label row="1" :text="content" textWrap="true" marginLeft="30" marginRight="20" fontSize="15" />
                </GridLayout>
            </ScrollView>

            <label row="0" id="blackBar" class="black-bar" marginTop="700" />
            <Button row="0" id="btnPlay" class="btn-play" text="SHUFFLE PLAY" marginTop="770" />
            
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                title: "Sportify App Title",
                content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit, voluptatem doloribus sapiente et officia animi ipsam quo itaque rerum sit in nulla nihil tempora quos quis illum totam non eos debitis ab molestiae! Reiciendis quasi, numquam et eligendi, ut praesentium facere non, quidem delectus minima mollitia eos facilis sit alias ex quas magnam doloribus nostrum. Dignissimos numquam adipisci sequi, enim ullam ea rem quidem? Ullam doloremque repellat minus cupiditate corrupti neque autem, animi quas aperiam delectus sint obcaecati officia, vel impedit quibusdam laudantium velit aut dignissimos tempore similique, blanditiis iure. Deleniti libero iste labore deserunt accusantium! In mollitia ipsa quo, sapiente doloremque tempora sequi recusandae ea exercitationem sunt temporibus ab, ipsum impedit rem tenetur provident assumenda atque praesentium aliquid perspiciatis dolores laborum hic necessitatibus. Maxime sunt blanditiis quam eos optio aut delectus officia ipsam laboriosam animi! Magnam autem animi nisi maxime voluptatibus sunt provident quod obcaecati. Aperiam, dicta dolore illum repudiandae ex tenetur eveniet dolorum delectus culpa nostrum fuga voluptatibus, eos earum nemo recusandae esse quis maxime facilis odit commodi eligendi vero. Necessitatibus temporibus deserunt praesentium nesciunt cupiditate alias in illo libero accusantium explicabo ex nostrum dolore impedit possimus aliquam ab, recusandae dolorem aliquid. Veritatis dolor voluptates nihil ea est aliquam asperiores eos non molestias facilis accusamus, commodi voluptatem autem, culpa, animi laboriosam dolorem facere aut excepturi enim perspiciatis! Officiis hic dicta, itaque nam enim molestiae esse quisquam, sit voluptatem fugit labore beatae eaque suscipit, autem ad omnis quo cum blanditiis dolorum laborum nemo optio assumenda? Dicta, aspernatur quisquam. Sint saepe laudantium voluptate amet ratione, placeat ea ducimus. Tenetur quasi accusantium laboriosam nemo doloribus excepturi quia sapiente tempora dolor expedita inventore labore, repudiandae aliquam deleniti perferendis cupiditate exercitationem mollitia alias eaque temporibus doloremque rerum placeat assumenda esse. Placeat sunt, magnam laudantium molestias natus accusantium doloremque reiciendis eligendi ullam perspiciatis assumenda tempore asperiores voluptates dolore deserunt iste delectus, commodi fugiat exercitationem! Voluptate, quod error consequatur eius ratione dolores deserunt nostrum, quo quasi consequuntur, magni tenetur optio placeat accusamus voluptatibus totam! Voluptates quis dignissimos distinctio? Eius dolorem accusamus quasi inventore mollitia. Culpa consectetur consequatur amet, nulla necessitatibus sit laborum. Incidunt unde reprehenderit repudiandae et quod! Temporibus reprehenderit odit dolor dolorum ab quas ad totam, aspernatur expedita natus fugiat praesentium nam pariatur iure minus laudantium dicta. Veritatis neque ipsam inventore illum voluptatum sint dolor, fuga similique ducimus, numquam consectetur modi beatae error! Eligendi commodi excepturi libero molestiae expedita necessitatibus totam iste vel consequuntur officia ea, harum aliquid asperiores nulla repellendus tenetur dolores quod fugiat voluptates quaerat aliquam inventore. Nemo, nesciunt velit perferendis consequuntur quo repellat. Deleniti quas non nihil ducimus voluptas tempora sit velit ipsum corporis quisquam quibusdam tempore, autem quidem voluptates. Repudiandae officiis, ut dolores nisi recusandae iure? Perferendis quaerat laudantium doloremque officiis ut fuga esse veniam velit quae excepturi atque eius obcaecati ea numquam ullam tempora magnam illum ratione, voluptatem blanditiis. Iure quia atque aperiam voluptatibus quam incidunt adipisci repudiandae porro fugit sint accusantium voluptate, fuga recusandae ab aspernatur doloribus nihil eligendi! Vel ullam accusantium hic incidunt reiciendis maxime qui accusamus obcaecati veritatis odio iste repellat tenetur debitis perspiciatis soluta porro ipsa eaque adipisci fugit, temporibus dolorem? Dolores eaque magnam neque, voluptatum perferendis accusamus cupiditate praesentium impedit, doloribus fugit dolore aliquid eos architecto qui quibusdam quod quidem inventore fugiat repellendus totam, pariatur vel doloremque. In nisi necessitatibus a mollitia eaque ipsum eveniet commodi eius cumque corporis modi sequi dolores minus fuga itaque distinctio excepturi tempora libero, exercitationem reiciendis! Quo accusantium, quis repellendus nulla libero vero illo qui tempora sunt minima quas id maxime explicabo voluptates perferendis consequatur necessitatibus accusamus? Molestias ex praesentium harum. Illum placeat repudiandae officia inventore dolor eveniet odit ullam accusantium. Maiores reiciendis cumque repellat illo itaque, fugiat labore quas assumenda consectetur similique maxime, sed iusto laborum voluptatem laudantium nesciunt atque accusantium minus eum quidem voluptas. Ratione, quis! Et quod in iure, similique dolore quae atque aperiam nobis quia veritatis a, ipsam blanditiis officia assumenda ducimus fugit qui eaque recusandae sapiente earum harum illo id libero! Dolorum voluptatibus ullam placeat dolores, magnam porro debitis! Quod repellat illo doloribus nam, officia vitae facere beatae! Velit, possimus nemo similique distinctio ducimus eum atque a amet sunt culpa vel sequi magnam tenetur in. Reiciendis ut fugit eos dolor inventore possimus delectus accusantium, enim commodi eum iure sapiente. Incidunt temporibus, doloremque eum veniam distinctio fugit voluptas rem nam, necessitatibus earum provident eos, vero ipsa quod velit aspernatur eveniet? Voluptate laudantium facere unde, tenetur, vel nihil quos ipsum delectus consequatur magni cupiditate explicabo earum omnis, incidunt eveniet molestias a quae. Nostrum iure maiores in! Quae iusto illo natus provident dolor laudantium architecto repellat aspernatur at laborum ea quasi in sequi tempora ullam numquam, libero nihil non cum atque veniam ipsa repudiandae. Ipsa accusamus quam excepturi, asperiores mollitia beatae laboriosam rem minima minus quos maxime consequuntur illo repellat dolores, officiis architecto ex sit repudiandae blanditiis modi voluptates voluptatibus! Vitae ratione beatae, corrupti provident voluptates architecto. Rerum tenetur maxime error necessitatibus, maiores temporibus assumenda odio atque eveniet, libero consectetur neque quasi sit quia illo laudantium quidem reiciendis vitae facilis. Necessitatibus, molestias! Tempora nam saepe, doloremque alias quo dicta ipsum voluptate labore sit ut nisi. Mollitia aperiam debitis maxime! Ratione minima quibusdam aliquid provident saepe architecto asperiores quasi aspernatur? Assumenda exercitationem impedit vel beatae ut error adipisci amet! In sequi, cum officia necessitatibus corrupti sint architecto praesentium. Debitis omnis illum ab recusandae reiciendis laudantium error ullam perferendis, ipsam ducimus harum suscipit atque sapiente cupiditate similique minima velit vel ea neque optio molestias cumque. Amet magnam laboriosam a eligendi sequi vel assumenda itaque? Veritatis doloremque unde ab, earum magnam dolores incidunt id aperiam autem minima. Ab, nihil quae impedit suscipit nemo sit quaerat sunt recusandae hic vero minima fugit facilis a quibusdam itaque molestias voluptatibus, vel non dolor tempore! A sequi, quaerat dignissimos dolores aut suscipit quo quia officiis ducimus at? In, iure? Maxime in facilis eligendi voluptatibus eveniet eos! Deleniti, esse omnis dolores nesciunt natus blanditiis excepturi corporis repellat. Tempore inventore accusantium, corrupti ipsa repellendus consequatur labore in ratione hic eum, provident iusto delectus ut recusandae?"
            }
        },
        methods: {
            blackBar(args) {
                const page = args.object.page;
                const blackbar = page.getViewById('blackBar')
                blackbar.opacity = 0
            },
            onScroll(args) {
                const page = args.object.page;
                const image = page.getViewById('img');
                const btnplay = page.getViewById('btnPlay')
                const blackbar = page.getViewById('blackBar')

                if(args.scrollY > 0) {
                    image.translateY = -1 * args.scrollY;

                    if(args.scrollY < 370) {
                        blackbar.translateY = -1 * args.scrollY;
                        btnplay.translateY = -1 * args.scrollY;

                        const opacity = this.scaleFormula(args.scrollY, 200, 480, 0, 1)
                        blackbar.opacity = opacity
                    } else {
                        blackbar.translateY = -370;
                        btnplay.translateY = -370;
                        blackbar.opacity = 1
                    }
                } else {
                    image.translateY = 0;
                }
            },
            scaleFormula(current, totalMin, totalMax, scaledMin, scaledMax) {
                return (scaledMax - scaledMin) * (current - totalMin) / (totalMax - totalMin) + scaledMin;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .title {
        font-size: 60;
        font-weight: 800;
        color: #FF0000;
        text-align: center;
    }
    .subtitles {
        font-size: 12;
        color: #FF0000;
        text-align: center;
    }
    .fade {
        background: linear-gradient(to top, #000000, transparent);
        width: 100%;
        height: 300;
    }
    .black-bar {
        background: #000000;
        width: 100%;
        height: 400;
    }
    .btn-play {
        width: 200;
        height: 50;
        border-radius: 25;
        background: #1aba54;
        color: #ffffff;
        font-weight: bold;
    }
</style>