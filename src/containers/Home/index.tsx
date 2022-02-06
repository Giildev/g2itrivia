// Dependencies
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

// Components
import Text from "../../components/Text";
// Styles
import { HomeStyles } from "./styles";

const Home = () => {
  let navigate = useNavigate();
  return (
    <HomeStyles>
      <Text size="3.2" color="black" headline>
        Welcome to the Trivia Challenge!
      </Text>
      <Text size="2.4" color="black">
        You will be presented with 10 True or False questions.
      </Text>
      <Text size="2.4" color="black">
        Can you score 100%?
      </Text>
      <Button
        onClick={() => navigate("/quiz", { replace: true })}
        type="square"
        status="primary"
        size="large"
        color="white"
      >
        Begin
      </Button>
    </HomeStyles>
  );
};

export default Home;
