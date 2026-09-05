type NavLink = {
  linkText: string,
  linkHref: string,
  isHome?: boolean
}
export const navLinks:  NavLink[] = [
  {
    linkText: 'Home',
    linkHref: '/',
    isHome: true
  },
  {
    linkText: 'Join',
    linkHref: '/sign-up/',
    isHome: false
  },
  {
    linkText: 'Event Calendar',
    linkHref: '/calendar/',
    isHome: false
  },
    {
    linkText: 'Links',
    linkHref: '/links/',
    isHome: false
  },
]