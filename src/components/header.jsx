import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
position: absolute;
width: 1440px;
height: 108px;
left: 0px;
top: 0px;

background: #A1CAFF;
opacity: 0.8;
`;

const Container = styled(Toolbar)`
    & > a {
        
width: 133px;
height: 24px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #0478FF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;