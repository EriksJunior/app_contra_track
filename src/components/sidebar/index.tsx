"use client"

import { useEffect, useState, useContext, useRef, ReactNode } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { ToastContainer } from "react-toastify";

import { GeneralContext } from "@/context";
import { E_THEME } from "@/utils/enums/theme";
import { lightTheme } from "@/components/themes/light"

import { IoHomeOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiMoonFill, PiSunFill, PiArrowsDownUpLight } from "react-icons/pi";

import { RiNewspaperFill } from "react-icons/ri";
import * as S from "./styles";
import { Card } from "../UI/Card";

import { MaskCpf } from "@/utils/maskCpf";

interface Props {
  children?: ReactNode
}

interface ListCompany {
  name: string
  email: string
  token: string
  cpfCnpj: string
}

export function Sidebar({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lockSidebar, setLockSidebar] = useState(false);
  const [company, setCompany] = useState({ companySelected: { name: '', email: '' }, companies: [{ name: '', email: '', token: '', cpfCnpj: '' }] });
  const [showListCompanies, setShowListCompanies] = useState(false);
  const [media, setMedia] = useState(0);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { theme, setTheme } = useContext(GeneralContext);

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


  const showSelectedCompany = () => {
    if (localStorage.getItem('tokens')) {
      const tokens = JSON.parse(localStorage.getItem('tokens') || '')

      const payload = {
        companySelected: {
          name: tokens?.companySelected?.name,
          email: tokens?.companySelected?.email
        },
        companies: tokens?.companies?.map((comp: ListCompany) => { return { name: comp.name, email: comp.email, token: comp.token, cpfCnpj: comp.cpfCnpj } })
      }

      setCompany(payload)
    }
  }

  const handleCloseListCompanies = () => {
    setShowListCompanies(false)
  }

  const setCompanySelect = (company: ListCompany) => {
    if (localStorage.getItem('tokens')) {
      const tokens = JSON.parse(localStorage.getItem('tokens') || '')

      const payload = {
        ...tokens,
        companySelected: {
          name: company.name,
          email: company.email,
          token: company.token,
        },
      }

      localStorage.setItem('tokens', JSON.stringify(payload))

      Reflect.deleteProperty(payload.companySelected, 'token')
      setCompany(payload)
    }
  }

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

    showSelectedCompany()
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleCloseListCompanies();
      }
    }

    if (showListCompanies) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showListCompanies])

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
                <S.Li onClick={() => router.push("/home")}>
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

                <S.Li onClick={() => {
                  if (pathname !== '/documents')
                    router.push("/documents")
                }}>
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

                <S.Li onClick={() => {
                  if (pathname !== '/reports')
                    router.push("/reports")
                }}>
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

                <S.Li onClick={() => {
                  if (pathname !== '/profile')
                    router.push("/profile")
                }}>
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

                <S.Li onClick={() => {
                  if (pathname !== '/notifications')
                    router.push("/notifications")
                }}>
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

                <S.ContainerProfile onClick={() => setShowListCompanies(state => !state)} ref={dropdownRef}>
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <S.UserName>{company.companySelected.name}</S.UserName>

                      <PiArrowsDownUpLight
                        className="menuProfile"
                        size={17}
                        color="#0000006e"
                        cursor={"pointer"}
                      />
                    </div>

                    <S.EmailText>{company.companySelected.email}</S.EmailText>
                  </div>

                  <S.ContainerSelectCompany onClick={handleCloseListCompanies} $show={showListCompanies} className="containerSelectCompany" ref={dropdownRef}>
                    <S.ListCompanies>
                      {company.companies.map((comp, idx) => (
                        <S.CompanyItem key={idx} $isSelected={comp.name === company.companySelected.name ? true : false} onClick={() => setCompanySelect(comp)}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                            <p style={{ lineHeight: 1 }}>
                              {comp.name}
                            </p>

                            <p className="cpfCnpj">
                              {MaskCpf(comp.cpfCnpj)}
                            </p>
                          </div>
                        </S.CompanyItem>
                      ))}
                    </S.ListCompanies>
                  </S.ContainerSelectCompany>
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
