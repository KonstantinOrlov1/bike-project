const normalizedBikeType = [
  {
    id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    type: "Алюминий",
    bikes: [
      "d75f762a-eadd-49be-8918-ed0daa8dd024",
      "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
      "bd129641-c0eb-432b-84b6-8b81d2930358",
      "25402233-0095-49ea-9939-1e67ed89ffb9",
      "90902233-0095-49ea-9939-1e67ed89ffb9",
      "08c9ffa0-d003-4310-9e15-20978743296e",
      "64a4967c-2080-4a99-9074-4655a4569a95",
      "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
    ],
    price: 90,
    description:
      "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
    hour: true,
    day: false,
  },
  {
    id: "bb8afbec-2fec-491f-93e9-7f13950dd80b",
    type: "Карбон",
    bikes: [
      "6c02c2ce-b868-4191-b4a7-8686429f4bac",
      "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
      "99ew6fbb-e57y-4b7e-ooc2-23b63jkg3856",
      "1eew79bb-y63y-4b7e-o8uw-23b63jkg3q21",
      "5ttw90bb-uu6y-4b7e-kl1w-23b8htkg3ue9",
    ],
    price: 180,
    description: "Клевый карбоновый вел, 1 недостаток - цена!",
    hour: true,
    day: true,
  },
  {
    id: "982bfbce-c5e0-41a0-9f99-d5c20ecee49d",
    type: "Горный/городской",
    bikes: [
      "8jsw90bb-n75y-4b7e-ou9w-23b97tkg3oue",
      "8jswuw2b-ik1y-nm73-o43w-9qq97tkg3mde",
      "7ewwuw2b-921y-nme1-o4m1-n6v97yee3lo3",
      "2emcdw2b-m62y-cde4-o6mg-ttv97yee3ii9",
    ],
    price: 90,
    description:
      "Лучший вариант для загородней прогулки. Кататься по асфальту будет тяжеловато",
    hour: true,
    day: true,
  },
  {
    id: "d9241927-09e1-44f3-8986-a76346869037",
    type: "Городской эконом",
    bikes: [
      "88hcdw2b-d7sy-gu43-557g-cdv07yee3hw3",
      "kkdcdw2b-mxsy-gef3-557g-cdv07yeecnr2",
      "921cdw2b-y66y-69f3-581g-swe07mmec33",
    ],
    price: 45,
    description: "Зато дешево!",
    hour: false,
    day: true,
  },
];

const normalizedBikes = [
  {
    id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
    model: "Городской велосипед Schwinn Traveler - 1",
    price: 90,
    status: "free",
  },
  {
    id: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
    model: "Городской велосипед Schwinn Traveler - 2",
    price: 90,
    status: "busy",
  },
  {
    id: "bd129641-c0eb-432b-84b6-8b81d2930358",
    model: "Городской велосипед Schwinn Traveler - 3",
    price: 180,
    status: "free",
  },
  {
    id: "25402233-0095-49ea-9939-1e67ed89ffb9",
    model: "Городской велосипед Schwinn Traveler - 4",
    price: 120,
    status: "free",
  },
  {
    id: "90902233-0095-49ea-9939-1e67ed89ffb9",
    model: "Городской велосипед Schwinn Traveler - 5",
    price: 90,
    status: "busy",
  },
  {
    id: "08c9ffa0-d003-4310-9e15-20978743296e",
    model: "Городской велосипед Schwinn Traveler - 6",
    price: 120,
    status: "busy",
  },
  {
    id: "64a4967c-2080-4a99-9074-4655a4569a95",
    model: "Городской велосипед Schwinn Traveler - 7",
    price: 160,
    status: "free",
  },
  {
    id: "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
    model: "Городской велосипед Schwinn Traveler - 8",
    price: 120,
    status: "free",
  },
  {
    id: "6c02c2ce-b868-4191-b4a7-8686429f4bac",
    model: "Карбоновый велосипед CANNONDALE - 1",
    price: 180,
    status: "free",
  },
  {
    id: "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
    model: "Карбоновый велосипед CANNONDALE - 2",
    price: 220,
    status: "free",
  },
  {
    id: "99ew6fbb-e57y-4b7e-ooc2-23b63jkg3856",
    model: "Карбоновый велосипед CANNONDALE - 3",
    price: 180,
    status: "busy",
  },
  {
    id: "1eew79bb-y63y-4b7e-o8uw-23b63jkg3q21",
    model: "Карбоновый велосипед CANNONDALE - 4",
    price: 200,
    status: "free",
  },
  {
    id: "5ttw90bb-uu6y-4b7e-kl1w-23b8htkg3ue9",
    model: "Карбоновый велосипед CANNONDALE - 5",
    price: 200,
    status: "busy",
  },
  {
    id: "8jsw90bb-n75y-4b7e-ou9w-23b97tkg3oue",
    model: "Горный велосипед SCOTT - 1",
    price: 90,
    status: "free",
  },
  {
    id: "8jswuw2b-ik1y-nm73-o43w-9qq97tkg3mde",
    model: "Горный велосипед SCOTT - 2",
    price: 120,
    status: "busy",
  },
  {
    id: "7ewwuw2b-921y-nme1-o4m1-n6v97yee3lo3",
    model: "Горный велосипед SCOTT - 3",
    price: 100,
    status: "busy",
  },
  {
    id: "2emcdw2b-m62y-cde4-o6mg-ttv97yee3ii9",
    model: "Горный велосипед SCOTT - 4",
    price: 120,
    status: "free",
  },
  {
    id: "88hcdw2b-d7sy-gu43-557g-cdv07yee3hw3",
    model: "Эконом велосипед MERIDA - 1",
    price: 45,
    status: "free",
  },
  {
    id: "kkdcdw2b-mxsy-gef3-557g-cdv07yeecnr2",
    model: "Эконом велосипед MERIDA - 2",
    price: 45,
    status: "free",
  },
  {
    id: "921cdw2b-y66y-69f3-581g-swe07mmec33",
    model: "Эконом велосипед MERIDA - 3",
    price: 50,
    status: "busy",
  },
];

const normalizedReviews = [
  {
    id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
    userName: "Kostya",
    text: "Отличный прокат",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: "429dea85-11dd-4054-a31e-c60c92e17255",
    userName: "Ksenia",
    text: "Все понравилось, но долгая доставка",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: "53b642d7-5e86-4717-a466-0640a1dee076",
    userName: "Oleg",
    text: "Высокие цены, а в остальном ОК",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: "c27ab88e-375c-4e98-aa94-8a180150a797",
    userName: "Danil",
    text: "Очень крутые ребята, сервис на высоте. Теперь только к ним",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
    userName: "Evgeny",
    text: "Мне не зашло",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: "13b642d7-5e86-4717-a466-0640a1dee076",
    userName: "Vika",
    text: "Все понравилось, но долгая доставка",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    id: "5db6247b-ab1c-49db-be1f-8dd27fd38b81",
    userName: "Anna",
    text: "Высокие цены, а в остальном ОК",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    id: "381b0c31-6360-43ff-80d1-581a116159d8",
    userName: "Pasha",
    text: "Отличный прокат",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
];

module.exports = {
  bikeType: normalizedBikeType,
  bikes: normalizedBikes,
  reviews: normalizedReviews,
};
