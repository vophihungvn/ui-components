// import { useMemo } from "react";

interface LayoutProps {
  children?: JSX.Element;
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

  return <div>Layout</div>;

  // return initialized && keycloak.authenticated ? (
  //   <div
  //     style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
  //   >
  //     <nav className="bg-blue-900 border-b-1 border-blue-900">
  //       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center justify-between h-16">
  //           <div className="flex items-center">
  //             <div className="flex-shrink-0">
  //               <img
  //                 className="w-6"
  //                 src={
  //                   (process.env.REACT_APP_ROUTE_BASE_PATH
  //                     ? `${process.env.REACT_APP_ROUTE_BASE_PATH}/`
  //                     : window.location.origin) + "/img/logo-mark.svg"
  //                 }
  //                 alt="Aitomatic PMFP"
  //               />
  //             </div>
  //           </div>

  //           <div className="hidden md:block">
  //             <div className="ml-4 flex items-center md:ml-6">
  //               <button className="p-1 bg-blue-600 rounded-full text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
  //                 <span className="sr-only">View notifications</span>
  //                 {/* <!-- Heroicon name: outline/bell --> */}
  //                 <svg
  //                   className="h-6 w-6"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  //                   />
  //                 </svg>
  //               </button>

  //               {/* <!-- Profile dropdown --> */}
  //               <div className="ml-3 relative">
  //                 <div>
  //                   <button
  //                     type="button"
  //                     className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
  //                     id="user-menu-button"
  //                     aria-expanded="false"
  //                     aria-haspopup="true"
  //                   >
  //                     <span className="sr-only">Open user menu</span>
  //                     <span className="text-blue-200">{username}</span>
  //                   </button>
  //                 </div>

  //                 {/* <!--
  //                 Dropdown menu, show/hide based on menu state.

  //                 Entering: "transition ease-out duration-100"
  //                   From: "transform opacity-0 scale-95"
  //                   To: "transform opacity-100 scale-100"
  //                 Leaving: "transition ease-in duration-75"
  //                   From: "transform opacity-100 scale-100"
  //                   To: "transform opacity-0 scale-95"
  //               -->
  //               <!-- Active: "bg-gray-100", Not Active: "" -->
  //               <!-- <div className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-md shadow-xl  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
  //                 <a href="#" className="block px-4 py-3 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
  //                 <a href="#" className="block px-4 py-3 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Your Profile</a>
  //                 <a href="#" className="block px-4 py-3 text-sm text-gray-700 bg-slate-100" role="menuitem" tabindex="-1" id="user-menu-item-2">Your Profile</a>
  //               </div> --> */}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //     <div className="flex-1">{props?.children}</div>
  //     <div
  //       className="bg-white p-8"
  //       style={{ backgroundColor: "white", fontSize: 16, color: "#2241B0" }}
  //     >
  //       <Row justify="space-between">
  //         <Col>
  //           <Row>
  //             <Col style={{ marginRight: 8 }}>
  //               <img
  //                 src={
  //                   (process.env.REACT_APP_ROUTE_BASE_PATH
  //                     ? `${process.env.REACT_APP_ROUTE_BASE_PATH}/`
  //                     : window.location.origin) + "/img/logo.svg"
  //                 }
  //                 alt="logo"
  //               />
  //             </Col>
  //             <Col style={{ fontWeight: "bold" }}>Powered by H1st</Col>
  //           </Row>
  //         </Col>
  //         {/* <Col>
  //           <Switch
  //             defaultChecked
  //             onChange={(checked) => {
  //               i18n.changeLanguage(checked ? "cn" : "en");
  //             }}
  //             checkedChildren={
  //               <span style={{ color: "white", padding: 8 }}>中文</span>
  //             }
  //             unCheckedChildren={
  //               <span style={{ color: "black", padding: 8 }}>English</span>
  //             }
  //             style={{
  //               marginRight: 12,
  //               width: 100,
  //               alignSelf: "flex-end",
  //             }}
  //           />
  //         </Col> */}
  //       </Row>
  //     </div>
  //   </div>
  // ) : (
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
