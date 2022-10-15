const faker = require('faker');
const fs = require('fs');

// Set locale to use Vietnamese
faker.locale = 'vi';

const randomOrder = (n) => {
  if (n <= 0) return [];

  const order = [];

  // loop and push category
  Array.from(new Array(n)).forEach(() => {
    const od = {
      id: faker.random.uuid(),
      room_id: Math.floor(Math.random() * 12),
      customer: faker.name.firstName(),
      customer_id: faker.random.number(),
      sale: faker.name.firstName(),
      in_expected: faker.date.between('2022-06-24T00:00:00.000Z', '2022-06-29T00:00:00.000Z'),
      out_expected: faker.date.between('2022-07-02T00:00:00.000Z', '2022-07-10T00:00:00.000Z'),
      type: '100000',
      discount: `${Math.floor(Math.random() * 20)}%`,
      phone_customer: faker.phone.phoneNumber(),
      in_reality: faker.date.between('2022-06-27T00:00:00.000Z', '2022-06-30T00:00:00.000Z'),
      out_reality: faker.date.between('2022-07-02T00:00:00.000Z', '2022-07-15T00:00:00.000Z'),
      type_booking: 'Online',
      total_price: '250000000',
      additional_price: [
        {
          info: 'coca',
          price: '10000',
        },
        {
          info: 'bread',
          price: '20000',
        },
      ],
      createdAt: Date.now(),
    };

    order.push(od);
  });

  return order;
};

// const randomProductList = (order, numberOfProducts) => {
//   if (numberOfProducts <= 0) return [];

//   const productList = [];

//   // random data
//   for (const category of order) {
//     Array.from(new Array(numberOfProducts)).forEach(() => {
//       const product = {
//         categoryId: category.id,
//         id: faker.random.uuid(),
//         name: faker.commerce.productName(),
//         color: faker.commerce.color(),
//         price: Number.parseFloat(faker.commerce.price()),
//         description: faker.commerce.productDescription(),
//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//         thumbnailUrl: faker.image.imageUrl(400, 400),
//       };

//       productList.push(product);
//     });
//   }

//   return productList;
// };

// IFFE
(() => {
  // random data
  const order = randomOrder(16);
  // const productList = randomProductList(order, 5);

  // prepare db object
  const db = {
    order: order,
  
  };

  // write db object to db.json
  fs.writeFile('order.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))');
  });
})();
