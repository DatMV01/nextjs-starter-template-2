interface Props {
  ariaLabel?: string;
}

function Footer({ ariaLabel }: Props) {
  const dev = {
    border: true,
  };

  const styles = {
    headerHeight: 'h-14',
  };
  return <div>Footer</div>;
}

export default Footer;
