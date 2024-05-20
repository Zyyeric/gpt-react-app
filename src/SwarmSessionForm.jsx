// src/SwarmSessionForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  card: {
    width: '100%',
    maxWidth: 600,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: '#1976d2',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1.5),
    fontWeight: 'bold',
  },
}));

const SwarmSessionForm = () => {
  const classes = useStyles();
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Swarm session created successfully!');
    setDescription('');
    setLink('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" gutterBottom className={classes.title}>
            Initialize a Swarm Session
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={classes.textField}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Zoom or VS Code Live Share Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className={classes.textField}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              type="datetime-local"
              label="Start Time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textField}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              type="datetime-local"
              label="End Time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textField}
              required
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default SwarmSessionForm;
