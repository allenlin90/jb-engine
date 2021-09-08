<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img
            src="https://source.unsplash.com/1600x900/?nature,water"
            aspect-ratio="1.7"
            max-height="300px"
          ></v-img>
          <v-card-title>Thailand Today</v-card-title>
          <v-card-subtitle>2021/09/30</v-card-subtitle>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            corporis totam id velit sunt ipsa itaque, explicabo tenetur
            obcaecati culpa repellat laborum facilis quaerat asperiores enim,
            neque, ducimus reiciendis nihil quisquam sed veniam. Odio est earum
            ducimus pariatur temporibus modi dolor atque, aliquam accusamus
            quasi eligendi officiis quibusdam nulla quas reiciendis a corporis?
            Omnis dolorum voluptate iste consectetur est, a et, recusandae,
            expedita natus praesentium eaque fuga? Necessitatibus odit ipsum
            voluptate repellendus. Delectus quae enim, eligendi facere adipisci
            non voluptatibus! Vero perferendis quibusdam ipsam soluta dolore,
            provident atque nulla error, quo, expedita fugit. Reiciendis
            accusamus obcaecati facilis! Voluptates officiis veritatis
            aspernatur esse tempore, similique magni ipsa cumque? Excepturi,
            deleniti odio recusandae quidem saepe minus consequatur esse atque
            sequi dolorum tenetur veniam impedit, officiis ducimus quisquam
            asperiores a accusantium quae laudantium, alias aliquid quas quis?
            Non quis sequi autem consequatur ex perferendis nulla odit
            asperiores, enim quidem sit modi tempora quam commodi dolores qui
            reiciendis sed, deleniti inventore illum sunt esse rem? Ab mollitia,
            rem non dolores saepe officiis, alias sequi hic praesentium,
            provident nesciunt ut natus. Optio sint voluptas odio! Ducimus
            excepturi distinctio nihil consectetur praesentium? Distinctio,
            incidunt doloribus dolor perferendis mollitia et voluptatum voluptas
            odio quasi quisquam doloremque, quaerat corrupti nobis ipsam
            blanditiis consectetur nulla impedit, repellendus aperiam. Soluta
            vel culpa ducimus libero nisi! Sint sapiente repellendus, facere
            consequatur nisi odio officiis doloribus nobis eos deleniti magnam
            error quo. Quisquam quas dolorum consectetur quae rem sunt adipisci
            hic suscipit ex illo, ad id, nemo consequatur quasi assumenda veniam
            vero. Atque dolorum libero assumenda illum totam! Quisquam sapiente
            amet consequatur eius sunt quas reprehenderit. Totam eius iure, aut
            quae esse voluptatum repellendus, soluta quibusdam sapiente tenetur
            mollitia nulla. Quo cupiditate ratione maxime quae ipsa fugiat
            libero? Quo ipsum ullam dolorum numquam accusantium nulla autem a,
            assumenda soluta, debitis animi praesentium nobis consequuntur,
            dolores quas unde aspernatur non error minima sed magnam. Quos odit
            corporis, minus qui enim unde eos ullam dolorem possimus impedit
            optio iusto distinctio exercitationem totam eum tempora quia quo,
            aperiam similique amet. Eius iste velit nisi labore itaque a
            corporis magnam harum, dolorum cupiditate incidunt tenetur error
            eaque enim amet molestias esse et pariatur accusantium id quam!
            Unde, quibusdam eius tempora asperiores expedita ratione non
            consequatur fuga, dolores laboriosam illo ea ad pariatur tempore eum
            natus dolore suscipit amet velit. Fugiat maxime repudiandae
            praesentium itaque quasi suscipit, tempora ut omnis obcaecati
            dignissimos reprehenderit blanditiis at nam impedit vero earum
            aliquam temporibus dolorum odit voluptatibus quisquam veniam modi.
            Modi cupiditate sint similique obcaecati recusandae quae!
            Voluptatibus harum, sed saepe perferendis beatae suscipit quam id.
            Voluptas consequatur dignissimos voluptatibus possimus veritatis?
            Eos cupiditate eveniet numquam qui repellat iure odio voluptatum,
            dolore ipsam ipsa illum quidem obcaecati praesentium. Quasi beatae
            ad dignissimos dolorem libero fugit repellendus odit quia et
            excepturi iste quae obcaecati facere numquam, aut consequatur?
            Explicabo labore cupiditate tempora commodi, iure totam praesentium
            reiciendis adipisci consectetur similique et, animi vitae facere quo
            harum aperiam officia architecto hic veniam neque expedita quia id?
            Quae inventore totam qui est consequuntur.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  async beforeCreate() {
    this.$store.dispatch('overlay');
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('overlay');
    }, 3000);
  },
};
</script>
