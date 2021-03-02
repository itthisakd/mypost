import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 100px;
  margin: auto;
  background-color: ${(props) =>  (props.primary ? "lightgrey" : "green")};
  height: 2em;
  color: ${(props) => (props.primary ? "black" : "white")};
`;

function Button(props) {
    return (
        // <StyledButton onClick={props.onClick} primary={props.primary}> OR use rest operator
        <StyledButton {...props}>
        {props.children}
      </StyledButton>
    );
}

export default Button