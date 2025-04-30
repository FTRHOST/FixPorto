export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ cookies }) => {
  try {
    cookies.delete("token", {
      path: "/"
    });
    return new Response(JSON.stringify({ message: "Logged out successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Logout error:", error);
    return new Response(JSON.stringify({ message: "Error during logout" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const post = POST;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  post,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
