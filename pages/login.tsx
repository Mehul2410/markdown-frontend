import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import SignIn from "../components/form/SignIn";
import Signup from "../components/form/Signup";

const login = () => {
  const [signup, setSignup] = React.useState<Boolean>(true);

  const onClickSignup = () => {
    setSignup(!signup);
  };

  return (
    <BaseLayout>
      <BasePage>
        {signup ? (
          <SignIn signup={onClickSignup} />
        ) : (
          <Signup signIn={onClickSignup} />
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default login;
