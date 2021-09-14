export interface Imenu {
  isDarkMode?: boolean,
  menuItems?: ImenuItems[];
}

export interface ImenuItems {
  menuItemName: string;
  menuItemRoute: string;
}