import { faker } from "@faker-js/faker/locale/pt_BR";

const FakeData = Array.from({ length: 212 }).map(() => {
  return {
    id: String(faker.number.int({ min: 1000, max: 2000 })),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: String(faker.date.recent({ days: 30 })),
    checkedInAt: String(faker.date.recent({ days: 7 })),
  };
});

export default FakeData;
