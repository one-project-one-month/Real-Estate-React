import { Post, PostType, PostStatus } from '../types/model.type';

export const posts: Post[] = [
  {
    id: 1,
    propertyId: 1,
    userId: 2,
    type: PostType.Sale,
    status: PostStatus.Active,
    adminId: 1,
    phone: '+95912345678',
    socialLink: 'https://facebook.com/john.agent',
    createdAt: '2025-02-01T00:00:00Z',
<<<<<<< HEAD
    description: 'Spacious property with modern amenities and great location.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 2,
    propertyId: 2,
    userId: 2,
    type: PostType.Rent,
    status: PostStatus.Active,
    adminId: 1,
    phone: '+95923456789',
    socialLink: 'https://facebook.com/john.agent',
    createdAt: '2025-02-02T00:00:00Z',
<<<<<<< HEAD
    description: 'Cozy rental property ideal for families and professionals.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 3,
    propertyId: 3,
    userId: 4,
    type: PostType.Sale,
    status: PostStatus.Active,
    adminId: 1,
    phone: '+95934567890',
    socialLink: 'https://facebook.com/sarah.agent',
    createdAt: '2025-02-03T00:00:00Z',
<<<<<<< HEAD
    description: 'Beautiful home for sale with a large backyard.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 4,
    propertyId: 4,
    userId: 4,
    type: PostType.Rent,
    status: PostStatus.Pending,
    adminId: null,
    phone: '+95945678901',
    socialLink: 'https://facebook.com/sarah.agent',
    createdAt: '2025-02-04T00:00:00Z',
<<<<<<< HEAD
    description: 'Affordable rental in a quiet neighborhood.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 5,
    propertyId: 5,
    userId: 6,
    type: PostType.Rent,
    status: PostStatus.Active,
    adminId: 10,
    phone: '+95956789012',
    socialLink: 'https://facebook.com/emma.agent',
    createdAt: '2025-02-05T00:00:00Z',
<<<<<<< HEAD
    description: 'Modern apartment with all the essentials.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 6,
    propertyId: 6,
    userId: 6,
    type: PostType.Sale,
    status: PostStatus.Active,
    adminId: 10,
    phone: '+95967890123',
    socialLink: 'https://facebook.com/emma.agent',
    createdAt: '2025-02-06T00:00:00Z',
<<<<<<< HEAD
    description: 'Luxury property for sale with premium features.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 7,
    propertyId: 7,
    userId: 8,
    type: PostType.Rent,
    status: PostStatus.Pending,
    adminId: null,
    phone: '+95978901234',
    socialLink: 'https://facebook.com/lisa.agent',
    createdAt: '2025-02-07T00:00:00Z',
<<<<<<< HEAD
    description: 'Comfortable rental close to public transport.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 8,
    propertyId: 8,
    userId: 8,
    type: PostType.Lease,
    status: PostStatus.Pending,
    adminId: null,
    phone: '+95989012345',
    socialLink: 'https://facebook.com/lisa.agent',
    createdAt: '2025-02-08T00:00:00Z',
<<<<<<< HEAD
    description: 'Lease opportunity in a prime location.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 9,
    propertyId: 9,
    userId: 11,
    type: PostType.Sale,
    status: PostStatus.Active,
    adminId: 1,
    phone: '+95990123456',
    socialLink: 'https://facebook.com/jane.agent',
    createdAt: '2025-02-09T00:00:00Z',
<<<<<<< HEAD
    description: 'Charming home for sale with updated interiors.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 10,
    propertyId: 10,
    userId: 12,
    type: PostType.Rent,
    status: PostStatus.Active,
    adminId: 1,
    phone: '+95991234567',
    socialLink: 'https://facebook.com/oliver.owner',
    createdAt: '2025-02-10T00:00:00Z',
<<<<<<< HEAD
    description: 'Spacious rental with excellent amenities.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 11,
    propertyId: 11,
    userId: 13,
    type: PostType.Sale,
    status: PostStatus.Active,
    adminId: 10,
    phone: '+95992345678',
    socialLink: 'https://facebook.com/lucas.agent',
    createdAt: '2025-02-11T00:00:00Z',
<<<<<<< HEAD
    description: 'Elegant property for sale in a sought-after area.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 12,
    propertyId: 12,
    userId: 14,
    type: PostType.Rent,
    status: PostStatus.Pending,
    adminId: null,
    phone: '+95993456789',
    socialLink: 'https://facebook.com/sophia.owner',
    createdAt: '2025-02-12T00:00:00Z',
<<<<<<< HEAD
    description: 'Affordable rental with easy access to city center.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 13,
    propertyId: 13,
    userId: 15,
    type: PostType.Lease,
    status: PostStatus.Pending,
    adminId: null,
    phone: '+95994567890',
    socialLink: 'https://facebook.com/noah.agent',
    createdAt: '2025-02-13T00:00:00Z',
<<<<<<< HEAD
    description: 'Great lease option for small families or couples.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 14,
    propertyId: 14,
    userId: 16,
    type: PostType.Sale,
    status: PostStatus.Active,
    adminId: 10,
    phone: '+95995678901',
    socialLink: 'https://facebook.com/mia.owner',
    createdAt: '2025-02-14T00:00:00Z',
<<<<<<< HEAD
    description: 'Modern home for sale with smart features.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 15,
    propertyId: 15,
    userId: 17,
    type: PostType.Rent,
    status: PostStatus.Active,
    adminId: 1,
    phone: '+95996789012',
    socialLink: 'https://facebook.com/liam.agent',
    createdAt: '2025-02-15T00:00:00Z',
<<<<<<< HEAD
    description: 'Rental property with a beautiful view.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
  {
    id: 16,
    propertyId: 16,
    userId: 18,
    type: PostType.Lease,
    status: PostStatus.Pending,
    adminId: null,
    phone: '+95997890123',
    socialLink: 'https://facebook.com/ava.owner',
    createdAt: '2025-02-16T00:00:00Z',
<<<<<<< HEAD
    description: 'Lease available in a peaceful community.',
=======
>>>>>>> 1a083e135bcdcd847632e812e52ed04dc3c163b3
  },
];
