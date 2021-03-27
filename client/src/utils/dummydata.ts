import image1 from '../Assets/data_photos/chuttersnap-Q_KdjKxntH8-unsplash.jpg';
import image2 from '../Assets/data_photos/col-legi-de-farmaceutics-de-barcelona-yjydNkTYy4U-unsplash.jpg';
import image3 from '../Assets/data_photos/danielle-cerullo-bIZJRVBLfOM-unsplash.jpg';
import image4 from '../Assets/data_photos/febrian-zakaria-4vjcPXY29I4-unsplash.jpg';
import image5 from '../Assets/data_photos/febrian-zakaria-9Nzv3x8dsOY-unsplash.jpg';
import image6 from '../Assets/data_photos/febrian-zakaria-BVmOeq52hMI-unsplash.jpg';
import image7 from '../Assets/data_photos/s-o-c-i-a-l-c-u-t-EwQhB7yNGOU-unsplash.jpg';
import image8 from '../Assets/data_photos/slidebean-_6rmAEDLtiQ-unsplash.jpg';

export const data = [
  {
    id: 1,
    venueName: 'Longue-1',
    area: '120 msq',
    people: 30,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros suscipit ante blandit feugiat vel quis elit. Morbi ullamcorper nisl vehicula sapien facilisis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    photos: [image2, image1, image3, image4, image5, image6, image7, image8],
    features: [
      'Internet',
      'Sound system',
      'HD projector',
      'Fully equipped kitchen',
      'Bathroom',
      'Sauna',
      '53 inch LED TV',
      'Ciggrate balcony'
    ],
    price: 80,
    address: 'Markkinatie 16 00800 Helsinki',
    bookings: [
      {
        date: { day: 3, month: 3, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      }
    ]
  },
  {
    id: 2,
    venueName: 'Longue-2',
    area: '100 msq',
    people: 20,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros suscipit ante blandit feugiat vel quis elit. Morbi ullamcorper nisl vehicula sapien facilisis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    photos: [image6, image1, image2, image3, image4, image5, image7, image8],
    features: [
      'Internet',
      'HD projector',
      'Fully equipped kitchen',
      'Bathroom',
      '53 inch LED TV',
      'Ciggrate balcony'
    ],
    price: 90,
    address: 'Alutie 16 00800 Helsinki',
    bookings: [
      {
        date: { day: 28, month: 3, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      }
    ]
  },
  {
    id: 3,
    venueName: 'Longue-3',
    area: '160 msq',
    people: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros suscipit ante blandit feugiat vel quis elit. Morbi ullamcorper nisl vehicula sapien facilisis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    photos: [image3, image1, image2, image4, image5, image6, image7, image8],
    features: [
      'Internet',
      'Sound system',
      'HD projector',
      'Fully equipped kitchen',
      'Bathroom',
      '53 inch LED TV'
    ],
    price: 100,
    address: 'maalatie 27 00500 Espoo',
    bookings: [
      {
        date: { day: 5, month: 4, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      },
      {
        date: { day: 6, month: 4, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      }
    ]
  },
  {
    id: 4,
    venueName: 'Longue-4',
    area: '200 msq',
    people: 120,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros suscipit ante blandit feugiat vel quis elit. Morbi ullamcorper nisl vehicula sapien facilisis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    photos: [image1, image2, image3, image4, image5, image6, image7, image8],
    features: ['Internet', 'Sound system', 'HD projector', 'Bathroom', 'Sauna', 'Ciggrate balcony'],
    price: 150,
    address: 'markkinatie 77 00800 Helsinki',
    bookings: [
      {
        date: { day: 12, month: 4, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      },
      {
        date: { day: 13, month: 4, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      }
    ]
  },
  {
    id: 5,
    venueName: 'Longue-5',
    area: '120 msq',
    people: 30,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros suscipit ante blandit feugiat vel quis elit. Morbi ullamcorper nisl vehicula sapien facilisis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    photos: [image4, image1, image2, image3, image5, image6, image7, image8],
    features: [
      'Internet',
      'Sound system',
      'HD projector',
      'Fully equipped kitchen',
      'Bathroom',
      '53 inch LED TV',
      'Ciggrate balcony'
    ],
    price: 90,
    address: 'markkikaari 1 00800 Helsinki',
    bookings: [
      {
        date: { day: 3, month: 3, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      }
    ]
  },
  {
    id: 6,
    venueName: 'Longue-6',
    area: '120 msq',
    people: 30,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros suscipit ante blandit feugiat vel quis elit. Morbi ullamcorper nisl vehicula sapien facilisis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
    photos: [image7, image4, image1, image2, image3, image5, image6, image8],
    features: [
      'Internet',
      'Sound system',
      'HD projector',
      'Fully equipped kitchen',
      'Bathroom',
      '53 inch LED TV',
      'Ciggrate balcony'
    ],
    price: 90,
    address: 'markkikaari 1 00800 Helsinki',
    bookings: [
      {
        date: { day: 3, month: 3, year: 2021 },
        time: [
          { start: '12:00', end: '16:00' },
          { start: '16:50', end: '18:00' }
        ]
      }
    ]
  }
];
