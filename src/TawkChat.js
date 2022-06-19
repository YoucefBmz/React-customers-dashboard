export const TawkChat = async ({ user }) => {
  await (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/62a8832eb0d10b6f3e774a06/1g5h40rtr";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  const attritbutesToSet = {};

  attritbutesToSet.username = user?.username;
  attritbutesToSet.email = user?.email;
};
