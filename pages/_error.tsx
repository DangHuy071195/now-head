import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div>
      <h1>{statusCode ? `An error ${statusCode} occurred on the server` : 'An error occurred on the client'}</h1>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
