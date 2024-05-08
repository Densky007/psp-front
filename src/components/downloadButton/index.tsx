import React from 'react';
import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';

function DownloadButton( props:any ) {
  
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GetAppIcon />}
      component="a"
      href={props.url}          // URL файла, который нужно скачать
      download={props.filename} // Имя файла, под которым он будет сохраняться
      fullWidth
    >
      {props.text}
    </Button>
  );
}

export default DownloadButton;
