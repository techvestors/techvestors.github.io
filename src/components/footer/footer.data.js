import facebook from 'assets/social/facebook.png';
import twitter from 'assets/social/twitter.png';
import github from 'assets/social/github.png';

import location from 'assets/placeholder.png';
import gmail from 'assets/gmail.png';
import telephone from 'assets/telephone.png';

export const menuItems = [
  {
    id: 2,
    title: 'About Us',
    items: [
      {
        path: '#!',
        label: 'Support Center',
      },
      {
        path: '#!',
        label: 'Customer Support',
      },
      {
        path: '#!',
        label: 'About Us',
      },
      {
        path: '#!',
        label: 'Copyright',
      },
    ],
  },
  {
    id: 3,
    title: 'Our Information',
    items: [
      {
        path: '#!',
        label: 'Return Policy ',
      },
      {
        path: '#!',
        label: 'Privacy Policy',
      },
      {
        path: '#!',
        label: 'Terms & Conditions',
      },
      {
        path: 'career',
        nextPage: true,
        label: 'Career',
      },
    ],
  },
  {
    id: 4,
    title: 'Contact Us',
    items: [
      {
        path: '#!',
        icon: telephone,
        label: '+91 8884937987',
      },
      {
        path: '#!',
        icon: telephone,
        label: '+916266609994',
      },
      {
        path: '#!',
        icon: location,
        label: 'Bangalore, India',
      },
      {
        path: '#!',
        icon: gmail,
        label: 'support@techvestors.tech ',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];

export const social = [
  {
    path: '/',
    label: 'Facebook',
    icon: facebook,
  },
  {
    path: '/',
    label: 'Twitter',
    icon: twitter,
  },
  {
    path: '/',
    label: 'Github',
    icon: github,
  },
];
