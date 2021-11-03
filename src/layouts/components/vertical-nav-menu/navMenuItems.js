

const menuUser =  [
  {
    url: '/user/dashboard',
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",
  },
  {
    header: "Menu",
    icon: "PackageIcon",
    i18n: "Menu",
    items: [
      {
        url: "/apps/email",
        name: "Kelas",
        slug: "email",
        icon: "BookIcon",
        i18n: "Kelas",
      },
      {
        url: "/apps/user/user-list",
        name: "Tugas",
        slug: "app-user-list",
        icon: "CheckSquareIcon",
        i18n: "Tugas",
      },
      {
        url: null,
        name: "Media",
        icon: "AirplayIcon",
        i18n: "Media",
        submenu: [
          {
            url: '/apps/chat',
            name: "Chat",
            slug: "chat",
            i18n: "Chat",
          },
          {
            url: '/apps/user/user-view/268',
            name: "Video Conference",
            slug: "app-user-view",
            i18n: "Video Conference",
          },
        ]
      },
    ]
  },
]




const menuDosen =  [
  {
    url: '/dosen/dashboard',
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",
  },
  {
    header: "Menu",
    icon: "PackageIcon",
    i18n: "Menu",
    items: [
      {
        url: "/dosen/kelas",
        name: "Kelas",
        slug: "email",
        icon: "BookIcon",
        i18n: "Kelas",
      },
      {
        url: "/dosen/tugas-masuk",
        name: "Tugas Masuk",
        slug: "app-user-list",
        icon: "CheckSquareIcon",
        i18n: "Tugas Masuk",
      },
      {
        url: null,
        name: "Media",
        icon: "AirplayIcon",
        i18n: "Media",
        submenu: [
          {
            url: '/dosen/chat',
            name: "Chat",
            slug: "chat",
            i18n: "Chat",
          },
          {
            url: '/apps/user/user-view/268',
            name: "Video Conference",
            slug: "app-user-view",
            i18n: "Video Conference",
          },
        ]
      },
    ]
  },
]



const menuAdmin =  [
  {
    url: '/admin/dashboard',
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",
  },
  {
    header: "Menu",
    icon: "PackageIcon",
    i18n: "Menu",
    items: [
      {
        url: "/admin/dosen",
        name: "Dosen",
        slug: "dosen",
        icon: "UserIcon",
        i18n: "Dosen",
      },
      {
        url: "/admin/mahasiswa",
        name: "Mahasiswa",
        slug: "mahasiswa",
        icon: "UsersIcon",
        i18n: "Mahasiswa",
      },
      {
        url: null,
        name: "Media",
        icon: "AirplayIcon",
        i18n: "Media",
        submenu: [
          {
            url: '/admin/chat',
            name: "Chat",
            slug: "chat",
            i18n: "Chat",
          },
          {
            url: '/apps/user/user-view/268',
            name: "Video Conference",
            slug: "app-user-view",
            i18n: "Video Conference",
          },
        ]
      },
    ]
  },
]


export {
  menuUser,
  menuDosen,
  menuAdmin
}
