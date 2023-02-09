// import * as React from 'react'
// import Button from 'react-native'
// import TextField from 'react-native'
// import Dialog from 'react-native'
// import DialogActions from '@mui/material/DialogActions'
// import DialogContent from '@mui/material/DialogContent'
// import DialogContentText from '@mui/material/DialogContentText'
// import DialogTitle from '@mui/material/DialogTitle'

// export default function Modal({ props }) {
//     const [open, setOpen] = React.useState(false)

//     const handleClickOpen = () => {
//         setOpen(true)
//     }

//     const handleClose = () => {
//         setOpen(false)
//     }

//     return (
//         <div>
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Nuevo
//             </Button>
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Subscribe</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>Para cargar una nueva actividad, complete los campos</DialogContentText>
//                     {props.map((campo) => {
//                         return (
//                             <TextField
//                                 key={campo.name}
//                                 type={campo.name}
//                                 fullWidth
//                                 variant="standard"
//                                 autoFocus
//                                 margin="dense"
//                             />
//                         )
//                     })}
//                     {/* <TextField
//                         autoFocus
//                         margin="dense"
//                         id="name"
//                         label="Email Address"
//                         type="email"
//                         fullWidth
//                         variant="standard"
//                     /> */}
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button onClick={handleClose}>Subir</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     )
// }
