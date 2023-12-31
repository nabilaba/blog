import * as React from "react";
import { Link } from "gatsby-link";
import SEOComponent from "../components/SEOComponent";
import { Code, Stack, Text } from "@chakra-ui/layout";

const NotFoundPage = () => {
  return (
    <Stack p="96px">
      <Text mb="64px">Page not found</Text>
      <Text mb="48px">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in{" "}
            <Code colorScheme="yellow" p="4px">
              src/pages/
            </Code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </Text>
    </Stack>
  );
};

export default NotFoundPage;

export const Head = () => {
  return <SEOComponent title="404: Not found" />;
};
