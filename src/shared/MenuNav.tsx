import React from 'react';
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from '@mui/icons-material';
import { Divider, List, Toolbar } from '@mui/material';
import { MenuToggleProps } from './menu';
import MenuItem from './MenuItem';

export default function MenuNav(props: MenuToggleProps) {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <MenuItem
          to="posts"
          primary="Post"
          icon={<InboxIcon />}
          onClick={props.handleMenuToggle}
        />
        <MenuItem
          to="todos"
          primary="Todo"
          icon={<MailIcon />}
          onClick={props.handleMenuToggle}
        />
      </List>
    </>
  );
}
