import {
  UsersIcon,
  PhoneIcon,
  ShoppingBagIcon,
  DocumentIcon,
} from '@heroicons/vue/outline';

export const useNavigationMenu = [
  {
    title: 'Chi siamo',
    href: 'about',
    icon: UsersIcon,
  },
  {
    title: 'Domini',
    href: 'domains',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Servizi',
    href: 'services',
    icon: DocumentIcon,
  },
  {
    title: 'Contatti',
    href: 'contacts',
    icon: PhoneIcon,
  },
];
