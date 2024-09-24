interface Props {
  // className?: string;
  children?: React.ReactNode;
}

export const HeaderContainer = ({ children }: Props) => {
  return (
    <header className="container flex h-20 items-center justify-between gap-4 py-4">
      {children}
    </header>
  );
};
