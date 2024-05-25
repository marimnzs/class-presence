import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Typography, Drawer, Box } from '@mui/material';
import Logo from './logo';

interface CustomDrawerProps {
  isOpen: boolean;
  onClose?: () => void;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#F1E7DD',
        },
      }}
    >
      <List>
        <Box sx={{
          margin: '20px',
        }}>
          <Logo />
        </Box>
        <Typography sx={{
          margin: '20px',
          fontSize: '20px',
        }}>Ola, Marina!</Typography>
        <ListItem button>
          <ListItemIcon>
            <AutoStoriesOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Aulas dos dia" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Controle de presenca" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermIdentityOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Diario de classe" />
        </ListItem>
        <ListItem button >
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default CustomDrawer;
