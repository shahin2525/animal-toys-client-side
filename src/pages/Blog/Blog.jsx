const Blog = () => {
  return (
    <div className="bg-rose-100 px-4 py-4">
      <p className="py-2">Q-1 What is an access token?</p>
      <p className="mb-2">
        {" "}
        Answer:- An access token is a tiny piece of code that contains a large
        amount of data. Information about the user, permissions, groups, and
        timeframes is embedded within one token that passes from a server to a
        user&apos;s device
      </p>
      <p className="mb-2">Q-2 What is refresh token</p>
      <p className="mb-2">
        Answer:- Refresh Tokens are credentials used to obtain access tokens.
        Refresh tokens are issued to the client by the authorization server and
        are used to obtain a new access token when the current access token
        becomes invalid or expires, or to obtain additional access tokens with
        identical or narrower scope.
      </p>
      <p className="mb-2">Q-3 How do access token and refresh token work </p>
      <p className="mb-2">
        Answer:- Access tokens are used in token-based authentication to allow
        an application to access an API. The application receives an access
        token after a user successfully authenticates and authorizes access,
        then passes the access token as a credential when it calls the target
        API. Refresh-Token: A refresh token is a special token that is used to
        obtain additional access tokens. This allows you to have short-lived
        access tokens without having to collect credentials every time one
        expires
      </p>
      <p className="mb-2">Q-4 Where should we store them on the client-side</p>
      <p className="mb-2">
        As a web developer, you typically have two options for client-side token
        storage: localStorage (aka localStorage) and cookies. The two have
        different purposes, and hence different strengths and weaknesses.
        Cookies are intended to be read by the server, whereas localStorage can
        only be read by the browser.
      </p>
      <p className="mb-2"> Q-5 Compare SQL and NoSQL databases?</p>
      <p className="mb-2">
        Answer:- SQL databases are relational, and NoSQL databases are
        non-relational. SQL databases use structured query language (SQL) and
        have a predefined schema. NoSQL databases have dynamic schemas for
        unstructured data. SQL databases are vertically scalable, while NoSQL
        databases are horizontally scalable.
      </p>
      <p className="mb-2"> Q-5 What is express js? What is Nest JS ?</p>
      <p className="mb-2">
        Answer:- <span className="underline">Express JS </span>: Express is a
        minimal and flexible Node.js web application framework that provides a
        robust set of features for web and mobile applications.
        <span className="underline">Node JS</span>: Node. js is an open-source
        and cross-platform runtime environment for executing JavaScript code
        outside a browser.
      </p>
      <p className="mb-2">Q-6 What is MongoDB aggregate and how does it work</p>
      <p>
        Answer:- Aggregation is a way of processing a large number of documents
        in a collection by means of passing them through different stages. The
        stages make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline.
      </p>
    </div>
  );
};

export default Blog;
