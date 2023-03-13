import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function KsbCard({ ksb, theme }) {
  return (
    <Card style={{ margin: "0.5rem" }} bg={theme}>
      <Card.Header>{ksb.title}</Card.Header>
      <Card.Body>
        <Card.Text>{ksb.text}</Card.Text>
        <Button variant="primary">Add Evidence</Button>
      </Card.Body>
    </Card>
  );
}
