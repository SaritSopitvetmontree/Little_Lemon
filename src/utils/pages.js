
const pages = new Map();
pages.set('home', { name: 'Home', path: '/Little_Lemon', anchorable: true });
pages.set('about', { name: 'About', path: '/Little_Lemon/about', anchorable: true });
pages.set('menu', { name: 'Menu', path: '/Little_Lemon/menu', anchorable: true });
pages.set('bookings', { 
  name: 'Reservations', 
  path: '/Little_Lemon/bookings', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'Confirmed Booking', 
  path: '/Little_Lemon/confirmed-booking', 
  anchorable: false 
});
pages.set('orderOnline', { 
  name: 'Order Online', 
  path: '/Little_Lemon/order-online', 
  anchorable: true 
});
pages.set('login', { name: 'Login', path: '/Little_Lemon/login', anchorable: true });

export default pages;
