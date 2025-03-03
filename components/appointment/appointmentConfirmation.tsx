import React from "react"
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
  // Img,
  Link,
  Button,
} from "@react-email/components"

interface AppointmentConfirmationProps {
  name: string
  service: string
  date: string
}

export const AppointmentConfirmation: React.FC<
  AppointmentConfirmationProps
> = ({ name, service, date }) => {
  const mainColor = "#00000" // A rich purple/pink color
  const accentColor = "#333333"
  const backgroundColor = "#f8f9fa"
  const containerBg = "#ffffff"

  const serviceLabel = () => {
    switch (service) {
      case "custom-made":
        return "Custom-Made Design Consultation"
      case "measurement":
        return "Measurement Session"
      case "styling":
        return "Styling Session"
      default:
        return service
    }
  }

  return (
    <Html>
      <Head />
      <Body
        style={{
          margin: "0",
          backgroundColor,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          color: "#333333",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: containerBg,
          }}
        >
          {/* Header */}
          <Section
            style={{
              backgroundColor: mainColor,
              padding: "20px",
              textAlign: "center",
              borderRadius: "4px 4px 0 0",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "28px",
                margin: "0",
                fontWeight: "bold",
              }}
            >
              Appointment Confirmation
            </Heading>
          </Section>

          {/* Logo and Greeting */}
          <Section style={{ padding: "30px 30px 20px", textAlign: "center" }}>
            {/* Logo placeholder - replace with your actual logo */}
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: mainColor,
                margin: "10px 0 20px",
              }}
            >
              PHOSUA DETAILED
            </Text>

            <Heading
              as="h2"
              style={{
                fontSize: "22px",
                margin: "10px 0",
                color: accentColor,
              }}
            >
              Hello {name},
            </Heading>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                margin: "16px 0",
              }}
            >
              Thank you for scheduling an appointment with us. We&apos;re
              excited to meet you and help create something beautiful!
            </Text>
          </Section>

          <Hr
            style={{
              borderTop: `1px solid #e6e6e6`,
              margin: "0",
            }}
          />

          {/* Appointment Details */}
          <Section
            style={{
              padding: "30px",
              backgroundColor: "#f9f9f9",
              textAlign: "left",
            }}
          >
            <Heading
              as="h3"
              style={{
                fontSize: "18px",
                margin: "0 0 15px",
                color: mainColor,
                fontWeight: "bold",
              }}
            >
              Appointment Details
            </Heading>

            <Row style={{ margin: "10px 0" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    margin: "0",
                    color: accentColor,
                  }}
                >
                  Service:
                </Text>
              </Column>
              <Column style={{ width: "70%" }}>
                <Text style={{ margin: "0" }}>{serviceLabel()}</Text>
              </Column>
            </Row>

            <Row style={{ margin: "10px 0" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    margin: "0",
                    color: accentColor,
                  }}
                >
                  Date & Time:
                </Text>
              </Column>
              <Column style={{ width: "70%" }}>
                <Text style={{ margin: "0" }}>{date}</Text>
              </Column>
            </Row>

            <Row style={{ margin: "10px 0" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    margin: "0",
                    color: accentColor,
                  }}
                >
                  Location:
                </Text>
              </Column>
              <Column style={{ width: "70%" }}>
                <Text style={{ margin: "0" }}>Phosua Detailed Studio</Text>
              </Column>
            </Row>
          </Section>

          {/* What to Expect */}
          <Section style={{ padding: "30px" }}>
            <Heading
              as="h3"
              style={{
                fontSize: "18px",
                margin: "0 0 15px",
                color: mainColor,
                fontWeight: "bold",
              }}
            >
              What to Expect
            </Heading>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                margin: "10px 0",
              }}
            >
              During your {service} appointment, our expert team will:
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                margin: "10px 0 10px 20px",
              }}
            >
              • Discuss your personal style and preferences
            </Text>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                margin: "10px 0 10px 20px",
              }}
            >
              • Provide professional recommendations
            </Text>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                margin: "10px 0 10px 20px",
              }}
            >
              • Answer any questions you might have
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                margin: "20px 0",
              }}
            >
              We recommend arriving 5-10 minutes before your appointment. If you
              need to reschedule, please contact us at least 24 hours in
              advance.
            </Text>

            <Section style={{ textAlign: "center", margin: "30px 0 10px" }}>
              <Button
                href="https://phosuadetailed.com/contact"
                style={{
                  backgroundColor: mainColor,
                  borderRadius: "4px",
                  color: "#ffffff",
                  fontSize: "16px",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "inline-block",
                  padding: "12px 24px",
                  fontWeight: "bold",
                }}
              >
                Manage Appointment
              </Button>
            </Section>
          </Section>

          <Hr
            style={{
              borderTop: `1px solid #e6e6e6`,
              margin: "0",
            }}
          />

          {/* Footer */}
          <Section
            style={{
              padding: "30px",
              textAlign: "center",
              color: "#666666",
            }}
          >
            <Text
              style={{
                fontSize: "14px",
                margin: "10px 0",
              }}
            >
              Phosua Detailed Collections
            </Text>
            <Text style={{ fontSize: "14px", margin: "10px 0" }}>
              123 Fashion Avenue, Suite 100
            </Text>
            <Text style={{ fontSize: "14px", margin: "10px 0" }}>
              Email: info@phosuadetailed.com | Phone: (123) 456-7890
            </Text>

            <Hr
              style={{
                borderTop: `1px solid #e6e6e6`,
                margin: "20px 0",
              }}
            />

            <Row>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link
                  href="https://phosuadetailed.com"
                  style={{
                    color: mainColor,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Website
                </Link>
              </Column>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link
                  href="https://instagram.com/phosuadetailed"
                  style={{
                    color: mainColor,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Instagram
                </Link>
              </Column>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link
                  href="https://facebook.com/phosuadetailed"
                  style={{
                    color: mainColor,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Facebook
                </Link>
              </Column>
            </Row>

            <Text
              style={{
                fontSize: "12px",
                color: "#999999",
                margin: "20px 0 0",
              }}
            >
              © 2025 Phosua Detailed Collections. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default AppointmentConfirmation
