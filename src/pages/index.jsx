import React from 'react';

export const query = graphql`
  query AllNotesQuery {
    allNotesYaml {
      edges{
        node {
          note
        }
      }
    }
  }
`

const IndexPage = ({
  data: {
    allNotesYaml: {
      edges
    }
  }
}) => (
  <div>
    {<pre>{JSON.stringify(edges, 2, 2)}</pre>}
    <h1 style={{
      fontStyle: 'italic'
    }}>Why, Hello!!!</h1>
    <p>
      I'm <strong>Chris Gomez</strong>, a{' '}
      <a href="https://en.wikipedia.org/wiki/Servant_leadership">servant leader</a>,{' '}
      <a href="https://en.wikipedia.org/wiki/Software_developer">software developer</a>,{' '}
      and obsessive <a href="https://en.wikipedia.org/wiki/Critical_thinking">critical thinker</a>{' '}
      that has evolved from more than 10 years of experience building products
      in the consulting, media, marketing, banking, open source, and SaaS industries.{' '}
      <strong>Welcome to my personal website!</strong>
    </p>
    <p>
      <code>// TODO: Document professional history in detail</code>
    </p>
  </div>
);

export default IndexPage;
