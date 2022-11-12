import * as React from 'react';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LinkButton from '../mui/LinkButton';

export default function UserAvatar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
          <MenuItem onClick={handleCloseUserMenu}>
            <LinkButton to={'profile'} textalign="center">Profile</LinkButton>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <LinkButton to={'login'} textalign="center">Logout</LinkButton>
          </MenuItem>
      </Menu>
    </Box>
  );
}
