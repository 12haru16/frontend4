import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MenuIcon from '@mui/icons-material/Menu';

import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export default function Header() {
  const navigate = useNavigate();

  const [openCameraPopup, setCameraPopupOpen] = useState(false);
  const [openTotalBottom, setTotalBottomOpen] = useState(false);
  const handleCameraClickOpen = () => {
    setCameraPopupOpen(true);
  };
  const handleCameraClose = () => {
    setCameraPopupOpen(false);
  };
  const handleTotalBottomOpen = () => {
    setTotalBottomOpen(true);
    setCameraPopupOpen(false);
  }
  const handleTotalBottomClose = () => {
    setTotalBottomOpen(false);
  }
  const onClickCameraPage = () => {
    setTotalBottomOpen(false);
    navigate("camerapage");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#009A57"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
          </IconButton>
          <Typography onClick ={() => navigate("/")} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            GreenQ
          </Typography>
          <IconButton onClick={handleCameraClickOpen} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            <AddAPhotoIcon />
          </IconButton>
          <IconButton onClick={undefined} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
          </IconButton>
          
          <Dialog
            open={openCameraPopup}
            keepMounted
            onClose={handleCameraClose}
          >
            <DialogTitle>用途は？</DialogTitle>
            <DialogActions>
              <Button onClick={handleTotalBottomOpen}
              >集計</Button>
              <Button onClick={() => navigate("other")}>
              その他</Button>
              <Button onClick={handleCameraClose}
              >戻る</Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openTotalBottom}
            keepMounted
            onClose={handleTotalBottomClose}
            maxWidth={"md"}
          >
            <DialogTitle>品種リスト</DialogTitle>
            <DialogActions>
              <Button onClick={onClickCameraPage}
              >KIT00005</Button>
              <Button onClick={undefined}
              >KIT00021</Button>
              <Button onClick={undefined}
              >KIT00015</Button>
              <Button onClick={handleTotalBottomClose}
              >戻る</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}