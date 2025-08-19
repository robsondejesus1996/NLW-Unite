
interface NavLinkPros {
  text: string
  href: string
}

export function NavLink ({text, href} : NavLinkPros) {
  return (
      <a href={href} className='font-medium text-sm text-zinc-300'>{text}</a>
  )
}