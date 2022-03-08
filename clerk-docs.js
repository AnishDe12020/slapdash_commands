const docItems = [
  {
    title:
      "Components → Control Components → Authenticate With Redirect Callback",
    url: "https://docs.clerk.dev/components/control-components/authenticate-with-redirect-callback",
  },
  {
    title: "Components → Control Components → Clerk Loaded",
    url: "https://docs.clerk.dev/components/control-components/clerk-loaded",
  },
  {
    title: "Components → Control Components → Clerk Loading",
    url: "https://docs.clerk.dev/components/control-components/clerk-loading",
  },
  {
    title: "Components → Customization",
    url: "https://docs.clerk.dev/components/customization",
  },
  {
    title: "Components → Introduction",
    url: "https://docs.clerk.dev/components/introduction",
  },
  {
    title: "Components → Sign In With Metamask Button",
    url: "https://docs.clerk.dev/components/sign-in-with-metamask-button",
  },
  {
    title: "Components → Sign In → Redirect To Sign In",
    url: "https://docs.clerk.dev/components/sign-in/redirect-to-sign-in",
  },
  {
    title: "Components → Sign In → Sign In Button",
    url: "https://docs.clerk.dev/components/sign-in/sign-in-button",
  },
  {
    title: "Components → Sign In → Sign In",
    url: "https://docs.clerk.dev/components/sign-in/sign-in",
  },
  {
    title: "Components → Sign Up → Redirect To Sign Up",
    url: "https://docs.clerk.dev/components/sign-up/redirect-to-sign-up",
  },
  {
    title: "Components → Sign Up → Sign Up Button",
    url: "https://docs.clerk.dev/components/sign-up/sign-up-button",
  },
  {
    title: "Components → Sign Up → Sign Up",
    url: "https://docs.clerk.dev/components/sign-up/sign-up",
  },
  {
    title: "Components → Signed In",
    url: "https://docs.clerk.dev/components/signed-in",
  },
  {
    title: "Components → Signed Out",
    url: "https://docs.clerk.dev/components/signed-out",
  },
  {
    title: "Components → User Button",
    url: "https://docs.clerk.dev/components/user-button",
  },
  {
    title: "Components → User Profile → Redirect To User Profile",
    url: "https://docs.clerk.dev/components/user-profile/redirect-to-user-profile",
  },
  {
    title: "Components → User Profile → User Profile",
    url: "https://docs.clerk.dev/components/user-profile/user-profile",
  },
  {
    title: "Get Started → Create React App",
    url: "https://docs.clerk.dev/get-started/create-react-app",
  },
  {
    title: "Get Started → Get Started With Gatsby",
    url: "https://docs.clerk.dev/get-started/get-started-with-gatsby",
  },
  {
    title: "Get Started → Get Started With Web3",
    url: "https://docs.clerk.dev/get-started/get-started-with-web3",
  },
  {
    title: "Get Started → Nextjs Api",
    url: "https://docs.clerk.dev/get-started/nextjs-api",
  },
  {
    title: "Get Started → Nextjs",
    url: "https://docs.clerk.dev/get-started/nextjs",
  },
  {
    title: "Get Started → Redwoodjs",
    url: "https://docs.clerk.dev/get-started/redwoodjs",
  },
  {
    title: "Get Started → Remix",
    url: "https://docs.clerk.dev/get-started/remix",
  },
  {
    title: "Integrations → Bubble.io Beta",
    url: "https://docs.clerk.dev/integrations/bubble.io-beta",
  },
  {
    title: "Integrations → Fauna",
    url: "https://docs.clerk.dev/integrations/fauna",
  },
  {
    title: "Integrations → Firebase",
    url: "https://docs.clerk.dev/integrations/firebase",
  },
  {
    title: "Integrations → Google Analytics",
    url: "https://docs.clerk.dev/integrations/google-analytics",
  },
  {
    title: "Integrations → Hasura",
    url: "https://docs.clerk.dev/integrations/hasura",
  },
  {
    title: "Integrations → Supabase",
    url: "https://docs.clerk.dev/integrations/supabase",
  },
  {
    title: "Learning Center → Build Frontend First → Elevating Permissions",
    url: "https://docs.clerk.dev/learning-center/build-frontend-first/elevating-permissions",
  },
  {
    title: "Learning Center → Build Frontend First → Handling Errors",
    url: "https://docs.clerk.dev/learning-center/build-frontend-first/handling-errors",
  },
  {
    title: "Learning Center → Build Frontend First → Session Authentication",
    url: "https://docs.clerk.dev/learning-center/build-frontend-first/session-authentication",
  },
  {
    title: "Learning Center → Build Frontend First → What Is A Frontend Api",
    url: "https://docs.clerk.dev/learning-center/build-frontend-first/what-is-a-frontend-api",
  },
  {
    title: "Learning Center → Security → Csrf Protection",
    url: "https://docs.clerk.dev/learning-center/security/csrf-protection",
  },
  {
    title: "Learning Center → Security → Fixation Protection",
    url: "https://docs.clerk.dev/learning-center/security/fixation-protection",
  },
  {
    title: "Learning Center → Security → Introduction",
    url: "https://docs.clerk.dev/learning-center/security/introduction",
  },
  {
    title: "Learning Center → Security → Password Protection",
    url: "https://docs.clerk.dev/learning-center/security/password-protection",
  },
  {
    title: "Learning Center → Security → Session Leak Protection",
    url: "https://docs.clerk.dev/learning-center/security/session-leak-protection",
  },
  {
    title: "Learning Center → Security → Vulnerability Disclosure Policy",
    url: "https://docs.clerk.dev/learning-center/security/vulnerability-disclosure-policy",
  },
  {
    title: "Learning Center → Security → Xss Leak Protection",
    url: "https://docs.clerk.dev/learning-center/security/xss-leak-protection",
  },
  {
    title: "Main Concepts → Auth V2",
    url: "https://docs.clerk.dev/main-concepts/auth-v2",
  },
  {
    title: "Main Concepts → Session Lifetime",
    url: "https://docs.clerk.dev/main-concepts/session-lifetime",
  },
  {
    title: "Main Concepts → Session Management",
    url: "https://docs.clerk.dev/main-concepts/session-management",
  },
  {
    title: "Main Concepts → Sign In Flow",
    url: "https://docs.clerk.dev/main-concepts/sign-in-flow",
  },
  {
    title: "Main Concepts → Sign Up Flow",
    url: "https://docs.clerk.dev/main-concepts/sign-up-flow",
  },
  {
    title: "Main Concepts → User Object",
    url: "https://docs.clerk.dev/main-concepts/user-object",
  },
  {
    title: "Popular Guides → Build Your Own Ui",
    url: "https://docs.clerk.dev/popular-guides/build-your-own-ui",
  },
  {
    title: "Popular Guides → Email And Password",
    url: "https://docs.clerk.dev/popular-guides/email-and-password",
  },
  {
    title: "Popular Guides → Invitations",
    url: "https://docs.clerk.dev/popular-guides/invitations",
  },
  {
    title: "Popular Guides → Jwt Templates",
    url: "https://docs.clerk.dev/popular-guides/jwt-templates",
  },
  {
    title: "Popular Guides → Magic Links",
    url: "https://docs.clerk.dev/popular-guides/magic-links",
  },
  {
    title: "Popular Guides → Making Authenticated Requests To The Backend",
    url: "https://docs.clerk.dev/popular-guides/making-authenticated-requests-to-the-backend",
  },
  {
    title: "Popular Guides → Multi Factor Authentication",
    url: "https://docs.clerk.dev/popular-guides/multi-factor-authentication",
  },
  {
    title: "Popular Guides → Passwordless Authentication",
    url: "https://docs.clerk.dev/popular-guides/passwordless-authentication",
  },
  {
    title: "Popular Guides → Popular Guides Multi Session Applications",
    url: "https://docs.clerk.dev/popular-guides/popular-guides-multi-session-applications",
  },
  {
    title: "Popular Guides → Popular Guides Sign Out",
    url: "https://docs.clerk.dev/popular-guides/popular-guides-sign-out",
  },
  {
    title: "Popular Guides → Production Setup",
    url: "https://docs.clerk.dev/popular-guides/production-setup",
  },
  {
    title: "Popular Guides → Setup Your Application",
    url: "https://docs.clerk.dev/popular-guides/setup-your-application",
  },
  {
    title: "Popular Guides → Social Login Oauth",
    url: "https://docs.clerk.dev/popular-guides/social-login-oauth",
  },
  {
    title: "Popular Guides → Ssr Beta",
    url: "https://docs.clerk.dev/popular-guides/ssr-beta",
  },
  {
    title: "Popular Guides → Sync Data To Your Backend",
    url: "https://docs.clerk.dev/popular-guides/sync-data-to-your-backend",
  },
  {
    title: "Popular Guides → Validating Session Tokens",
    url: "https://docs.clerk.dev/popular-guides/validating-session-tokens",
  },
  {
    title: "Reference → Backend Api Reference → Allowlist Identifiers",
    url: "https://docs.clerk.dev/reference/backend-api-reference/allowlist-identifiers",
  },
  {
    title:
      "Reference → Backend Api Reference → Beta Features → Instance Settings",
    url: "https://docs.clerk.dev/reference/backend-api-reference/beta-features/instance-settings",
  },
  {
    title: "Reference → Backend Api Reference → Beta Features → Introduction",
    url: "https://docs.clerk.dev/reference/backend-api-reference/beta-features/introduction",
  },
  {
    title: "Reference → Backend Api Reference → Beta Features → Tokens",
    url: "https://docs.clerk.dev/reference/backend-api-reference/beta-features/tokens",
  },
  {
    title: "Reference → Backend Api Reference → Clients",
    url: "https://docs.clerk.dev/reference/backend-api-reference/clients",
  },
  {
    title: "Reference → Backend Api Reference → Emails",
    url: "https://docs.clerk.dev/reference/backend-api-reference/emails",
  },
  {
    title: "Reference → Backend Api Reference → Introduction",
    url: "https://docs.clerk.dev/reference/backend-api-reference/introduction",
  },
  {
    title: "Reference → Backend Api Reference → Invitations",
    url: "https://docs.clerk.dev/reference/backend-api-reference/invitations",
  },
  {
    title: "Reference → Backend Api Reference → Organizations",
    url: "https://docs.clerk.dev/reference/backend-api-reference/organizations",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Golang → Getting Started",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/golang/getting-started",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Golang → Other Examples",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/golang/other-examples",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Golang → Verifying A Session",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/golang/verifying-a-session",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Node → Getting Started",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/node/getting-started",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Node → User",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/node/user",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Ruby → Available Methods",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/available-methods",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Ruby → Configuration",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/configuration",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Ruby → Getting Started",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/getting-started",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Ruby → Rack Rails Integration",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/rack-rails-integration",
  },
  {
    title: "Reference → Backend Api Reference → Sessions",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sessions",
  },
  {
    title: "Reference → Backend Api Reference → Sms Messages",
    url: "https://docs.clerk.dev/reference/backend-api-reference/sms-messages",
  },
  {
    title: "Reference → Backend Api Reference → Users",
    url: "https://docs.clerk.dev/reference/backend-api-reference/users",
  },
  {
    title: "Reference → Clerk Expo",
    url: "https://docs.clerk.dev/reference/clerk-expo",
  },
  {
    title: "Reference → Clerk React → Clerkprovider",
    url: "https://docs.clerk.dev/reference/clerk-react/clerkprovider",
  },
  {
    title: "Reference → Clerk React → Installation",
    url: "https://docs.clerk.dev/reference/clerk-react/installation",
  },
  {
    title: "Reference → Clerk React → Useclerk Hook",
    url: "https://docs.clerk.dev/reference/clerk-react/useclerk-hook",
  },
  {
    title: "Reference → Clerk React → Usesession Hook",
    url: "https://docs.clerk.dev/reference/clerk-react/usesession-hook",
  },
  {
    title: "Reference → Clerk React → Usesessionlist Hook",
    url: "https://docs.clerk.dev/reference/clerk-react/usesessionlist-hook",
  },
  {
    title: "Reference → Clerk React → Usesignin Hook",
    url: "https://docs.clerk.dev/reference/clerk-react/usesignin-hook",
  },
  {
    title: "Reference → Clerk React → Usesignup Hook",
    url: "https://docs.clerk.dev/reference/clerk-react/usesignup-hook",
  },
  {
    title: "Reference → Clerk React → Useuser Hook",
    url: "https://docs.clerk.dev/reference/clerk-react/useuser-hook",
  },
  {
    title: "Reference → Clerkjs → Clerk",
    url: "https://docs.clerk.dev/reference/clerkjs/clerk",
  },
  {
    title: "Reference → Clerkjs → Client",
    url: "https://docs.clerk.dev/reference/clerkjs/client",
  },
  {
    title: "Reference → Clerkjs → Emailaddress",
    url: "https://docs.clerk.dev/reference/clerkjs/emailaddress",
  },
  {
    title: "Reference → Clerkjs → Installation",
    url: "https://docs.clerk.dev/reference/clerkjs/installation",
  },
  {
    title: "Reference → Clerkjs → Organization",
    url: "https://docs.clerk.dev/reference/clerkjs/organization",
  },
  {
    title: "Reference → Clerkjs → Organizationmembership",
    url: "https://docs.clerk.dev/reference/clerkjs/organizationmembership",
  },
  {
    title: "Reference → Clerkjs → Page 1",
    url: "https://docs.clerk.dev/reference/clerkjs/page-1",
  },
  {
    title: "Reference → Clerkjs → Phonenumber",
    url: "https://docs.clerk.dev/reference/clerkjs/phonenumber",
  },
  {
    title: "Reference → Clerkjs → Session",
    url: "https://docs.clerk.dev/reference/clerkjs/session",
  },
  {
    title: "Reference → Clerkjs → Sessionwithactivities",
    url: "https://docs.clerk.dev/reference/clerkjs/sessionwithactivities",
  },
  {
    title: "Reference → Clerkjs → Signin",
    url: "https://docs.clerk.dev/reference/clerkjs/signin",
  },
  {
    title: "Reference → Clerkjs → Signup",
    url: "https://docs.clerk.dev/reference/clerkjs/signup",
  },
  {
    title: "Reference → Clerkjs → User",
    url: "https://docs.clerk.dev/reference/clerkjs/user",
  },
  {
    title: "Reference → Clerkjs → Web3wallet",
    url: "https://docs.clerk.dev/reference/clerkjs/web3wallet",
  },
  {
    title: "Reference → Email And Sms Templates",
    url: "https://docs.clerk.dev/reference/email-and-sms-templates",
  },
  {
    title: "Reference → Export Users And Data",
    url: "https://docs.clerk.dev/reference/export-users-and-data",
  },
  {
    title: "Reference → Frontend Api Reference → Introduction",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/introduction",
  },
  {
    title:
      "Reference → Frontend Api Reference → Organization Requests → Organization Invitations Requests",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/organization-requests/organization-invitations-requests",
  },
  {
    title:
      "Reference → Frontend Api Reference → Organization Requests → Organization Membership Requests",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/organization-requests/organization-membership-requests",
  },
  {
    title:
      "Reference → Frontend Api Reference → Organization Requests → Organization Requests",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/organization-requests/organization-requests",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Client",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/user-api/client",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Introduction",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/user-api/introduction",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Sessions",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/user-api/sessions",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Sign Ins",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/user-api/sign-ins",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Sign Ups",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/user-api/sign-ups",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Email Addresses",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/email-addresses",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Introduction",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/introduction",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Organizations",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/organizations",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Phone Numbers",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/phone-numbers",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Profile Image",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/profile-image",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Sessions",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/sessions",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Tokens",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/tokens",
  },
  {
    title: "Reference → Frontend Api Reference → Users → User",
    url: "https://docs.clerk.dev/reference/frontend-api-reference/users/user",
  },
  {
    title: "Reference → Import Users",
    url: "https://docs.clerk.dev/reference/import-users",
  },
  {
    title: "Reference → Social Login Reference → Bitbucket",
    url: "https://docs.clerk.dev/reference/social-login-reference/bitbucket",
  },
  {
    title: "Reference → Social Login Reference → Discord",
    url: "https://docs.clerk.dev/reference/social-login-reference/discord",
  },
  {
    title: "Reference → Social Login Reference → Dropbox",
    url: "https://docs.clerk.dev/reference/social-login-reference/dropbox",
  },
  {
    title: "Reference → Social Login Reference → Github",
    url: "https://docs.clerk.dev/reference/social-login-reference/github",
  },
  {
    title: "Reference → Social Login Reference → Gitlab",
    url: "https://docs.clerk.dev/reference/social-login-reference/gitlab",
  },
  {
    title: "Reference → Social Login Reference → Hubspot",
    url: "https://docs.clerk.dev/reference/social-login-reference/hubspot",
  },
  {
    title: "Reference → Social Login Reference → Linkedin",
    url: "https://docs.clerk.dev/reference/social-login-reference/linkedin",
  },
  {
    title: "Reference → Social Login Reference → Microsoft",
    url: "https://docs.clerk.dev/reference/social-login-reference/microsoft",
  },
  {
    title: "Reference → Social Login Reference → Notion",
    url: "https://docs.clerk.dev/reference/social-login-reference/notion",
  },
  {
    title: "Reference → Social Login Reference → Social Login Facebook",
    url: "https://docs.clerk.dev/reference/social-login-reference/social-login-facebook",
  },
  {
    title: "Reference → Social Login Reference → Social Login Google",
    url: "https://docs.clerk.dev/reference/social-login-reference/social-login-google",
  },
  {
    title: "Reference → Social Login Reference → Tiktok",
    url: "https://docs.clerk.dev/reference/social-login-reference/tiktok",
  },
  {
    title: "Reference → Social Login Reference → Twitch",
    url: "https://docs.clerk.dev/reference/social-login-reference/twitch",
  },
  {
    title: "Reference → Social Login Reference → Twitter",
    url: "https://docs.clerk.dev/reference/social-login-reference/twitter",
  },
  {
    title: "Reference → Webhooks",
    url: "https://docs.clerk.dev/reference/webhooks",
  },
];

const response = {
  view: {
    type: "list",
    options: docItems.map((item) => ({
      title: item.title,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://clerk.dev/favicon/favicon-32x32.png",
    })),
  },
};

console.log(JSON.stringify(response));