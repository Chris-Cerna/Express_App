import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>REGLAS</DialogTitle>
      <List sx={{ pt: 0 }}>
        
       <ListItem>
       1)Este cotizado solo aplica para neumaticos para todo tipo de vehiculo.
       </ListItem>
       <ListItem>
       2) El neumatico tarda de 24 a 48 horas habiles en ser entregado 			
       </ListItem>
       <ListItem>		
       3) El cliente debe de brindar los siguientes datos: Nombre, direccion exacta (departamento, municipio, colonia o aldea) y un numero de celular.
       </ListItem>
       <ListItem>
       4) Se recomienda que el neumatico que se enviara lleve proteccion para evitar inconvenientes con el transporte de igual manera revisar y tomar fotos del neumatico que se enviara.
       </ListItem>
       <ListItem>
       5) Las guias, seran generadas por el departamento de logistica.
       </ListItem>
       <ListItem>
       6) Cualquie duda que se tenga, con respecto a la guia, rastreo de producto o realizacion de pago comunicarse con el area de logistica
       </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Intrucciones
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}