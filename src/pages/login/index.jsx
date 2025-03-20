// import React from "react";
// import {
//   Container,
//   Grid,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Alert,
//   CircularProgress,
// } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import logo from "../../assets/logo.png";
// import Topbar from "../global/Topbar";
// import bag from "../../assets/bg14.png";
// import { login } from "../../services/user_service";
// const Login = () => {

//   // Mutation for login API call
//   const mutation = useMutation({
//     mutationFn: login,
//     onSuccess: (data) => {
//       localStorage.setItem(".otc", data?.token);
//       window.location.href = window.location.origin + "/";
//     },
//     onError: (error) => {
//       console.error("Login Error", error);
//     },
//   });

//   // React Hook Form setup
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (enteredData) => {
//     const apiData = {
//       username: enteredData.username,
//       password: enteredData.password,
//     };
//     mutation.mutate(apiData);
//   };

//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         p: 2,
//       }}
//     >
//       <Topbar />
//       <Grid
//         container
//         sx={{
//           minHeight: "80vh",
//           boxShadow: 3,
//           borderRadius: 3,
//           overflow: "hidden",
//         }}
//       >
//         {/* Left Side - Financial Image */}
//         <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
//           <Box
//             component="img"
//             src={bag}
//             alt="Finance Illustration"
//             sx={{
//               width: "100%",
//               height: "100%", // Adjust this value to make it shorter
//               //   objectFit: "contain", // Ensures the full image is visible without cropping
//               objectPosition: "center",
//             }}
//           />
//         </Grid>

//         {/* Right Side - Login Form */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Paper
//             elevation={6}
//             sx={{
//               p: 4,
//               width: "100%",
//               maxWidth: 400,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <img src={logo} width="210px" alt="Company Logo" />
//             <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
//               Sign in to Your Account
//             </Typography>

//             {/* Error Message */}
//             {mutation.isError && (
//               <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
//                 {mutation.error.status === 401
//                   ? "Invalid username or password!"
//                   : mutation.error?.message}
//               </Alert>
//             )}

//             {/* Login Form */}
//             <Box
//               component="form"
//               onSubmit={handleSubmit(onSubmit)}
//               sx={{ mt: 3, width: "100%" }}
//             >
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Username"
//                 autoFocus
//                 {...register("username", {
//                   required: "Username is required",
//                   minLength: {
//                     value: 4,
//                     message: "Username must be at least 4 characters",
//                   },
//                 })}
//                 error={Boolean(errors.username)}
//                 helperText={errors.username?.message}
//               />

//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 4,
//                     message: "Password must be at least 4 characters",
//                   },
//                 })}
//                 error={Boolean(errors.password)}
//                 helperText={errors.password?.message}
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2, py: 1.5 }}
//                 disabled={mutation.isPending}
//                 color="secondary"
//               >
//                 {mutation.isPending ? (
//                   <CircularProgress size={24} color="inherit" />
//                 ) : (
//                   "Sign In"
//                 )}
//               </Button>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;



import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import logo from "../../assets/logo.png";
import Topbar from "../global/Topbar";
import bag from "../../assets/bg16.jpg";
import { login } from "../../services/user_service";
// import { useAuth } from "../../contexts/AuthProvider"

const Login = () => {
 
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem(".otc", data?.token);
      window.location.href = "/";
    },
    onError: (error) => {
      console.error("Login Error", error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (enteredData) => {
    const apiData = {
      username: enteredData.username,
      password: enteredData.password,
    };
    mutation.mutate(apiData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#478594",
      }}
    >
      <Topbar />

      <Grid
        container
        sx={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          px: 2,
        }}
      >
        {/* Left Side - Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: 250, md: "80vh" },
            ml: { md: 3 }, // Small margin from the left
            borderRadius: "20px",
            boxShadow: 3,
            position: "relative",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: 4,
              borderRadius: 2,
              maxWidth: "80%",
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Welcome Back!
            </Typography>
            <Typography variant="body1">
              Sign in to access your account .
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "auto", md: "80vh" },
            mt: { xs: 4, md: 0 },
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              width: "100%",
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: 3,
            }}
          >
            <img src={logo} width="210px" alt="Company Logo" />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
              Sign in to Your Account
            </Typography>

            {/* Error Message */}
            {mutation.isError && (
              <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
                {mutation.error.status === 401
                  ? "Invalid username or password!"
                  : mutation.error?.message}
              </Alert>
            )}

            {/* Login Form */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3, width: "100%" }}
            >
              <TextField
                fullWidth
                label="Username"
                autoFocus
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters",
                  },
                })}
                error={Boolean(errors.username)}
                helperText={errors.username?.message}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 4 characters",
                  },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                sx={{ mb: 2 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  backgroundColor: "#478594",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#1f5459"
                  },
                }}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;