export const DATA: any  = {
  'categories': [
    {
      'categori_id': 1,
      'name': 'SUV'
    },
    {
      'categori_id': 2,
      'name': 'Truck'
    },
    {
      'categori_id': 3,
      'name': 'Sedan'
    },
    {
      'categori_id': 4,
      'name': 'Van'
    },
    {
      'categori_id': 5,
      'name': 'coupe'
    },
    {
      'categori_id': 6,
      'name': 'sport'
    },
    {
      'categori_id': 7,
      'name': 'convertible'
    }
  ],
  'products': [
    {
      'id': 1,
      'name': 'Porshe',
      'price': '135.000',
      'model': '911',
      'available': true,
      'best_seller': true,
      'categories': [
        5,
        6
      ],
      'img': 'assets/cars/porsche.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 2,
      'name': 'Nissan',
      'price': '80.000',
      'model': 'GT-R',
      'available': true,
      'best_seller': true,
      'categories': [
        5,
        6
      ],
      'img': 'assets/cars/nissan.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 3,
      'name': 'BMW',
      'price': '200.000',
      'model': 'i8',
      'available': true,
      'best_seller': true,
      'categories': [
        6,
        7
      ],
      'img': 'assets/cars/bmw.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 4,
      'name': 'Audi',
      'price': '53.000',
      'model': 'Q7',
      'available': true,
      'best_seller': true,
      'categories': [
        1,
        6
      ],
      'img': 'assets/cars/audi-suv.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 5,
      'name': 'Audi',
      'price': '40.000',
      'model': 'TT',
      'available': true,
      'best_seller': false,
      'categories': [
        5,
        6
      ],
      'img': 'assets/cars/audi.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 6,
      'name': 'Mercedes Benz',
      'price': '100.000',
      'model': 'AMG-GTR',
      'available': true,
      'best_seller': false,
      'categories': [
        6,
        7
      ],
      'img': 'assets/cars/mercedez.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 7,
      'name': 'Jepp',
      'price': '100.000',
      'model': 'Crossover',
      'available': true,
      'best_seller': true,
      'categories': [
        1,
        2
      ],
      'img': 'assets/cars/jeep.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    }
  ]
};
