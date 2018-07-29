const listGroup = [
  {id: 1, name: "Group 1", groupNotifyBot: 1, groupAlertBot: 1, creator: 1, role: 1},
  {id: 2, name: "Group 2", groupNotifyBot: 2, groupAlertBot: 2, creator: 1, role: 2},
  {id: 3, name: "Group 3", groupNotifyBot: 3, groupAlertBot: 3, creator: 1, role: 2},
  {id: 4, name: "Group 4", groupNotifyBot: 4, groupAlertBot: 4, creator: 1, role: 1},
  {id: 5, name: "Group 5", groupNotifyBot: 5, groupAlertBot: 5, creator: 1, role: 3},
  {id: 6, name: "Group 6", groupNotifyBot: 6, groupAlertBot: 6, creator: 1, role: 4},
  {id: 7, name: "Group 7", groupNotifyBot: 7, groupAlertBot: 7, creator: 1, role: 4},
];

const users = [
  {id: 1, username: "namhoang1", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
  {id: 2, username: "namhoang2", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
  {id: 3, username: "namhoang3", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
  {id: 4, username: "namhoang4", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
  {id: 5, username: "namhoang5", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
  {id: 6, username: "namhoang6", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
  {id: 7, username: "namhoang7", enabled: true, status: 'active', firstName: 'Nam', lastName: 'Hoang'},
];

const groupDefault = {
  name: '',
  groupNotifyBot: '',
  groupAlertBot: '',
  creator: '',
  role: 1,
};

const cities = {
  0: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
  ],

  1: [
      { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
      { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
      { markerOffset: -25, name: "Thai Lan", coordinates: [100.99254100000007, 15.870032] },
      { markerOffset: -25, name: "Campodia", coordinates: [104.99096299999997, 12.565679] },
      { markerOffset: -25, name: "Binh Phuoc", coordinates: [106.72346390000007, 11.7511894] },
      { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
      { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    ],

  2: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Arkhangelsk", coordinates: [40.56015530000002, 64.54725069999999] },
  ],

  3: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
    { markerOffset: -25, name: "Thai Lan", coordinates: [100.99254100000007, 15.870032] },
    { markerOffset: -25, name: "Campodia", coordinates: [104.99096299999997, 12.565679] },
  ],

  4: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
    { markerOffset: -25, name: "Thai Lan", coordinates: [100.99254100000007, 15.870032] },
  ],

  5: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
    { markerOffset: -25, name: "Thai Lan", coordinates: [100.99254100000007, 15.870032] },
    { markerOffset: -25, name: "Campodia", coordinates: [104.99096299999997, 12.565679] },
    { markerOffset: -25, name: "Binh Phuoc", coordinates: [106.72346390000007, 11.7511894] },
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
  ],

  6: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Belgorod, Russia", coordinates: [36.598262100000056, 50.5997134] },
  ],

  7: [
      { markerOffset: -25, name: "Belgorod, Russia", coordinates: [36.598262100000056, 50.5997134] },
      { markerOffset: -25, name: "Arkhangelsk", coordinates: [40.56015530000002, 64.54725069999999] },
      { markerOffset: -25, name: "Astrakhan, Russia", coordinates: [48.059934500000054, 46.3588045] }
    ],

  8: [
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    { markerOffset: -25, name: "Lai Chau, Vietnam", coordinates: [103.31190850000007, 22.3686613] },
    { markerOffset: -25, name: "Điện Biên, Vietnam", coordinates: [103.03215490000002, 21.4063898] },
    { markerOffset: -25, name: "Son La, Vietnam", coordinates: [103.72891670000001, 21.1022284] },
    { markerOffset: -25, name: "Bedok, Singapore", coordinates: [103.92734050000001, 1.3236038] },
    { markerOffset: -25, name: "Tampines, Singapore", coordinates: [103.9567879, 1.3495907] },
    { markerOffset: -25, name: "Belgorod, Russia", coordinates: [36.598262100000056, 50.5997134] },
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
    { markerOffset: -25, name: "Thai Lan", coordinates: [100.99254100000007, 15.870032] },
    { markerOffset: -25, name: "Campodia", coordinates: [104.99096299999997, 12.565679] },
    { markerOffset: -25, name: "Binh Phuoc", coordinates: [106.72346390000007, 11.7511894] },
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    { markerOffset: -25, name: "Lai Chau, Vietnam", coordinates: [103.31190850000007, 22.3686613] },
    { markerOffset: -25, name: "Điện Biên, Vietnam", coordinates: [103.03215490000002, 21.4063898] },
    { markerOffset: -25, name: "Son La, Vietnam", coordinates: [103.72891670000001, 21.1022284] },
    { markerOffset: -25, name: "Bedok, Singapore", coordinates: [103.92734050000001, 1.3236038] },
    { markerOffset: -25, name: "Tampines, Singapore", coordinates: [103.9567879, 1.3495907] },
    { markerOffset: -25, name: "Belgorod, Russia", coordinates: [36.598262100000056, 50.5997134] },
    { markerOffset: -25, name: "Arkhangelsk", coordinates: [40.56015530000002, 64.54725069999999] },
  ],

  9: [
    { markerOffset: -25, name: "Điện Biên, Vietnam", coordinates: [103.03215490000002, 21.4063898] },
    { markerOffset: -25, name: "Son La, Vietnam", coordinates: [103.72891670000001, 21.1022284] },
    { markerOffset: -25, name: "Bedok, Singapore", coordinates: [103.92734050000001, 1.3236038] },
    { markerOffset: -25, name: "Astrakhan, Russia", coordinates: [48.059934500000054, 46.3588045] },
  ],

  10: [{ markerOffset: -25, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
    { markerOffset: -25, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 35, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 35, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 35, name: "Bogota", coordinates: [-74.0721, 4.7110] },
    { markerOffset: 35, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -25, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -25, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 35, name: "Paramaribo", coordinates: [-55.2038, 5.8520] },
    { markerOffset: 35, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: -25, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: -25, name: "Caracas", coordinates: [108.277199, 14.058324] },],

  11: [
    { markerOffset: -25, name: "Hà Nội", coordinates: [105.83415979999995, 21.0277644] },
    { markerOffset: -25, name: "Singapore", coordinates: [103.81983600000001, 1.352083] },
    { markerOffset: -25, name: "Thai Lan", coordinates: [100.99254100000007, 15.870032] },
    { markerOffset: -25, name: "Campodia", coordinates: [104.99096299999997, 12.565679] },
    { markerOffset: -25, name: "Binh Phuoc", coordinates: [106.72346390000007, 11.7511894] },
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    { markerOffset: -25, name: "Dac Lac, Vietnam", coordinates: [108.23775190000003, 12.7100116] },
    { markerOffset: -25, name: "Lai Chau, Vietnam", coordinates: [103.31190850000007, 22.3686613] },
    { markerOffset: -25, name: "Điện Biên, Vietnam", coordinates: [103.03215490000002, 21.4063898] },
    { markerOffset: -25, name: "Son La, Vietnam", coordinates: [103.72891670000001, 21.1022284] },
    { markerOffset: -25, name: "Bedok, Singapore", coordinates: [103.92734050000001, 1.3236038] },
    { markerOffset: -25, name: "Tampines, Singapore", coordinates: [103.9567879, 1.3495907] },
    { markerOffset: -25, name: "Belgorod, Russia", coordinates: [36.598262100000056, 50.5997134] },
    { markerOffset: -25, name: "Arkhangelsk", coordinates: [40.56015530000002, 64.54725069999999] },
    { markerOffset: -25, name: "Astrakhan, Russia", coordinates: [48.059934500000054, 46.3588045] },
  ],
};
export {listGroup, groupDefault, users, cities};
