const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Satyajit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
