
export interface menu {
    header?: string;
    title?: string;
    children?: menu[];
    to?: string;
}

const sidebarItem: menu[] = [

    {
        title: 'Contact Me',
        to: '#contact'
    },
];

export default sidebarItem;
