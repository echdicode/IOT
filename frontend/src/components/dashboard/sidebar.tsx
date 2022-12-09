import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi';
import { AiFillDashboard } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../redux';
import { reset } from '../../redux/cart/cart-slice';
import { userLogout } from '../../redux/users/login-slice';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.login);

  const onLogout = () => {
    dispatch(userLogout());
    dispatch(reset());
    navigate('/login');
  };

  return (
    <Navbar
      expand='lg'
      variant='dark'
      className=' show navbar-vertical  px-0 py-3  border-bottom border-bottom-lg-0 '
      id='navbarVertical'
      style={{ backgroundColor: '#1b1b1b' }}
    >
      <Container fluid>
        <Button
          className='navbar-toggler ms-n2'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarCollapse'
          aria-controls='sidebarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </Button>
        <Link
          className='navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center'
          to='/'
        >
          <h2 className='logo text-white'>
            <span className='text-danger'>FIRE</span>
          </h2>
        </Link>

        <div className='collapse navbar-collapse' id='sidebarCollapse'>
          <ul className='navbar-nav'>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/dashboard/product-list'>
                <HiUsers className='me-2' size={'1.5rem'} /> INFO
              </Link>
            </li>

            <li className='nav-item '>
              <Link className='nav-link p-5' to='/dashboard'>
                <HiUsers className='me-2' size={'1.5rem'} /> DASHBOARD
              </Link>
            </li>
          </ul>

          <hr className='navbar-divider my-5 opacity-20' />
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
