import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const restaurant = await prisma.restaurants.findFirst();
  let rest: any;
  if (!restaurant) {
     rest = await prisma.restaurants.create({
      data: {
        name: "Pizza Planet",
        password: "123456",
      },
    });
  }
  console.log(rest);
  let categories = await prisma.categories.findFirst();
  if (!categories) {
    const categorias = await prisma.categories.createMany({
      data: [
        {
          name: "Pizzas",
          imageUrl:
            "https://media.discordapp.net/attachments/1045156401351249980/1068620102955696209/IMG-20230127-WA0011.jpg",
          restaurantId: rest.id,
        },
        {
          name: "Lanches",
          imageUrl:
            "https://media.discordapp.net/attachments/1068625823613067355/1069053979243315242/princBurguer.jpg",
          restaurantId: rest.id,
        },
        {
          name: "Bebidas",
          imageUrl:
            "https://media.discordapp.net/attachments/1068625823613067355/1069053979759226890/princBebidas.jpg",
          restaurantId: rest.id,
        },
        {
          name: "Doces",
          imageUrl:
            "https://media.discordapp.net/attachments/1068625823613067355/1069227305949462528/PrincDoces.jpg",
          restaurantId: rest.id,
        },
      ],
    });
    console.log({categorias});
  }

  let products = await prisma.product.findFirst();
  if (!products) {
    const products = await prisma.product.createMany({
      data: [
        {
          name: "Coxinha de frango com catupiry 300g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg",
          description: null,
          price: 700,
          categoriesId: 2,
        },
        {
          name: "Coxinha de queijo com presunto 300g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg",
          description: null,
          price: 700,
          categoriesId: 2,
        },
        {
          name: "Coxinha de camarão 300g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg",
          description: null,
          price: 700,
          categoriesId: 2,
        },
        {
          name: "Coxinha de frango 300g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069017275010666647/images_20.jpg",
          description: null,
          price: 700,
          categoriesId: 2,
        },
        {
          name: "Coxinha de carne 300g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069016811040948244/images_18.jpg",
          description: null,
          price: 700,
          categoriesId: 2,
        },
        {
          name: "Hot dog plus 300g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069017640368082964/images_21.jpg",
          description: "Recheado com salsicha, molho, batata e palha",
          price: 1000,
          categoriesId: 2,
        },
        {
          name: "Hot dog plus 500g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069017640368082964/images_21.jpg",
          description: "Recheado com salsicha, molho, batata e palha",
          price: 1200,
          categoriesId: 2,
        },
        {
          name: "Lasanha de carne (300g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069018102123208744/images_22.jpg",
          description: "Recheada com carne moída, queijo, presunto e molho",
          price: 1000,
          categoriesId: 2,
        },
        {
          name: "Lasanha de frango (300g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069018407040725042/images_23.jpg",
          description: "Recheada com carne moída, queijo, presunto e molho",
          price: 1000,
          categoriesId: 2,
        },
        {
          name: "Lasanha de frango (500g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069018407040725042/images_23.jpg",
          description: "Recheada com carne moída, queijo, presunto e molho",
          price: 1300,
          categoriesId: 2,
        },
        {
          name: "Hambúrguer X (400g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069018817885372426/images_24.jpg",
          description:
            "Contém pão brioche, carne 60g, alface, tomate, batata frita e cebola ",
          price: 2500,
          categoriesId: 2,
        },
        {
          name: "Hambúrguer duplo de carne 400g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069018984709628058/images_25.jpg",
          description:
            "Contém pão artesanal, duas carnes de 60g, queijo, cebola, pepino e cheddar",
          price: 3000,
          categoriesId: 2,
        },
        {
          name: "X Tudo 400g",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069019233826119802/images_26.jpg",
          description:
            "Contém pão brioche, duas carnes 60g, bacon, queijo, tomate e alface",
          price: 3000,
          categoriesId: 2,
        },
        {
          name: "Torta de chocolate (250g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069019525074391111/images_27.jpg",
          description: null,
          price: 1000,
          categoriesId: 4,
        },
        {
          name: "Torta de morango (250g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069019845007523972/images_28.jpg",
          description: null,
          price: 1000,
          categoriesId: 4,
        },
        {
          name: "Pudim de leite (250g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069020257714442270/images_29.jpg",
          description: null,
          price: 900,
          categoriesId: 4,
        },
        {
          name: "Beijinho de coco (100g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069020975582171227/images_31.jpg",
          description: null,
          price: 200,
          categoriesId: 4,
        },
        {
          name: "Beijinho de coco (40g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069020975582171227/images_31.jpg",
          description: null,
          price: 100,
          categoriesId: 4,
        },
        {
          name: "Brigadeiro tradicional (100g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069020486903803944/images_30.jpg",
          description: null,
          price: 100,
          categoriesId: 4,
        },
        {
          name: "Brigadeiro tradicional (180)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069020486903803944/images_30.jpg",
          description: null,
          price: 200,
          categoriesId: 4,
        },
        {
          name: "Brigadeiro tradicional (250g)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069020486903803944/images_30.jpg",
          description: null,
          price: 300,
          categoriesId: 4,
        },
        {
          name: "Vinho tinto suave Pérgola (750 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069012531349291098/images_8.jpg",
          description: null,
          price: 2700,
          categoriesId: 3,
        },
        {
          name: "Vinho italiano Chianti (750 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013171383324684/vinho_5.jpg",
          description: null,
          price: 2900,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de laranja (1L)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg",
          description: null,
          price: 1500,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de muruci (1L)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg",
          description: null,
          price: 1500,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de morango (1L)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg",
          description: null,
          price: 2000,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de goiaba (1L)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg",
          description: null,
          price: 1800,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de goiaba (500 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg",
          description: null,
          price: 950,
          categoriesId: 3,
        },
        {
          name: "Copo de suco de goiaba (300 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013816974778468/images_7.jpg",
          description: null,
          price: 500,
          categoriesId: 3,
        },
        {
          name: "Copo de suco de maracujá (300 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069014547278594048/images_10.jpg",
          description: null,
          price: 500,
          categoriesId: 3,
        },
        {
          name: "Copo de suco de cajú (300 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069015002679357480/images_11.jpg",
          description: null,
          price: 500,
          categoriesId: 3,
        },
        {
          name: "Coca cola em lata (350 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069015244468400288/images_12.jpg",
          description: null,
          price: 500,
          categoriesId: 3,
        },
        {
          name: "Fanta laranja em lata (350 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069015837568147547/images_14.jpg",
          description: null,
          price: 500,
          categoriesId: 3,
        },
        {
          name: "Fanta uva em lata (350 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069016032867524628/images_15.jpg",
          description: null,
          price: 500,
          categoriesId: 3,
        },
        {
          name: "Pizza mista média",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069035710381826109/images_34.jpg",
          description:
            "Recheada com queijo, presunto, calabresa, manjericão, tomate e azeitona",
          price: 4000,
          categoriesId: 1,
        },
        {
          name: "Pizza mista família",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069035710381826109/images_34.jpg",
          description:
            "Recheada com queijo, presunto, calabresa, manjericão, tomate e azeitona",
          price: 5500,
          categoriesId: 1,
        },
        {
          name: "Pizza mista grande",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069035710381826109/images_34.jpg",
          description:
            "Recheada com queijo, presunto, calabresa, manjericão, tomate e azeitona",
          price: 4700,
          categoriesId: 1,
        },
        {
          name: "Pizza de calabresa média",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069035809023459378/images_33.jpg",
          description: "Recheada com queijo, presunto, calabresa e azeitona",
          price: 4200,
          categoriesId: 1,
        },
        {
          name: "Pizza de calabresa - família",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069035809023459378/images_33.jpg",
          description: "Recheada com queijo, presunto, calabresa e azeitona",
          price: 5700,
          categoriesId: 1,
        },
        {
          name: "Pizza de quatro queijos - família",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069036245818290237/images_35.jpg",
          description:
            "Recheado com mussarela, cheddar, povolone, parmesão, molho, orégano e manjericão",
          price: 5700,
          categoriesId: 1,
        },
        {
          name: "Pizza de quatro queijos - média",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069036245818290237/images_35.jpg",
          description:
            "Recheado com mussarela, cheddar, povolone, parmesão, molho, orégano e manjericão",
          price: 4200,
          categoriesId: 1,
        },
        {
          name: "Pizza de salame - média",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069037169785700393/images_36.jpg",
          description: "Recheada com salame, queijo, presunto e molho",
          price: 4000,
          categoriesId: 1,
        },
        {
          name: "Pizza de salame - grande",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069037169785700393/images_36.jpg",
          description: "Recheada com salame, queijo, presunto e molho",
          price: 5000,
          categoriesId: 1,
        },
        {
          name: "Pizza de salame - família",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069037169785700393/images_36.jpg",
          description: "Recheada com salame, queijo, presunto e molho",
          price: 6300,
          categoriesId: 1,
        },
        {
          name: "Jarra de suco de laranja (500 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg",
          description: null,
          price: 750,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de muruci (500 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg",
          description: null,
          price: 750,
          categoriesId: 3,
        },
        {
          name: "Jarra de suco de morango (500 ml)",
          imgUrl:
            "https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg",
          description: null,
          price: 1000,
          categoriesId: 3,
        },
      ],
    });
    console.log({ products });
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
