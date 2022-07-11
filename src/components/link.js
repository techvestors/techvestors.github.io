/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink
        sx={{
          cursor: 'pointer',
          fontWeight: 'normal',
          '&:hover': {
            color: 'text',
          },
        }}
        {...rest}
      >
        {children ? children : label}
      </MenuLink>
    </NextLink>
  );
}
export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children ? children : label}
    </A>
  );
}
