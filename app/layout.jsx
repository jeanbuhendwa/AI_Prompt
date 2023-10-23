import "@styles/globals.css";

const metaData = {
  title: "AI Prompt",
  description: "Discover & Share AI Prompts",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
