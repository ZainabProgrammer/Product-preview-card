import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import img from "../src/images/img-desk.jpg";
import mobimg from "../src/images/img-mob.jpg";
import icon from "../src/images/icon-cart.svg";
function App() {
  return (
    <div className="main">
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: " hsl(0, 0%, 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            height: "100%",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              padding: "0rem 0rem",
              width: "100%",
            },
            width: "90%",
          }}
        >
          <Stack
            sx={{
              backgroundImage: `url(${mobimg})`, // Set the mobile image as a background image
              "@media (min-width: 600px)": {
                backgroundImage: `url(${img})`,
                height: "500px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                width: "100%",

                // Set the desktop image as a background image for screens wider than 600px
              },
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "260px",
            }}
          ></Stack>

          <Stack
            sx={{
              paddingLeft: "2rem",
              width: "90%",
              paddingRight: "2rem",
            }}
          >
            <Typography
              variant="p"
              sx={{
                paddingTop: "1.8rem",
                paddingBottom: ".4rem",
                marginLeft: 3,
                letterSpacing: 6,
                fontSize: 16,
                color: "hsl(228, 12%, 48%)",
                fontWeight: "500",
              }}
            >
              PERFUME
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                sx={{
                  paddingTop: ".4rem",
                  marginLeft: 3,
                  fontFamily: "Fraunces, serif",
                  fontSize: "2.5rem",
                  color: "hsl(212, 21%, 14%)",
                  sm: {
                    lineHeight: "1",
                  },
                  lineHeight: "0.99",
                }}
                fontWeight="700"
              >
                Gabrielle Essence
                <Typography
                  variant="h4"
                  sx={{
                    marginLeft: 0,
                    fontSize: "2.5rem",
                    fontFamily: "Fraunces, serif",
                    marginTop: "-0.5rem",
                    color: "hsl(212, 21%, 14%)",
                  }}
                  fontWeight="700"
                >
                  Eau De Parfum
                </Typography>
              </Typography>
            </Box>
            <Typography
              sx={{
                padding: "1.2rem",
                marginLeft: 0.8,
                color: "hsl(228, 12%, 49%)",
                fontWeight: "500",
                fontSize: "1.1rem",
                fontFamily: "unset",
                letterSpacing: "normal",
              }}
            >
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: 3,
                marginLeft: 3,
                paddingBottom: ".6rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Fraunces, serif",
                  color: "hsl(158, 36%, 37%)",
                  fontSize: "2.5rem",
                }}
                fontWeight="700"
              >
                $149.99
              </Typography>
              <Typography
                variant="span"
                sx={{
                  textDecoration: "line-through",
                  color: "hsl(228, 12%, 48%)",
                  fontSize: 16,
                }}
              >
                $169.99
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                margin: "1rem 1.7rem",
                marginBottom: "2rem",
                padding: "1rem",
                backgroundColor: "hsl(158, 36%, 37%)",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: "700",
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "unset",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "hsl(158, 36%, 17%)",
                },
              }}
              disableElevation
            >
              <img src={icon} alt="cart" height="20px" width="20px" />

              <div>Add to Cart</div>
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default App;
