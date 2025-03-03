/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Hr,
} from "@react-email/components"

interface AdminAlertEmailProps {
  name: string
  service: string
  date: string
  time?: string
  phone?: string
  to?: string
}

export const AdminAlertEmail = ({
  name,
  service,
  date,
  time,
  phone,
  to,
}: AdminAlertEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f6f6f6", margin: "0", padding: "30px" }}>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          <Section style={{ textAlign: "center", marginBottom: "15px" }}>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#000000",
                margin: "0",
                letterSpacing: "0.5px",
              }}
            >
              🔔 New Appointment Alert
            </Text>
          </Section>

          <Hr
            style={{
              borderColor: "#e6e6e6",
              borderWidth: "1px",
              margin: "20px 0",
            }}
          />

          <Section style={{ marginBottom: "20px" }}>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#333333",
                margin: "0 0 10px 0",
              }}
            >
              <strong style={{ color: "#000000" }}>{name}</strong> has just
              booked an appointment for:
            </Text>

            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#000000",
                background: "#f9f9f9",
                padding: "15px",
                borderRadius: "6px",
                borderLeft: "4px solid #000000",
                margin: "15px 0",
              }}
            >
              Service: {service}
            </Text>

            <Text
              style={{
                fontSize: "16px",
                color: "#333333",
                margin: "15px 0 5px 0",
              }}
            >
              <strong style={{ color: "#000000" }}>Date:</strong> {date}
              {time && (
                <span>
                  {" "}
                  at <strong style={{ color: "#000000" }}>{time}</strong>
                </span>
              )}
            </Text>

            {to && (
              <Text
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  margin: "5px 0 15px 0",
                }}
              >
                <strong style={{ color: "#000000" }}>Email:</strong> {to}
              </Text>
            )}
            {phone && (
              <Text
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  margin: "5px 0 15px 0",
                }}
              >
                <strong style={{ color: "#000000" }}>Phone:</strong> {phone}
              </Text>
            )}
          </Section>

          <Section
            style={{
              background: "#f0f0f0",
              padding: "15px",
              borderRadius: "6px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
                color: "#333333",
                margin: "0",
                fontWeight: "500",
              }}
            >
              Please attend to the customer on time!
            </Text>
          </Section>

          <Hr
            style={{
              borderColor: "#e6e6e6",
              borderWidth: "1px",
              margin: "25px 0",
            }}
          />

          <Section style={{ textAlign: "center" }}>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#000000",
                margin: "0",
              }}
            >
              💅✨ Phosua Detailed Collections
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
