// import { useMemo } from "react";

interface LayoutProps {
  children?: JSX.Element;
  footer?: JSX.Element;
}

const Layout = (props: LayoutProps): JSX.Element => {
  // const { keycloak, initialized } = useKeycloak();

  // console.log({ keycloak });

  // const username = useMemo(() => {
  //   const { authenticated, idTokenParsed } = keycloak;
  //   if (!authenticated) {
  //     keycloak.login();
  //     return "user";
  //   }
  //   console.log({
  //     idTokenParsed,
  //   });
  //   return (idTokenParsed as any)?.name ?? "";
  // }, [keycloak]);

  // return initialized && keycloak.authenticated ?
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <nav className="bg-blue-900 border-blue-900 border-b-1">
        <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-6"
                  src={
                    (process.env.REACT_APP_ROUTE_BASE_PATH
                      ? `${process.env.REACT_APP_ROUTE_BASE_PATH}/`
                      : window.location.origin) + "/img/logo-mark.svg"
                  }
                  alt="Aitomatic PMFP"
                />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                {/* <button className="p-1 text-blue-200 bg-blue-600 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <!-- Heroicon name: outline/bell -->
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button> */}

                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3">
                  {/* <div>
                    <button
                      type="button"
                      className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <span className="text-blue-200">{username}</span>
                    </button>
                  </div> */}

                  {/* <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <!-- <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Your Profile</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 bg-slate-100" role="menuitem" tabindex="-1" id="user-menu-item-2">Your Profile</a>
                </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-1">{props?.children}</div>
      <div
        className="p-8 bg-white"
        style={{ backgroundColor: "white", fontSize: 16, color: "#2241B0" }}
      >
        {props?.footer ?? ""}
      </div>
    </div>
  );
  // : (
  //   <Row
  //     align="middle"
  //     justify="center"
  //     style={{ width: "100vw", height: "100vh" }}
  //   >
  //     <Spin tip="Loading page" size="large" />
  //   </Row>
  // );
};

export { Layout };
