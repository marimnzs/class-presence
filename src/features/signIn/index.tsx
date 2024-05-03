import React from "react";
import { 
  Button, 
  Box, 
  Typography, 
  TextField 
} from '@mui/material';

const SignIn: React.FC = () => {

  const handleSignIn = () => {

  }

  return (
    <>
    <Box 
      sx={{
        width: "100%", 
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: "120px",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.10)"
        }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "34px",
                color: "#595959",
              }}
            >
              Class
            </Typography>
            <Typography 
              sx={{
                fontSize: "34px",
                color: "#8D3E64",
                fontWeight: "bold",
              }}
            >
              Presence
            </Typography>
          </Box>
          <TextField 
            variant="outlined"
            label="Email"
            type="email"
          />
          <TextField 
            variant="outlined"
            label="Senha"
            type="password"
            sx={{
              marginTop: "10px",
            }}
          />
          <Typography
              sx={{
                fontSize: "12px",
                color: "#595959",
                marginTop: "20px",
              }}
            >
              Esqueceu a senha?
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8D3E64",
                marginTop: "20px",
              }}
            >
              Entrar
            </Button>
        </Box>
    </Box>
    </>
  )
}

export default SignIn;