/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
// import { Link } from 'components/link';
import Link from 'next/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      href="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image
        src={src}
        alt="techvestors"
        sx={{
          cursor: 'pointer',
        }}
      />
    </Link>
  );
}
