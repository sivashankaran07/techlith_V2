const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      dropdown: [
        { name: 'Website Development', href: '/webDevlopment' },
        { name: 'Web Design', href: '/webDesign' },
        { name: 'Graphic Design', href: '/graphicDesign' },
        { name: 'Digital Marketing', href: '/digitalMarketing' },
        { name: 'Logo Design', href: '/logoDesign' },
        { name: 'UI/UX Design', href: '/uiDesign' },
      ],
    },
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Contact Us', href: '/Contact' },
  ];
  
  export default navLinks;
  