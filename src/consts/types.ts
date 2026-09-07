export type HomePage = {
  header: string,
  subHeader: string,
  description: string,
  buttonText: string,
  buttonLink: string
}

export type SignUpPage = {
  header: string,
  buttonText: string,
  buttonLink: string,
  bannerLink: string
}

export type Link = {
  linkText: string,
  linkHref: string,
}

export type LinksPage = {
  links: Link[],
}

export type NavLink = {
  linkText: string,
  linkHref: string,
  isHome?: boolean
}