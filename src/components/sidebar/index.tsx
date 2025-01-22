"use client"

import { useEffect, useState, useContext, ReactNode } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { ToastContainer } from "react-toastify";

import { ThemeContext } from "@/context/theme";
import { E_THEME } from "@/utils/enums/theme";
import { lightTheme } from "@/components/themes/light"

import { IoHomeOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiMoonFill, PiSunFill } from "react-icons/pi";

import { RiNewspaperFill } from "react-icons/ri";
import * as S from "./styles";
import { Card } from "../UI/Card";

interface Props {
  children?: ReactNode
}

export function Sidebar({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lockSidebar, setLockSidebar] = useState(false);
  const [media, setMedia] = useState(0);

  const { theme, setTheme } = useContext(ThemeContext);

  const [navChecked, setNavChecked] = useState({
    home: false,
    registers: false,
    sales: false,
    financial: false,
    profile: false,
    schedule: false,
    settings: false,
    notifications: false,
  });

  const router = useRouter();
  const pathname = usePathname();

  const handleEnterSidebar = () => {
    if (media > 1020) setIsExpanded(true);
  };

  const handleLeaveSidebar = () => {
    if (media > 1020) {
      if (lockSidebar) return;
      setIsExpanded(false);
    }
  };

  const handleLockSidebar = () => {
    setLockSidebar((state) => !state);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
  };

  const closeIfClickEmpty = (event: React.MouseEvent<HTMLElement>) => {
    if (media <= 1020) {
      if (event.target instanceof HTMLElement && event.target.closest(".sidebar")) return;
      if (event.target instanceof HTMLElement && event.target.closest(".menu")) return;

      handleLockSidebar();
    }
  };

  const handleChangeNav = (isChecked: boolean, key: string) => {
    setNavChecked({
      home: false,
      registers: false,
      sales: false,
      financial: false,
      profile: false,
      schedule: false,
      settings: false,
      notifications: false,
      [key]: isChecked,
    });
  };

  const toggleTheme = () => {
    if (theme === E_THEME.lightMode) return setTheme(E_THEME.darkMode);
    setTheme(E_THEME.lightMode);
  };

  useEffect(() => {
    setMedia(window.innerWidth);

    if (pathname !== "/")
      setNavChecked({
        ...navChecked,
        [pathname.replace("/", "")]: true,
      });
    else
      setNavChecked({
        ...navChecked,
        home: true,
      });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <ToastContainer
        position="top-right"
        theme={theme === E_THEME.darkMode ? "dark" : "light"}
      />

      <S.ContainerSidebar className={theme}>
        <S.ContentSidebar $isExpanded={isExpanded} onClick={closeIfClickEmpty}>
          <S.Sidebar
            className="sidebar"
            $isExpanded={isExpanded}
            onMouseEnter={handleEnterSidebar}
            onMouseLeave={handleLeaveSidebar}
            $theme={theme}
          >
            <S.ContentHeader>
              <S.Logo
                src="/logo2.png"
                alt="Logo"
                width={55}
                height={45}
                placeholder="blur"
                blurDataURL={'/logo2.png'}
              />
            </S.ContentHeader>

            <S.ContentNavAndFooter>
              <S.Ul>
                <S.Li onClick={() => router.push("/")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="home"
                    $theme={theme}
                    checked={navChecked.home}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "home")
                    }
                  />

                  <S.ContentNavItems htmlFor="home">
                    <S.IconAndTitle>
                      <IoHomeOutline size={17} />
                      <S.NavItem>
                        Home
                      </S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => router.push("/")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="register"
                    $theme={theme}
                    checked={navChecked.registers}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "registers")
                    }
                  />

                  <S.ContentNavItems htmlFor="register">
                    <S.IconAndTitle>
                      <RiNewspaperFill size={17} />
                      <S.NavItem>Documentos</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => router.push("/")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="sales"
                    $theme={theme}
                    checked={navChecked.sales}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "sales")
                    }
                  />

                  <S.ContentNavItems htmlFor="sales">
                    <S.IconAndTitle>
                      <TbReportAnalytics size={17} />
                      <S.NavItem>Relatórios</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => router.push("/")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="profile"
                    $theme={theme}
                    checked={navChecked.profile}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "profile")
                    }
                  />

                  <S.ContentNavItems htmlFor="profile">
                    <S.IconAndTitle>
                      <CgProfile size={17} />
                      <S.NavItem>Perfil</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <hr style={{ color: "whitesmoke" }} />

                <S.Li onClick={() => router.push("/")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="notifications"
                    $theme={theme}
                    checked={navChecked.notifications}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "notifications")
                    }
                  />

                  <S.ContentNavItemsNotification htmlFor="notifications">
                    <S.IconAndTitle>
                      <MdOutlineNotificationsActive size={17} />
                      <S.NavItem>Notificações</S.NavItem>
                    </S.IconAndTitle>

                    <S.NumberOfNotifications $isExpanded={isExpanded}>
                      23
                    </S.NumberOfNotifications>
                  </S.ContentNavItemsNotification>
                </S.Li>

                <S.Li onClick={toggleTheme}>
                  <S.ContentNavItems htmlFor="schedule" >
                    <S.IconAndTitle>
                      {theme === E_THEME.darkMode ? (
                        <PiSunFill
                          size={17}
                          color={lightTheme.light}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <PiMoonFill
                          size={17}
                          color='black'
                          style={{ cursor: "pointer" }}
                        />
                      )}

                      <S.NavItem>Thema</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>
              </S.Ul>

              <S.NavFooter>
                <S.Ul $ulPadding="0">
                  <S.Li onClick={() => {
                    if (pathname !== '/settings')
                      router.push("/settings")
                  }}>
                    <S.InputRadio
                      type="radio"
                      name="default"
                      id="settings"
                      $theme={theme}
                      checked={navChecked.settings}
                      onChange={({ target }) =>
                        handleChangeNav(target.checked, "settings")
                      }
                    />

                    <S.ContentNavItems htmlFor="settings">
                      <S.IconAndTitle>
                        <BsGear size={17} />
                        <S.NavItem>
                          Configurações
                        </S.NavItem>
                      </S.IconAndTitle>
                    </S.ContentNavItems>
                  </S.Li>
                </S.Ul>

                <S.ContainerProfile>
                  <S.ImgProfile
                    src="/logo2.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    placeholder="blur"
                    blurDataURL={'/logo2.png'}
                  />

                  <div
                    className="contentProfileTitles"
                    style={{ width: "100%" }}
                  >
                    <S.UserName>Usuario Teste</S.UserName>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <S.EmailText>user_test@gmail.com</S.EmailText>
                      {/* <SlOptionsVertical
                        className="menuProfile"
                        size={17}
                        color="#0000006e"
                        cursor={"pointer"}
                      /> */}
                    </div>
                  </div>
                </S.ContainerProfile>
              </S.NavFooter>
            </S.ContentNavAndFooter>
          </S.Sidebar>

          <S.ContentIconLock
            $isExpanded={isExpanded}
            onClick={handleLockSidebar}
          >
            {lockSidebar ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <S.IconLock size={18} />
                <S.IconMenuMobal size={22} className="menu" />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <S.IconLockOpen size={18} />
                <S.IconMenuMobal size={22} className="menu" />
              </div>
            )}
          </S.ContentIconLock>
        </S.ContentSidebar>

        <S.Children>
          <div style={{ padding: "15px 15px 15px 0", height: '100%' }}>
            <Card theme={theme} height="100%">
              {children}
            </Card>
          </div>
        </S.Children>
      </S.ContainerSidebar>
    </div>
  );
}
