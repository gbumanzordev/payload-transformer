export const nestedPascalObject = {
  data: {
    cars: [
      {
        brand: 'Seat',
        models: [
          'Alhambra',
          'Altea',
          'Altea XL',
          'Arosa',
          'Cordoba',
          'Cordoba Vario',
          'Exeo',
          'Ibiza',
          'Ibiza ST',
          'Exeo ST',
          'Leon',
          'Leon ST',
          'Inca',
          'Mii',
          'Toledo',
        ],
      },
      {
        brand: 'Renault',
        models: [
          'Captur',
          'Clio',
          'Clio Grandtour',
          'Espace',
          'Express',
          'Fluence',
          'Grand Espace',
          'Grand Modus',
          'Grand Scenic',
          'Kadjar',
          'Kangoo',
          'Kangoo Express',
          'Koleos',
          'Laguna',
          'Laguna Grandtour',
          'Latitude',
          'Mascott',
          'Mégane',
          'Mégane CC',
          'Mégane Combi',
          'Mégane Grandtour',
          'Mégane Coupé',
          'Mégane Scénic',
          'Scénic',
          'Talisman',
          'Talisman Grandtour',
          'Thalia',
          'Twingo',
          'Wind',
          'Zoé',
        ],
      },
    ],
  },
};

export const convertedPascalCase = {
  Data: {
    Cars: [
      {
        Brand: 'Seat',
        Models: [
          'Alhambra',
          'Altea',
          'Altea XL',
          'Arosa',
          'Cordoba',
          'Cordoba Vario',
          'Exeo',
          'Ibiza',
          'Ibiza ST',
          'Exeo ST',
          'Leon',
          'Leon ST',
          'Inca',
          'Mii',
          'Toledo',
        ],
      },
      {
        Brand: 'Renault',
        Models: [
          'Captur',
          'Clio',
          'Clio Grandtour',
          'Espace',
          'Express',
          'Fluence',
          'Grand Espace',
          'Grand Modus',
          'Grand Scenic',
          'Kadjar',
          'Kangoo',
          'Kangoo Express',
          'Koleos',
          'Laguna',
          'Laguna Grandtour',
          'Latitude',
          'Mascott',
          'Mégane',
          'Mégane CC',
          'Mégane Combi',
          'Mégane Grandtour',
          'Mégane Coupé',
          'Mégane Scénic',
          'Scénic',
          'Talisman',
          'Talisman Grandtour',
          'Thalia',
          'Twingo',
          'Wind',
          'Zoé',
        ],
      },
    ],
  },
};

export const createCamelCaseObject = (level: number = 1): object => {
  if (level < 1) {
    return {
      firstName: 'name',
      lastName: 'lastname',
      nullProp: null,
      undefinedProp: undefined,
      emptyData: {},
      emptyList: [],
      friendList: [
        { friendName: 'name', friendAge: 22 },
        { friendName: 'name', friendAge: 23 },
        { friendName: 'name', friendAge: 24 },
      ],
    };
  }
  return {
    firstName: 'name',
    lastName: 'lastname',
    nullProp: null,
    undefinedProp: undefined,
    emptyData: {},
    emptyList: [],
    friendList: [
      { friendName: 'name', friendAge: 22 },
      { friendName: 'name', friendAge: 23 },
      { friendName: 'name', friendAge: 24 },
    ],
    nestedObject: createCamelCaseObject(level - 1),
  };
};
export const createSnakeCaseObject = (level: number = 1): object => {
  if (level < 1) {
    return {
      first_name: 'name',
      last_name: 'lastname',
      null_prop: null,
      undefined_prop: undefined,
      empty_data: {},
      empty_list: [],
      friend_list: [
        { friend_name: 'name', friend_age: 22 },
        { friend_name: 'name', friend_age: 23 },
        { friend_name: 'name', friend_age: 24 },
      ],
    };
  }
  return {
    first_name: 'name',
    last_name: 'lastname',
    null_prop: null,
    undefined_prop: undefined,
    empty_data: {},
    empty_list: [],
    friend_list: [
      { friend_name: 'name', friend_age: 22 },
      { friend_name: 'name', friend_age: 23 },
      { friend_name: 'name', friend_age: 24 },
    ],
    nested_object: createSnakeCaseObject(level - 1),
  };
};
