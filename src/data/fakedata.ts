import { faker } from "@faker-js/faker/locale/pt_BR";

const FakeData = Array.from({ length: 207 }).map(() => {
  return {
    id: faker.number.int({ min: 1000, max: 2000 }),
    nome: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    inscricaoData: faker.date.recent({ days: 30 }),
    checkinData: faker.date.recent({ days: 7 }),
  };
});

export default FakeData;
