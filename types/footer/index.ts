import type { TablerIconComponent } from "vue-tabler-icons";
//Footer menu
type FooterMenu = {
    title: string;
    url: string;
};

//Social Links
type SocialLinks = {
    icon: TablerIconComponent;
    url:string;
}

export type { FooterMenu,SocialLinks };
