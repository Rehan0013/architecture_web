import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
  },
});

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          boxShadow: 3,
          borderRadius: 3,
          p: 3,
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2, width: "100%" }}
        >
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Name"
            name="name"
            required
            InputLabelProps={{ style: { color: "#b3b3b3" } }}
            InputProps={{ style: { color: "#ffffff" } }}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            required
            InputLabelProps={{ style: { color: "#b3b3b3" } }}
            InputProps={{ style: { color: "#ffffff" } }}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Phone Number"
            name="phone"
            type="tel"
            InputLabelProps={{ style: { color: "#b3b3b3" } }}
            InputProps={{ style: { color: "#ffffff" } }}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Message"
            name="message"
            multiline
            rows={4}
            required
            InputLabelProps={{ style: { color: "#b3b3b3" } }}
            InputProps={{ style: { color: "#ffffff" } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, bgcolor: "#ffffff", color: "#000", fontWeight: "bold" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
