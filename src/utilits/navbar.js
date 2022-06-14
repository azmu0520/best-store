import Course from '../components/Course';
import Generic from '../components/Generic';
import Home from '../components/Home';

export const data = [
  {
    id: 1,
    title: 'Asosiy',
    path: '/main',
    Component: Home,
  },
  {
    id: 2,
    title: 'Kurslarimiz',
    path: '/courses',
    Component: Course,
  },
  {
    id: 3,
    title: 'Blog',
    path: '/blog',
    Component: Generic,
  },
  {
    id: 4,
    title: 'Biz haqimizda',
    path: '/about',
    Component: Generic,
  },
];
