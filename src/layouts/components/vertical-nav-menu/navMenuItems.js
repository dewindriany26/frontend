

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
        url: "/dosen/chat",
        name: "Chat",
        slug: "app-user-list",
        icon: "MessageCircleIcon",
        i18n: "Chat",
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
        url: "/admin/chat",
        name: "Chat",
        slug: "chat",
        icon: "MessageCircleIcon",
        i18n: "Chat",
      },
    ]
  },
]


export {
  menuUser,
  menuDosen,
  menuAdmin
}
